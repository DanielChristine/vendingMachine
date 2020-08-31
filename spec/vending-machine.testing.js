"use strict";

//create methods using jasmine.
//create a function to test removeItemFromInventory
//addItemBackToInventory
//addMoneyToMachine
//performTransaction


describe("calculateReturnChange", function() {
  let vendingMachine;

  beforeEach(function(){
    vendingMachine = new VendingMachine();
  });

  it("if the price and provided payment are equal, the change due is 0", function() {

    let equalChange = vendingMachine.calculateReturnChange(.5, .5);
    expect(equalChange).toEqual(0); //matcher
  });

    it("if the money provided is not enough", function(){

      let equalChange = vendingMachine.calculateReturnChange(-.5, -.5);
      expect(equalChange).toBe(-1);
    });

    it("If there is change to return", function(){

      let equalChange = vendingMachine.calculateReturnChange(0, 0);
      expect(equalChange).toBe(1);
    });
});
 
describe("removeItemFromInventory", function(){

  it("If the item to be removed is a candybar.", function() {

    let candyBar = vendingMachine.candyBars(1 , 0);
    expect(candyBars).toEqual(-1);
  });
  it("If the item to be removed is a bag of chips.", function() {

    let bagChips = vendingMachine.bagsOfChips(1 , 0);
    expect(equalChange).toEqual(-1);
  });

  it("If the item to be removed is a pack of gum.", function() {

    let bagChips = vendingMachine.packsOfGum(1 , 0);
    expect(equalChange).toEqual(-1);
  });
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