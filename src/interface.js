const rows = 30;
const columns = 80;

function makeGrid() {
  let container = document.querySelector('#container');
  let grid = document.createElement('table');
  grid.setAttribute('id','grid');
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < columns; j++) {
      let cell = document.createElement('td');
      tr.appendChild(cell);
    }
    grid.appendChild(tr);
  }
  container.appendChild(grid);
}
window.onload=()=>{
  makeGrid();
}