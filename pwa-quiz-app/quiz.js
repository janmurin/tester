const fetchAppVersion = async () => {
    try {
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

document.addEventListener('DOMContentLoaded', () => {
    fetchAppVersion();
    
    // Quiz elements
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const evaluateBtn = document.getElementById('evaluate-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const trainingSection = document.getElementById('training-section');
    const testSection = document.getElementById('test-section');
    
    const startIndexInput = document.getElementById('start-index');
    const endIndexInput = document.getElementById('end-index');
    const rangeErrorMessage = document.getElementById('range-error');
    const scoreVisualization = document.getElementById('score-visualization');
    
    let currentQuestion = null;
    let selectedAnswers = [];
    let questionScores = {};
    let questionRange = {
        start: 1,
        end: quizQuestions.length
    };
    
    endIndexInput.value = quizQuestions.length;
    endIndexInput.max = quizQuestions.length;
    
    const loadQuestionScores = () => {
        const storedScores = localStorage.getItem('questionScores');
        if (storedScores) {
            questionScores = JSON.parse(storedScores);
        }
        renderScoreVisualization();
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
            
            rectangle.title = `Question ${questionIndex}: Score ${score}`;
            
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
        
        if (allMastered) {
            const rangeSize = questionRange.end - questionRange.start + 1;
            const randomOffset = Math.floor(Math.random() * rangeSize);
            const questionIndex = questionRange.start - 1 + randomOffset; // Adjust for 0-based array index
            currentQuestion = quizQuestions[questionIndex];
        } else {
            const availableQuestions = [];
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
            
            const randomIndex = Math.floor(Math.random() * availableQuestions.length);
            const selectedQuestion = availableQuestions[randomIndex];
            currentQuestion = selectedQuestion.question;
        }
        
        const questionId = currentQuestion.question;
        const score = getQuestionScore(questionId);
        
        questionText.innerHTML = `<span class="question-score">Score: ${score}</span> ${currentQuestion.question}`;
        
        answersContainer.innerHTML = '';
        
        const allAnswers = [...currentQuestion.answers];
        const shuffledAnswers = shuffleArray(allAnswers).slice(0, 4);
        
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
    
    // Event listeners
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
});
