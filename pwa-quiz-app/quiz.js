
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    if (!h1.textContent.includes('v 1.00')) {
        h1.innerHTML = 'PWA Quiz App <span class="version">v 1.00</span>';
    }
    
    const quizContainer = document.getElementById('quiz-container');
    const questionDisplay = document.getElementById('question-display');
    const answersContainer = document.getElementById('answers-container');
    const evaluateBtn = document.getElementById('evaluate-btn');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    
    let currentQuestion = null;
    let selectedAnswers = [];
    
    const showRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * quizQuestions.length);
        currentQuestion = quizQuestions[randomIndex];
        
        questionDisplay.textContent = currentQuestion.question;
        
        answersContainer.innerHTML = '';
        selectedAnswers = [];
        
        let answerIndices = Array.from({ length: 8 }, (_, i) => i);
        
        for (let i = answerIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answerIndices[i], answerIndices[j]] = [answerIndices[j], answerIndices[i]];
        }
        
        const selectedIndices = answerIndices.slice(0, 4);
        
        selectedIndices.sort((a, b) => a - b);
        
        const displayOrder = [...selectedIndices];
        for (let i = displayOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [displayOrder[i], displayOrder[j]] = [displayOrder[j], displayOrder[i]];
        }
        
        displayOrder.forEach((originalIndex) => {
            const answer = currentQuestion.answers[originalIndex];
            
            const answerDiv = document.createElement('div');
            answerDiv.className = 'answer-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `answer-${originalIndex}`;
            checkbox.dataset.index = originalIndex;
            
            const label = document.createElement('label');
            label.htmlFor = `answer-${originalIndex}`;
            label.textContent = answer.text;
            
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    selectedAnswers.push(originalIndex);
                } else {
                    selectedAnswers = selectedAnswers.filter(i => i !== originalIndex);
                }
            });
            
            answerDiv.appendChild(checkbox);
            answerDiv.appendChild(label);
            answersContainer.appendChild(answerDiv);
        });
        
        evaluateBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'none';
        
        const previousAnswers = document.querySelectorAll('.answer-item');
        previousAnswers.forEach(item => {
            item.classList.remove('correct-selected', 'incorrect-selected', 'correct-not-selected');
        });
    };
    
    showRandomQuestion();
    
    evaluateBtn.addEventListener('click', () => {
        if (!currentQuestion) return;
        
        const answerItems = document.querySelectorAll('.answer-item');
        
        const displayedIndices = Array.from(answerItems).map(item => {
            const checkbox = item.querySelector('input[type="checkbox"]');
            return parseInt(checkbox.dataset.index);
        });
        
        displayedIndices.forEach((index, i) => {
            const answer = currentQuestion.answers[index];
            const answerDiv = answerItems[i];
            const checkbox = answerDiv.querySelector('input[type="checkbox"]');
            const isSelected = selectedAnswers.includes(index);
            
            if (isSelected && answer.isCorrect) {
                answerDiv.classList.add('correct-selected');
            } else if (isSelected && !answer.isCorrect) {
                answerDiv.classList.add('incorrect-selected');
            } else if (!isSelected && answer.isCorrect) {
                answerDiv.classList.add('correct-not-selected');
            }
            
            checkbox.disabled = true;
        });
        
        evaluateBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'block';
    });
    
    nextQuestionBtn.addEventListener('click', showRandomQuestion);
});
