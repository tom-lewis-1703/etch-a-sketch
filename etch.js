const container = document.querySelector('#container')
const clear_btn = document.querySelector('#clear-btn')

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

for (let i = 0; i < 256; i++){
    let new_id = `num${i}`
    let grid_square = document.createElement('div')
    grid_square.id = new_id

    grid_square.addEventListener('mouseover', changeColor)
    grid_square.addEventListener('mouseover', changeColor)
    grid_square.addEventListener('click', changeColor)

    container.appendChild(grid_square)
}

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black'
}

clear_btn.addEventListener('click', () => {
    for(let i = 0; i < 256; i++){
        container.children[i].style.backgroundColor = 'white'
    }
})