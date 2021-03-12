"use strict";

describe("Game", function() {
  let customStartingGrid = [ 
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ];

  it("should default to DEFAULT_ARRAY", function() {
    let defaultGame = new Game
    expect(defaultGame.startingGrid).toEqual(DEFAULT_ARRAY);
  });

  it("should be able to set a custom startingGrid", function() {
    let game1 = new Game(customStartingGrid)
    expect(game1.startingGrid).toEqual(customStartingGrid);
  });

  describe("tick", function() {
    let game;
    beforeEach(function() {
      game = new Game(customStartingGrid)
      game.tick()
    });
    it("live cells with 0 live neighbours die", function() {
      expect(game.startingGrid[4][4]).toEqual(0)
    });
    it("live cells with 1 live neighbour die", function() {
      expect(game.startingGrid[2][1]).toEqual(0)
    });
    it("dead cells with less than 2 live neighbours stay dead", function() {
      expect(game.startingGrid[0][4]).toEqual(0)
    });
    it("live cells with 2 live neighbours stay alive", function() {
      expect(game.startingGrid[2][2]).toEqual(1)
    });
    it("live cells with 3 live neighbours stay alive", function() {
      expect(game.startingGrid[3][2]).toEqual(1)
    });
    it("dead cells with 3 live neighbours come alive", function() {
      expect(game.startingGrid[2][3]).toEqual(1)
    });
    it("dead cells with 2 live neighbours stay dead", function() {
      expect(game.startingGrid[1][1]).toEqual(0)
    });
    it("dead cells with more than 3 live neighbours stay dead", function() {
      expect(game.startingGrid[1][2]).toEqual(0)
    });
    it("live cells with more than 3 live neighbours die", function() {
      let game = new Game
      game.tick()
      expect(game.startingGrid[8][5]).toEqual(0)
    });
    it("keeps updating correctly when called multiple times", function() {
      let game = new Game([[0,0,0],[1,1,1],[0,0,0]])
      game.tick()
      expect(game.startingGrid).toEqual([[0,1,0],[0,1,0],[0,1,0]])
      game.tick()
      expect(game.startingGrid).toEqual([[0,0,0],[1,1,1],[0,0,0]])
      game.tick()
      expect(game.startingGrid).toEqual([[0,1,0],[0,1,0],[0,1,0]])
    });
  });
});
