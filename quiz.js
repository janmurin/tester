const fetchAppVersion = async () => {
    try {
        // Check if running from file protocol
        if (window.location.protocol === 'file:') {
            console.warn('Running from file protocol, using hardcoded version');
            return;
        }

        // Wait for service worker to be ready if available
        if (window.appState) {
            try {
                await window.appState.waitForServiceWorker();
            } catch (error) {
                console.warn('Service worker not available:', error);
                return;
            }
        }

        const registration = window.appState?.getServiceWorkerRegistration();
        if (!registration) {
            console.warn('Service worker registration not available');
            return;
        }

        const response = await fetch('service-worker.js');
        const text = await response.text();
        const versionMatch = text.match(/const APP_VERSION = ['"](.+)['"]/);
        
        if (versionMatch && versionMatch[1]) {
            const versionDisplay = document.getElementById('version-display');
            if (versionDisplay) {
                versionDisplay.textContent = `v ${versionMatch[1]}`;
            }
        }
    } catch (error) {
        console.error('Error fetching app version:', error);
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    await fetchAppVersion();
    
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const evaluateBtn = document.getElementById('evaluate-btn');
    const nextBtn = document.getElementById('next-btn');
    const favoriteStar = document.getElementById('favorite-star');
    
    const testQuestionText = document.getElementById('test-question-text');
    const testAnswersContainer = document.getElementById('test-answers-container');
    const testEvaluateBtn = document.getElementById('test-evaluate-btn');
    const testNextBtn = document.getElementById('test-next-btn');
    const startTestBtn = document.getElementById('start-test-btn');
    const testProgress = document.getElementById('test-progress');
    
    // Navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const trainingSection = document.getElementById('training-section');
    const testSection = document.getElementById('test-section');
    
    const startIndexInput = document.getElementById('start-index');
    const endIndexInput = document.getElementById('end-index');
    const rangeErrorMessage = document.getElementById('range-error');
    const scoreVisualization = document.getElementById('score-visualization');
    
    const testStartIndexInput = document.getElementById('test-start-index');
    const testEndIndexInput = document.getElementById('test-end-index');
    const testQuestionCountInput = document.getElementById('test-question-count');
    const testRangeErrorMessage = document.getElementById('test-range-error');
    
    const ANALYTICS_URL = CONFIG.ANALYTICS_URL;
    
    const getDeviceId = () => {
        let deviceId = localStorage.getItem('deviceId');
        if (!deviceId) {
            deviceId = 'device_' + Math.random().toString(36).substring(2, 15) + 
                       Math.random().toString(36).substring(2, 15);
            localStorage.setItem('deviceId', deviceId);
        }
        return deviceId;
    };
    
    const deviceId = getDeviceId();
    
    const sendAnalyticsRequest = async (questionId, score, isTest) => {
        if (!CONFIG.ANALYTICS_ENABLED) {
            console.log('Analytics is disabled');
            return;
        }

        let retryCount = 0;
        const maxRetries = CONFIG.ANALYTICS_RETRY_COUNT;

        while (retryCount <= maxRetries) {
            try {
                const url = new URL(ANALYTICS_URL);
                url.searchParams.append('value', `${deviceId}_questionID_${questionId}_score_${score}_isTest_${isTest}`);
                
                // Create a timeout promise
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => reject(new Error('Request timeout')), CONFIG.ANALYTICS_TIMEOUT);
                });

                // Create the fetch promise
                const fetchPromise = fetch(url.toString(), {
                    method: 'GET',
                    mode: 'no-cors', // Required for Google Apps Script
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                });

                // Race between fetch and timeout
                const response = await Promise.race([fetchPromise, timeoutPromise]);

                // If we get here, the request was successful
                console.log('Analytics data sent successfully');
                return;

            } catch (error) {
                console.warn(`Analytics request attempt ${retryCount + 1} failed:`, error);
                
                if (retryCount === maxRetries) {
                    // On final retry, store the failed request
                    console.error('Analytics request failed after all retries:', error);
                    const failedRequests = JSON.parse(localStorage.getItem('failedAnalyticsRequests') || '[]');
                    failedRequests.push({
                        questionId,
                        score,
                        isTest,
                        timestamp: Date.now(),
                        error: error.message
                    });
                    localStorage.setItem('failedAnalyticsRequests', JSON.stringify(failedRequests));
                    return;
                }

                // Wait before retrying
                await new Promise(resolve => setTimeout(resolve, CONFIG.ANALYTICS_RETRY_DELAY));
                retryCount++;
            }
        }
    };

    // Function to retry failed analytics requests
    const retryFailedAnalyticsRequests = async () => {
        if (!CONFIG.ANALYTICS_ENABLED) return;

        const failedRequests = JSON.parse(localStorage.getItem('failedAnalyticsRequests') || '[]');
        if (failedRequests.length === 0) return;

        const successfulRequests = [];
        const remainingRequests = [];
        
        for (const request of failedRequests) {
            try {
                await sendAnalyticsRequest(request.questionId, request.score, request.isTest);
                successfulRequests.push(request);
            } catch (error) {
                console.error('Retry failed for analytics request:', error);
                remainingRequests.push(request);
            }
        }

        // Update storage with remaining failed requests
        localStorage.setItem('failedAnalyticsRequests', JSON.stringify(remainingRequests));

        // Log results
        if (successfulRequests.length > 0) {
            console.log(`Successfully retried ${successfulRequests.length} analytics requests`);
        }
        if (remainingRequests.length > 0) {
            console.log(`${remainingRequests.length} analytics requests still failed`);
        }
    };

    // Retry failed requests when the app starts
    document.addEventListener('DOMContentLoaded', () => {
        retryFailedAnalyticsRequests();
    });
    
    let currentQuestion = null;
    let selectedAnswers = [];
    let questionScores = {};
    let questionRange = {
        start: 1,
        end: quizQuestions.length
    };
    
    let testQuestions = [];
    let currentTestQuestionIndex = 0;
    let testScore = 0;
    let testMaxScore = 0;
    
    endIndexInput.value = quizQuestions.length;
    endIndexInput.max = quizQuestions.length;
    
    testEndIndexInput.value = quizQuestions.length;
    testEndIndexInput.max = quizQuestions.length;
    testQuestionCountInput.max = quizQuestions.length;
    
    const loadQuestionScores = () => {
        const storedScores = localStorage.getItem('questionScores');
        if (storedScores) {
            questionScores = JSON.parse(storedScores);
        }
        renderScoreVisualization();
    };
    
    let favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    
    const saveFavorites = () => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };
    
    const toggleFavorite = (questionId) => {
        if (favorites[questionId]) {
            delete favorites[questionId];
        } else {
            favorites[questionId] = true;
        }
        saveFavorites();
        updateStarIcon(questionId);
        renderScoreVisualization();
    };
    
    const updateStarIcon = (questionId) => {
        if (favoriteStar) {
            favoriteStar.classList.toggle('favorite', favorites[questionId]);
        }
    };
    
    const loadSpecificQuestion = (questionIndex) => {
        selectedAnswers = [];
        
        nextBtn.classList.add('hidden');
        evaluateBtn.classList.remove('hidden');
        
        currentQuestion = quizQuestions[questionIndex - 1]; // Convert to 0-based index
        
        const questionId = currentQuestion.question;
        const score = getQuestionScore(questionId);
        
        questionText.innerHTML = `<span class="question-score">Score: ${score}</span> ${currentQuestion.question}`;
        
        // Update star icon based on favorite status
        updateStarIcon(questionId);
        
        answersContainer.innerHTML = '';
        
        // Use 4 or 8 answers based on checkbox
        let numAnswers = 4;
        const use8AnswersCheckbox = document.getElementById('use-8-answers');
        if (use8AnswersCheckbox && use8AnswersCheckbox.checked) {
            numAnswers = 8;
        }
        const allAnswers = [...currentQuestion.answers];
        const shuffledAnswers = shuffleArray(allAnswers).slice(0, numAnswers);
        
        shuffledAnswers.forEach((answer, index) => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer-option');
            answerElement.dataset.index = index;
            answerElement.dataset.isCorrect = answer.isCorrect;
            answerElement.textContent = answer.text;
            
            answerElement.addEventListener('click', () => {
                toggleAnswerSelection(answerElement, index, answer);
            });
            
            answersContainer.appendChild(answerElement);
        });
    };
    
    const renderScoreVisualization = () => {
        if (!scoreVisualization) return;
        
        scoreVisualization.innerHTML = '';
        
        for (let i = 0; i < quizQuestions.length; i++) {
            const questionId = quizQuestions[i].question;
            const score = getQuestionScore(questionId);
            const questionIndex = i + 1; // 1-based index for display
            
            const rectangle = document.createElement('div');
            rectangle.className = 'score-rectangle';
            
            if (score === -1) {
                rectangle.classList.add('score-minus1');
            } else {
                rectangle.classList.add(`score-${score}`);
            }
            
            if (questionIndex >= questionRange.start && questionIndex <= questionRange.end) {
                rectangle.classList.add('in-range');
            }
            
            // Add favorite class if the question is favorited
            if (favorites[questionId]) {
                rectangle.classList.add('favorite');
            }
            
            rectangle.title = `Question ${questionIndex}: Score ${score}`;
            
            // Add click handler to load the specific question
            rectangle.addEventListener('click', () => {
                if (questionIndex >= questionRange.start && questionIndex <= questionRange.end) {
                    loadSpecificQuestion(questionIndex);
                }
            });
            
            scoreVisualization.appendChild(rectangle);
        }
    };
    
    const saveQuestionScores = () => {
        localStorage.setItem('questionScores', JSON.stringify(questionScores));
    };
    
    const getQuestionScore = (questionId) => {
        return questionScores[questionId] !== undefined ? questionScores[questionId] : 0;
    };
    
    const updateQuestionScore = (questionId, isAllCorrect) => {
        let currentScore = getQuestionScore(questionId);
        
        if (isAllCorrect) {
            currentScore = Math.min(3, currentScore + 1);
        } else {
            currentScore = Math.max(-1, currentScore - 1);
        }
        
        questionScores[questionId] = currentScore;
        saveQuestionScores();
        renderScoreVisualization();
        
        return currentScore;
    };
    
    const validateTestRangeInputs = () => {
        const startValue = parseInt(testStartIndexInput.value);
        const endValue = parseInt(testEndIndexInput.value);
        const questionCount = parseInt(testQuestionCountInput.value);
        const totalQuestions = quizQuestions.length;
        
        testRangeErrorMessage.classList.add('hidden');
        testRangeErrorMessage.textContent = '';
        
        if (isNaN(startValue) || startValue < 1) {
            testRangeErrorMessage.textContent = 'Start index must be at least 1';
            testRangeErrorMessage.classList.remove('hidden');
            return false;
        }
        
        if (isNaN(endValue) || endValue > totalQuestions) {
            testRangeErrorMessage.textContent = `End index cannot exceed ${totalQuestions}`;
            testRangeErrorMessage.classList.remove('hidden');
            return false;
        }
        
        if (startValue > endValue) {
            testRangeErrorMessage.textContent = 'Start index cannot be greater than end index';
            testRangeErrorMessage.classList.remove('hidden');
            return false;
        }
        
        const rangeSize = endValue - startValue + 1;
        
        if (isNaN(questionCount) || questionCount < 1) {
            testRangeErrorMessage.textContent = 'Number of questions must be at least 1';
            testRangeErrorMessage.classList.remove('hidden');
            return false;
        }
        
        if (questionCount > rangeSize) {
            testRangeErrorMessage.textContent = `Number of questions cannot exceed range size (${rangeSize})`;
            testRangeErrorMessage.classList.remove('hidden');
            return false;
        }
        
        return true;
    };
    
    const initializeTest = () => {
        if (!validateTestRangeInputs()) {
            return;
        }
        
        const startValue = parseInt(testStartIndexInput.value);
        const endValue = parseInt(testEndIndexInput.value);
        const questionCount = parseInt(testQuestionCountInput.value);
        
        testQuestions = [];
        currentTestQuestionIndex = 0;
        testScore = 0;
        testMaxScore = questionCount * 4;
        
        const availableQuestions = [];
        for (let i = startValue - 1; i < endValue; i++) {
            availableQuestions.push(quizQuestions[i]);
        }
        
        const shuffledQuestions = shuffleArray([...availableQuestions]);
        
        testQuestions = shuffledQuestions.slice(0, questionCount);
        
        testProgress.textContent = `Question 1/${questionCount}, total score 0/${testMaxScore}`;
        
        startTestBtn.classList.add('hidden');
        testEvaluateBtn.classList.remove('hidden');
        testNextBtn.classList.add('hidden');
        
        loadTestQuestion();
    };
    
    const loadTestQuestion = () => {
        selectedAnswers = [];
        
        if (currentTestQuestionIndex >= testQuestions.length) {
            testQuestionText.textContent = `Test Complete! Your score: ${testScore}/${testMaxScore}`;
            testAnswersContainer.innerHTML = '';
            testEvaluateBtn.classList.add('hidden');
            testNextBtn.classList.add('hidden');
            startTestBtn.classList.remove('hidden');
            return;
        }
        
        currentQuestion = testQuestions[currentTestQuestionIndex];
        
        testQuestionText.textContent = currentQuestion.question;
        testAnswersContainer.innerHTML = '';
        
        const allAnswers = [...currentQuestion.answers];
        const shuffledAnswers = shuffleArray(allAnswers).slice(0, 4);
        
        shuffledAnswers.forEach((answer, index) => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer-option');
            answerElement.dataset.index = index;
            answerElement.dataset.isCorrect = answer.isCorrect;
            answerElement.textContent = answer.text;
            
            answerElement.addEventListener('click', () => {
                toggleTestAnswerSelection(answerElement, index, answer);
            });
            
            testAnswersContainer.appendChild(answerElement);
        });
    };
    
    const toggleTestAnswerSelection = (element, index, answer) => {
        element.classList.toggle('selected');
        
        const isSelected = element.classList.contains('selected');
        
        if (isSelected) {
            selectedAnswers.push({ index, answer });
        } else {
            selectedAnswers = selectedAnswers.filter(item => item.index !== index);
        }
    };
    
    const evaluateTestAnswers = () => {
        testEvaluateBtn.classList.add('hidden');
        testNextBtn.classList.remove('hidden');
        
        const answerElements = document.querySelectorAll('#test-answers-container .answer-option');
        let incorrectCount = 0;
        
        answerElements.forEach((element) => {
            const isSelected = element.classList.contains('selected');
            const isCorrect = element.dataset.isCorrect === 'true';
            
            if (isSelected && isCorrect) {
                element.classList.add('correct');
            } else if (isSelected && !isCorrect) {
                element.classList.add('incorrect');
                incorrectCount++;
            } else if (!isSelected && isCorrect) {
                element.classList.add('unselected-correct');
                incorrectCount++;
            }
        });
        
        let pointsEarned = 0;
        if (incorrectCount === 0) {
            pointsEarned = 4;
        } else if (incorrectCount === 1) {
            pointsEarned = 3;
        } else if (incorrectCount === 2) {
            pointsEarned = 2;
        } else if (incorrectCount === 3) {
            pointsEarned = 1;
        }
        
        testScore += pointsEarned;
        
        if (currentQuestion) {
            const questionId = currentQuestion.newId;
            sendAnalyticsRequest(questionId, pointsEarned, true);
        }
        
        testProgress.textContent = `Question ${currentTestQuestionIndex + 1}/${testQuestions.length}, total score ${testScore}/${testMaxScore}`;
    };
    
    const nextTestQuestion = () => {
        currentTestQuestionIndex++;
        
        const displayQuestionNumber = Math.min(currentTestQuestionIndex + 1, testQuestions.length);
        testProgress.textContent = `Question ${displayQuestionNumber}/${testQuestions.length}, total score ${testScore}/${testMaxScore}`;
        
        testNextBtn.classList.add('hidden');
        testEvaluateBtn.classList.remove('hidden');
        
        loadTestQuestion();
    };
    
    // Navigation functionality
    const handleNavigation = () => {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                const section = link.dataset.section;
                
                // Hide all sections
                trainingSection.classList.remove('active-section');
                trainingSection.classList.add('hidden-section');
                testSection.classList.remove('active-section');
                testSection.classList.add('hidden-section');
                
                // Show selected section
                if (section === 'training') {
                    trainingSection.classList.remove('hidden-section');
                    trainingSection.classList.add('active-section');
                    
                    // Load a new question if needed
                    if (!currentQuestion) {
                        loadRandomQuestion();
                    }
                } else if (section === 'test') {
                    testSection.classList.remove('hidden-section');
                    testSection.classList.add('active-section');
                    
                    if (testEndIndexInput.value === '') {
                        testEndIndexInput.value = quizQuestions.length;
                    }
                }
            });
        });
    };
    
    const validateRangeInputs = () => {
        const startValue = parseInt(startIndexInput.value);
        const endValue = parseInt(endIndexInput.value);
        const totalQuestions = quizQuestions.length;
        
        rangeErrorMessage.classList.add('hidden');
        rangeErrorMessage.textContent = '';
        
        if (isNaN(startValue) || startValue < 1) {
            rangeErrorMessage.textContent = 'Start index must be at least 1';
            rangeErrorMessage.classList.remove('hidden');
            return false;
        }
        
        if (isNaN(endValue) || endValue > totalQuestions) {
            rangeErrorMessage.textContent = `End index cannot exceed ${totalQuestions}`;
            rangeErrorMessage.classList.remove('hidden');
            return false;
        }
        
        if (startValue > endValue) {
            rangeErrorMessage.textContent = 'Start index cannot be greater than end index';
            rangeErrorMessage.classList.remove('hidden');
            return false;
        }
        
        questionRange.start = startValue;
        questionRange.end = endValue;
        
        renderScoreVisualization();
        
        return true;
    };
    
    const areAllQuestionsInRangeMastered = () => {
        for (let i = questionRange.start - 1; i < questionRange.end; i++) {
            const questionId = quizQuestions[i].question;
            const score = getQuestionScore(questionId);
            if (score !== 3) {
                return false;
            }
        }
        return true;
    };
    
    const loadRandomQuestion = () => {
        selectedAnswers = [];
        
        nextBtn.classList.add('hidden');
        evaluateBtn.classList.remove('hidden');
        
        const allMastered = areAllQuestionsInRangeMastered();
        const includeFavorites = document.getElementById('include-favorites').checked;
        
        if (allMastered) {
            const rangeSize = questionRange.end - questionRange.start + 1;
            const randomOffset = Math.floor(Math.random() * rangeSize);
            const questionIndex = questionRange.start - 1 + randomOffset;
            currentQuestion = quizQuestions[questionIndex];
        } else {
            const availableQuestions = [];
            
            // First, add questions from the current range
            for (let i = questionRange.start - 1; i < questionRange.end; i++) {
                const questionId = quizQuestions[i].question;
                const score = getQuestionScore(questionId);
                if (score !== 3) {
                    availableQuestions.push({
                        index: i,
                        question: quizQuestions[i]
                    });
                }
            }
            
            // If includeFavorites is checked, add favorite questions from outside the range
            if (includeFavorites) {
                for (let i = 0; i < quizQuestions.length; i++) {
                    const questionId = quizQuestions[i].question;
                    // Skip questions that are already in the current range
                    if (i < questionRange.start - 1 || i >= questionRange.end) {
                        if (favorites[questionId]) {
                            const score = getQuestionScore(questionId);
                            if (score !== 3) {
                                availableQuestions.push({
                                    index: i,
                                    question: quizQuestions[i]
                                });
                            }
                        }
                    }
                }
            }
            
            if (availableQuestions.length === 0) {
                // If no questions are available, show a message
                questionText.textContent = 'No questions available in the current range';
                answersContainer.innerHTML = '';
                return;
            }
            
            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            const selectedQuestion = availableQuestions[randomIndex];
            currentQuestion = selectedQuestion.question;
        }
        
        const questionId = currentQuestion.question;
        const score = getQuestionScore(questionId);
        
        questionText.innerHTML = `<span class="question-score">Score: ${score}</span> ${currentQuestion.question}`;
        
        // Update star icon based on favorite status
        updateStarIcon(questionId);
        
        answersContainer.innerHTML = '';
        
        // Use 4 or 8 answers based on checkbox
        let numAnswers = 4;
        const use8AnswersCheckbox = document.getElementById('use-8-answers');
        if (use8AnswersCheckbox && use8AnswersCheckbox.checked) {
            numAnswers = 8;
        }
        const allAnswers = [...currentQuestion.answers];
        const shuffledAnswers = shuffleArray(allAnswers).slice(0, numAnswers);
        
        shuffledAnswers.forEach((answer, index) => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer-option');
            answerElement.dataset.index = index;
            answerElement.dataset.isCorrect = answer.isCorrect;
            answerElement.textContent = answer.text;
            
            answerElement.addEventListener('click', () => {
                toggleAnswerSelection(answerElement, index, answer);
            });
            
            answersContainer.appendChild(answerElement);
        });
    };
    
    const toggleAnswerSelection = (element, index, answer) => {
        element.classList.toggle('selected');
        
        const isSelected = element.classList.contains('selected');
        
        if (isSelected) {
            selectedAnswers.push({ index, answer });
        } else {
            selectedAnswers = selectedAnswers.filter(item => item.index !== index);
        }
    };
    
    const shuffleArray = (array) => {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    
    const evaluateAnswers = () => {
        evaluateBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
        
        const answerElements = document.querySelectorAll('.answer-option');
        let hasIncorrectAnswer = false;
        let allCorrectAnswersSelected = true;
        
        answerElements.forEach((element) => {
            const isSelected = element.classList.contains('selected');
            const isCorrect = element.dataset.isCorrect === 'true';
            
            if (isSelected && isCorrect) {
                element.classList.add('correct');
            } else if (isSelected && !isCorrect) {
                element.classList.add('incorrect');
                hasIncorrectAnswer = true;
            } else if (!isSelected && isCorrect) {
                element.classList.add('unselected-correct');
                allCorrectAnswersSelected = false;
            }
        });
        
        const questionId = currentQuestion.question;
        const isAllCorrect = !hasIncorrectAnswer && allCorrectAnswersSelected;
        const newScore = updateQuestionScore(questionId, isAllCorrect);
        
        sendAnalyticsRequest(currentQuestion.newId, newScore, false);
        
        const scoreElement = document.querySelector('.question-score');
        if (scoreElement) {
            scoreElement.textContent = `Score: ${newScore}`;
        }
    };
    
    // Initialize
    loadQuestionScores(); // This also calls renderScoreVisualization
    validateRangeInputs();
    loadRandomQuestion();
    handleNavigation();
    
    evaluateBtn.addEventListener('click', evaluateAnswers);
    nextBtn.addEventListener('click', loadRandomQuestion);
    
    startIndexInput.addEventListener('change', () => {
        if (validateRangeInputs()) {
            loadRandomQuestion();
        }
    });
    
    endIndexInput.addEventListener('change', () => {
        if (validateRangeInputs()) {
            loadRandomQuestion();
        }
    });
    
    startTestBtn.addEventListener('click', initializeTest);
    testEvaluateBtn.addEventListener('click', evaluateTestAnswers);
    testNextBtn.addEventListener('click', nextTestQuestion);
    
    testStartIndexInput.addEventListener('change', () => {
        validateTestRangeInputs();
        updateTestQuestionCount();
    });
    
    testEndIndexInput.addEventListener('change', () => {
        validateTestRangeInputs();
        updateTestQuestionCount();
    });
    
    const updateTestQuestionCount = () => {
        if (validateTestRangeInputs()) {
            const startValue = parseInt(testStartIndexInput.value);
            const endValue = parseInt(testEndIndexInput.value);
            const rangeSize = endValue - startValue + 1;
            
            testQuestionCountInput.max = rangeSize;
            
            if (parseInt(testQuestionCountInput.value) > rangeSize) {
                testQuestionCountInput.value = rangeSize;
            }
        }
    };

    // Add this event listener to reload a question when the checkbox is toggled
    const use8AnswersCheckbox = document.getElementById('use-8-answers');
    if (use8AnswersCheckbox) {
        use8AnswersCheckbox.addEventListener('change', () => {
            loadRandomQuestion();
        });
    }

    // Add click handler for the star icon
    if (favoriteStar) {
        favoriteStar.addEventListener('click', () => {
            if (currentQuestion) {
                toggleFavorite(currentQuestion.question);
            }
        });
    }
});
