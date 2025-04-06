document.addEventListener('DOMContentLoaded', () => {
    // Quiz elements
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const evaluateBtn = document.getElementById('evaluate-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // Navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const trainingSection = document.getElementById('training-section');
    const testSection = document.getElementById('test-section');
    
    let currentQuestion = null;
    let selectedAnswers = [];
    
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
    
    const loadRandomQuestion = () => {
        selectedAnswers = [];
        
        nextBtn.classList.add('hidden');
        evaluateBtn.classList.remove('hidden');
        
        const randomIndex = Math.floor(Math.random() * quizQuestions.length);
        currentQuestion = quizQuestions[randomIndex];
        
        questionText.textContent = currentQuestion.question;
        
        answersContainer.innerHTML = '';
        
        const allAnswers = [...currentQuestion.answers];
        const shuffledAnswers = shuffleArray(allAnswers).slice(0, 4);
        
        shuffledAnswers.forEach((answer, index) => {
            const answerElement = document.createElement('div');
            answerElement.classList.add('answer-option');
            answerElement.dataset.index = index;
            answerElement.dataset.isCorrect = answer.isCorrect;
            answerElement.innerHTML = `
                <input type="checkbox" id="answer-${index}" class="answer-checkbox">
                <label for="answer-${index}">${answer.text}</label>
            `;
            
            answerElement.addEventListener('click', (e) => {
                const checkbox = answerElement.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
                
                toggleAnswerSelection(answerElement, index, answer);
                
                if (e.target.tagName === 'INPUT') {
                    e.preventDefault();
                }
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
        
        answerElements.forEach((element) => {
            const isSelected = element.classList.contains('selected');
            const isCorrect = element.dataset.isCorrect === 'true';
            
            if (isSelected && isCorrect) {
                element.classList.add('correct');
            } else if (isSelected && !isCorrect) {
                element.classList.add('incorrect');
            } else if (!isSelected && isCorrect) {
                element.classList.add('unselected-correct');
            }
        });
    };
    
    // Initialize
    loadRandomQuestion();
    handleNavigation();
    
    // Event listeners
    evaluateBtn.addEventListener('click', evaluateAnswers);
    nextBtn.addEventListener('click', loadRandomQuestion);
});
