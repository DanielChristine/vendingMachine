describe("determineIfPositiveNegativeOrZero", function () {
  //Suite

  it("returns 1 if the value passed in is greater than 0", function () {
    //SPEC
    let result = determineIfPositiveNegativeOrZero(100);

    expect(result).toBe(1); //matcher
  });
  
  it("returns -1 if the value passed in is less than 0", function () {
    //SPEC
    let result = determineIfPositiveNegativeOrZero(-100);

    expect(result).toBe(-1); //matcher
  });
  
  it("returns 0 if the value passed in is equal to 0", function () {
    //SPEC
    let result = determineIfPositiveNegativeOrZero(0);

    expect(result).toBe(0); //matcher
  });

});
