
document.addEventListener('DOMContentLoaded', () => {
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const evaluateBtn = document.getElementById('evaluate-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let currentQuestion = null;
    let selectedAnswers = [];
    
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
            answerElement.innerHTML = `
                <input type="checkbox" id="answer-${index}" class="answer-checkbox">
                <label for="answer-${index}">${answer.text}</label>
            `;
            
            answerElement.addEventListener('click', () => toggleAnswerSelection(answerElement, index, answer));
            
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
        
        answerElements.forEach((element, index) => {
            const isSelected = element.classList.contains('selected');
            const answer = JSON.parse(JSON.stringify(currentQuestion.answers.find(a => 
                a.text === element.querySelector('label').textContent)));
            
            if (isSelected && answer.isCorrect) {
                element.classList.add('correct');
            } else if (isSelected && !answer.isCorrect) {
                element.classList.add('incorrect');
            } else if (!isSelected && answer.isCorrect) {
                element.classList.add('unselected-correct');
            }
        });
    };
    
    loadRandomQuestion();
    
    evaluateBtn.addEventListener('click', evaluateAnswers);
    nextBtn.addEventListener('click', loadRandomQuestion);
});
