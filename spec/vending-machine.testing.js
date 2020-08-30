"use strict";

//describe("determineIfPositiveNegativeOrZero", function () {

//   it("returns 1 if the value passed in is greater than 0", function () {

//     let result = determineIfPositiveNegativeOrZero(100);
//     expect(result).toBe(1); //matcher
//   });

describe("calculateReturnChange", function() {
  let vendingMachine;

  beforeEach(function(){
    vendingMachine = new VendingMachine();
  });

  it("if the price and provided payment are equal, the change due is 0", function() {

    let equalChange = vendingMachine.calculateReturnChange(.5, .5);
    expect(equalChange).toEqual(0); //matcher


    it("if the change provided is inadequate", function(){

      let candybars = vendingMachine.candyBars.length();
    });
  });
  









  // it("", function () {
  //   //SPEC
  //   let result = determineIfPositiveNegativeOrZero(100);

  //   expect(result).toBe(1); //matcher
  // });

  // it("returns 1 if the value passed in is greater than 0", function () {
  //   //SPEC
  //   let result = determineIfPositiveNegativeOrZero(100);

  //   expect(result).toBe(1); //matcher
  // });
});








// function determineIfPositiveNegativeOrZero(inputNumber) {
//     if(inputNumber > 0) {
//         return 1;
//     }
//     else if (inputNumber < 0){
//         return -1;
//     }
//     else {
//         return 0;
//     }

// }