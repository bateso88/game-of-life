const height = 30;
const width = 85;
let startingGrid = [height];

function createStartingGrid() {
  for (let row = 0; row < height; row++) {
    startingGrid[row] = new Array(width);
  }
  for(let row=0; row<height; row++) {
    for(let column=0; column<width; column++) {
      startingGrid[row][column] = 0;
    }
  }
}

function makeGrid() {
  let container = document.querySelector('#container');
  let grid = document.createElement('table');
  grid.setAttribute('id','grid');
  for (let row = 0; row < height; row++) {
    let tr = document.createElement('tr');
    for (let column = 0; column < width; column++) {
      let cell = document.createElement('td');
      cell.setAttribute('id', row + '_' + column);
      cell.setAttribute('class', 'dead');
      cell.addEventListener('click', clickCell); 
      tr.appendChild(cell);
    }
    grid.appendChild(tr);
  }
  container.appendChild(grid);
}

function clickCell() {
  let coordinates = this.id.split("_");
  let row = Number(coordinates[0]);
  let column = Number(coordinates[1]);

  if (this.className==='dead'){
      this.setAttribute('class', 'alive');
      startingGrid[row][column] = 1;
  }else{
      this.setAttribute('class', 'dead'); 
      startingGrid[row][column] = 0;
  }
}

function updateUI(grid) {
  for(let row=0; row<height; row++) {
    for(let column=0; column<width; column++) {
      let cell = document.getElementById(`${row}_${column}`)
      if((grid[row][column] === 1 && cell.getAttribute('class') === 'dead') || (grid[row][column] === 0 && cell.getAttribute('class') === 'alive')) {
        cell.click();
      } 
    }
  }
}

function evolve(){ 
  let game = new Game(startingGrid);
  game.tick()
  updateUI(game.startingGrid)
}

window.onload=()=>{
  makeGrid();
  createStartingGrid();
}