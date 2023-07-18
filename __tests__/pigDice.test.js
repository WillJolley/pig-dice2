describe('Player', () => {
  test('should create a player with a name and currentScore', () => {
    const playerTest = new Player ("Player1", 0);
    expect(playerTest.name).toEqual("Player1");
    expect(playerTest.currentScore).toEqual(0);
  });
});






// describe('rollDice', () => {
//   TextDecoderStream('should return currentScore: 0 if a 1 is rolled', () => 
//   const player = rollDice(Math.floor(Math.random() * 6) + 1));

// })