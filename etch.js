/* Select the container, slider input & value, new grid button, 
toggle button, and clear button elements from the DOM. */
const container = document.querySelector('#container') // Selects the container element.
const clear_btn = document.querySelector('#clear-btn') // Selects the clear button element.
const slider = document.querySelector('#slider') // Selects the slider input element.
const slider_val = document.querySelector('#slidervalue') // Selects the span to display slider value.
const create_btn = document.querySelector('#new-grid-btn') // Selects the new grid button element.
const toggle_btn = document.querySelector('#lines-btn') // Selects the toggle lines button element.

let grid_size; // Variable to store the grid size.

// Set up a flag to track the mouse button state.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true) // Sets the flag to true when the mouse is down.
document.body.onmouseup = () => (mouseDown = false) // Resets the flag to false when the mouse is released.

// Create a 16x16 grid of div elements, assign unique IDs and event listeners for drawing.
function createGrid() {
    clearGrid() // Calls function to clear the existing grid.
    grid_size = slider.value // Gets the value from the slider input to set the grid size.
    total = grid_size * grid_size // Calculates the total number of grid squares.

    // Sets the CSS grid layout columns and rows based on the grid size.
    container.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`

    for (let i = 0; i < total; i++) {
        let grid_square = document.createElement('div') // Creates a new div for each grid square.
        
        grid_square.id = `num${i}` // Assigns a unique ID to each grid square.
        grid_square.addEventListener('mouseover', changeColor) // Adds mouseover event to change color.
        grid_square.addEventListener('mousedown', changeColor) // Adds mousedown event to change color.
        grid_square.style.border = '1px solid black' // Sets the default border color.

        container.appendChild(grid_square) // Adds the new grid square div to the container.
    }
}

function clearGrid() {
    // Removes all child elements from the container, effectively clearing the grid.
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

// Define the changeColor function to color the grid square black on mouse events.
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return // Only colors the square if the mouse is down.
    e.target.style.backgroundColor = 'black' // Changes the square's background color to black.
}

// Add a click event listener to the clear button to reset the grid colors to white.
clear_btn.addEventListener('click', () => {
    container.childNodes.forEach(child => {
        child.style.backgroundColor = 'white' // Sets each grid square's background color to white.
    })
})

// Toggle the grid lines on and off.
toggle_btn.addEventListener('click', () => {
    container.childNodes.forEach(child => {
        // Checks the current border style and toggles it.
        if(child.style.border === '1px solid black'){
            child.style.border = 'None'
        } else {
            child.style.border = '1px solid black'
        }
    })
})

// Event listener for the create new grid button. Calls createGrid function to make a new grid.
create_btn.addEventListener('click', createGrid)

// Event listener for the slider. Updates the slider value text content in real-time.
slider.oninput = function() {
    slider_val.textContent = `${this.value}x${this.value}` // Displays the current grid size.
}

// Initializes the grid when the document loads.
document.onload = createGrid()
