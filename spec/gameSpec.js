describe("Game", function() {
  let game;
  const customStartingGrid = [ 
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  beforeEach(function() {
    game = new Game
  });

  it("should default to DEFAULT_ARRAY", function() {
    expect(game.startingGrid).toEqual(DEFAULT_ARRAY);
  });

  it("should be able to set a custom startingGrid", function() {
    game = new Game(customStartingGrid)
    expect(game.startingGrid).toEqual(customStartingGrid);
  });

});
