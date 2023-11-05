const container = document.querySelector('#container')

for (let i = 0; i < 256; i++){
    let new_id = `num${i}`
    let grid_square = document.createElement('div')
    grid_square.id = new_id

    container.appendChild(grid_square)
}