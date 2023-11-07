// Select the container and clear button elements from the DOM.
const container = document.querySelector('#container');
const clear_btn = document.querySelector('#clear-btn');

// Set up a flag to track the mouse button state.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Create a 16x16 grid of div elements, assign unique IDs and event listeners for drawing.
for (let i = 0; i < 256; i++){
    let grid_square = document.createElement('div');
    grid_square.id = `num${i}`;
    grid_square.addEventListener('mouseover', changeColor);
    grid_square.addEventListener('click', changeColor);
    container.appendChild(grid_square);
}

// Define the changeColor function to color the grid square black on mouse events.
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = 'black';
}

// Add a click event listener to the clear button to reset the grid colors to white.
clear_btn.addEventListener('click', () => {
    for(let i = 0; i < 256; i++){
        container.children[i].style.backgroundColor = 'white';
    }
});
