describe("Game", function() {
  let game;
  const customStartingGrid = [ 
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1],
  ];

  beforeEach(function() {
    game = new Game(customStartingGrid)
  });

  it("should default to DEFAULT_ARRAY", function() {
    game = new Game
    expect(game.startingGrid).toEqual(DEFAULT_ARRAY);
  });

  it("should be able to set a custom startingGrid", function() {
    expect(game.startingGrid).toEqual(customStartingGrid);
  });

  describe("tick", function() {
    it("live cells with no live neighbours to die", function() {
      game.tick()
      expect(game.startingGrid[4][4]).toEqual(0)
    });
  });

});
