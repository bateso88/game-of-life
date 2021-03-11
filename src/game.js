"use strict";

const DEFAULT_ARRAY = [
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,0,1,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,1,0,1,0,0,0,0],
  [0,0,0,0,1,1,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0]
]

class Game {
  constructor(startingGrid = DEFAULT_ARRAY) {
    this.startingGrid = startingGrid
    this.width = this.startingGrid[0].length
    this.height = this.startingGrid.length
    this._setNextGrid()
  }

  tick() {
    for(let row=0; row<this.height; row++) {
      for(let column=0; column<this.width; column++ ) {
        this._updateCell(row, column)
      }
    }
    this._updateGrids()
  }

  _countLiveNeighbours(y, x) {
    let liveNeighbours = 0;
    for(let row=(y-1); row<=(y+1); row++) {
      for(let column=(x-1); column<=(x+1); column++ ) {
        if(row>=0 && column>=0 && column<=this.width-1 && row<=this.height-1 && (row!==y || column!==x)) {
          liveNeighbours += this.startingGrid[row][column]
        }
      }
    }
    return (liveNeighbours);
  }

  _createEmptyArray() {
    for (let row = 0; row < this.height; row++) {
        this.nextGrid[row] = new Array(this.width);
    }
  }

  _fillArrayWithZeros() {
    for(let row=0; row<this.height; row++) {
      for(let column=0; column<this.width; column++) {
        this.nextGrid[row][column] = 0;
      }
    }
  }

  _setNextGrid() {
    this.nextGrid = [this.height]
    this._createEmptyArray()
    this._fillArrayWithZeros()
  }

  _updateGrids() {
    this.startingGrid = this.nextGrid.slice(0)
    // this._setNextGrid()
  }

  _updateCell(row, column) {
    if(this._countLiveNeighbours(row, column) == 2) {
      this.nextGrid[row][column]=1;
    } else {
      this.nextGrid[row][column]=0;
    }
  }
}