document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const clickButton = document.getElementById('clickButton');
    
    let count = parseInt(localStorage.getItem('clickCount')) || 0;
    
    counterElement.textContent = count;
    
    clickButton.addEventListener('click', () => {
        count++;
        
        counterElement.textContent = count;
        
        localStorage.setItem('clickCount', count);
    });
});
