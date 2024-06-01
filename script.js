document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const newGridButton = document.querySelector('#new-grid')

    function createGrid(size) {
        container.innerHTML = '';

        const squareSize = container.clientWidth / size - 2
        for (let i = 0; i < size * size; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;


            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = '#4682b4'; 

        });
    
        container.appendChild(square);

    }
}
    
    createGrid(16);

    newGridButton.addEventListener('click', () => {
        let userGridSize = prompt('Enter the number of squares per side (up to 100):');
        userGridSize = parseInt(userGridSize);

        if (!isNaN(userGridSize) && userGridSize > 0 && userGridSize <= 100) {
            createGrid(userGridSize); 
        } else {
            alert('Please enter a valid number between 1 and 100');
        }
    });
});
    
    
    
        

