/* Select the container, slider input & value, new grid button, 
toggle button, and clear button elements from the DOM. */
const container = document.querySelector('#container')
const clear_btn = document.querySelector('#clear-btn')
const slider = document.querySelector('#slider')
const slider_val = document.querySelector('#slidervalue')
const create_btn = document.querySelector('#new-grid-btn')
const toggle_btn = document.querySelector('#lines-btn')

let grid_size;

// Set up a flag to track the mouse button state.
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Create a 16x16 grid of div elements, assign unique IDs and event listeners for drawing.

function createGrid() {
    clearGrid()
    grid_size = slider.value
    total = grid_size * grid_size

    container.style.gridTemplateColumns = `repeat(${grid_size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${grid_size}, 1fr)`

    for (let i = 0; i < total; i++) {
        let grid_square = document.createElement('div')
        
        grid_square.id = `num${i}`
        grid_square.addEventListener('mouseover', changeColor)
        grid_square.addEventListener('click', changeColor)
        grid_square.style.border = '1px solid black'

        container.appendChild(grid_square)
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

// Define the changeColor function to color the grid square black on mouse events.
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black'
}

// Add a click event listener to the clear button to reset the grid colors to white.
clear_btn.addEventListener('click', () => {
    container.childNodes.forEach(child => {
        child.style.backgroundColor = 'white'
    })
})

toggle_btn.addEventListener('click', () => {
    container.childNodes.forEach(child => {
        if(child.style.border === '1px solid black'){
            child.style.border = 'None'
        } else {
            child.style.border = '1px solid black'
        }
    })
})

create_btn.addEventListener('click', createGrid)

slider.oninput = function() {
    slider_val.textContent = `${this.value}x${this.value}`
}

document.onload = createGrid()