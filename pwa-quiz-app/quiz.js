const quizQuestions = [
    {
        question: "1. Podľa bunkovej teórie:",
        answers: [
            { text: "z hľadiska organizácie predstavujú bunky najjednoduchšie živé sústavy", isCorrect: false },
            { text: "všetky bunky pozostávajú z tých istých prvkov a molekúl", isCorrect: false },
            { text: "každá bunka vzniká len delením už existujúcej bunky", isCorrect: true },
            { text: "živé bunky sú zložené z rovnakej hmoty ako neživé objekty", isCorrect: false },
            { text: "základom každého organizmu rastlín a živočíchov je bunka", isCorrect: true },
            { text: "každá bunka pozostáva predovšetkým z anorganických makromolekúl", isCorrect: false },
            { text: "bunky sú štruktúrované, stupňovito usporiadané, otvorené nukleoproteínové sústavy", isCorrect: false },
            { text: "všetky bunky majú schopnosť uchovávať a replikovať genetickú informáciu", isCorrect: false }
        ]
    },
    {
        question: "2. Prvú ucelenú evolučnú teóriu živých organizmov sformuloval:",
        answers: [
            { text: "nemecký lekár G. Trevirana", isCorrect: false },
            { text: "Ch. Darwin", isCorrect: false },
            { text: "J. B. Lamarck", isCorrect: true },
            { text: "L. Pasteur", isCorrect: false },
            { text: "C. Linné", isCorrect: false },
            { text: "C. Woese", isCorrect: false },
            { text: "anglický prírodovedec W. Harvey", isCorrect: false },
            { text: "francúzsky prírodovedec J. B. Lamarck v roku 1809", isCorrect: true }
        ]
    },
    {
        question: "3. Ktoré tvrdenie je správne:",
        answers: [
            { text: "J. B. Lamarck je autorom binomickej nomenklatúry", isCorrect: false },
            { text: "L. Pasteur definitívne vyvrátil možnosť samoplodenia i tých najmenšich organizmov", isCorrect: true },
            { text: "M. J. Schleiden je zakladateľom modernej systematiky organizmov", isCorrect: false },
            { text: "T. Schwann patrí k autorom bunkovej teórie", isCorrect: true },
            { text: "C. Woese je autorom dvojmenného pomenovania organizmov", isCorrect: false },
            { text: "pre skúmanie biologických objektov použil mikroskop medzi prvými R. Hooke", isCorrect: true },
            { text: "J. G. Mendel objasnil, že molekuly DNA sú materiálnym nositeľom genetickej informácie", isCorrect: false },
            { text: "autorstvo pojmu biológia sa pripisuje A. Leeuwenhoekovi", isCorrect: false }
        ]
    },
    {
        question: "4. Bunkovú teóriu formulovali:",
        answers: [
            { text: "R. Hooke", isCorrect: false },
            { text: "A. Leewenhoek", isCorrect: false },
            { text: "M. J. Schleiden", isCorrect: true },
            { text: "L. Pasteur", isCorrect: false },
            { text: "J. E. Purkyne", isCorrect: true },
            { text: "T. Schwann", isCorrect: true },
            { text: "M. Malpighi", isCorrect: false },
            { text: "Ch. L. Treviranus", isCorrect: false }
        ]
    },
    {
        question: "5. Základy novodobej anatómie ľudského tela položil:",
        answers: [
            { text: "W. Harvey", isCorrect: false },
            { text: "Aristoteles", isCorrect: false },
            { text: "R. Hooke", isCorrect: false },
            { text: "J. E. Purkyňe", isCorrect: false },
            { text: "A. Vesalius", isCorrect: true },
            { text: "Galenos", isCorrect: false },
            { text: "R. Virchow", isCorrect: false },
            { text: "M. Malpighi", isCorrect: false }
        ]
    },
    {
        question: "6. Medzi fyziologické vedy patria:",
        answers: [
            { text: "fyziológia človeka", isCorrect: true },
            { text: "fyziológia prvkov", isCorrect: false },
            { text: "histológia", isCorrect: false },
            { text: "embryológia", isCorrect: false },
            { text: "vedy, ktoré študujú funkciu jednotlivých orgánov živých sústav", isCorrect: true },
            { text: "fyziológia živočíchov", isCorrect: true },
            { text: "vedy, ktoré študujú funkciu jednotlivých bunkových organel", isCorrect: false },
            { text: "fyziológia rastlín", isCorrect: true }
        ]
    },
    {
        question: "7. Parazitológia študuje:",
        answers: [
            { text: "správanie mikroorganizinov", isCorrect: false },
            { text: "cudzopasné organizmy", isCorrect: true },
            { text: "vzťahy živých sústav k prostrediu", isCorrect: false },
            { text: "cudzopasné mikroorganizmy", isCorrect: true },
            { text: "dedičnosť a premenlivosť mikroorganizmov", isCorrect: false },
            { text: "vzťahy medzi hostiteľom a parazitom", isCorrect: true },
            { text: "zárodočný vývoj mikroorganizmov", isCorrect: false },
            { text: "a definuje biologické zákonitosti vzťahov medzi parazitom a hostiteľom", isCorrect: true }
        ]
    },
    {
        question: "8. Dvojzávitnicovú štruktúru DNA a jej význam pre prenos genetickej informácie objasnili:",
        answers: [
            { text: "C. Woese", isCorrect: false },
            { text: "v roku 1944", isCorrect: false },
            { text: "v roku 1953", isCorrect: true },
            { text: "F. H. Crick", isCorrect: true },
            { text: "J. G. Mendel", isCorrect: false },
            { text: "v roku 1866", isCorrect: false },
            { text: "J. D. Watson", isCorrect: true },
            { text: "v roku 1966", isCorrect: false }
        ]
    },
    {
        question: "9. Voda v bunkách má funkciu:",
        answers: [
            { text: "zásobnú", isCorrect: false },
            { text: "konštrukčnú", isCorrect: false },
            { text: "ako zdroj energie", isCorrect: false },
            { text: "substrátovú — vytvára vhodné prostredie pre chemické deje", isCorrect: true },
            { text: "ako účinné rozpúšťadlo", isCorrect: true },
            { text: "regulačnú — reguluje príjem a výdaj látok bunkou", isCorrect: false },
            { text: "ako dôležitý faktor tepelného hospodárenia", isCorrect: true },
            { text: "ako základná stavebná jednotka makromolekulových látok", isCorrect: false }
        ]
    },
    {
        question: "10. Monomérom bielkovín sú:",
        answers: [
            { text: "nukleotidy", isCorrect: false },
            { text: "peptidy", isCorrect: false },
            { text: "aminoskupiny", isCorrect: false },
            { text: "atómy uhlíka a dusíka", isCorrect: false },
            { text: "aminokyseliny", isCorrect: true },
            { text: "dusíkaté organické bázy", isCorrect: false },
            { text: "monosacharidy", isCorrect: false },
            { text: "nukleozidy", isCorrect: false }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
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
        
        currentQuestion.answers.forEach((answer, index) => {
            const answerDiv = answerItems[index];
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
