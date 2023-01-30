import { add } from "./index.js";
import {restartGame} from "./index.js"
import { obje } from "./index.js"
import { currentPlayer } from "./index.js";
import { players } from "./index.js"
import { changePlayer } from './index.js'
import { boxCheck } from  './index.js'
import { winner } from './index.js'
import { draw } from './index.js'
import { continueGame } from './index.js'

describe('index.js', function() {
    it('should add two numbers', function() {
        expect(add(5,6)).toBe(11);
    })
});

// describe('changePlayer method ', function() {
//     it('should set currentPlayer value and players value ', function() {
//        const spy = new changePlayer()
//         expect(spy).toHaveBeenCalled();
//     })
// });

// describe('boxCheck', function() {
//     it('should be Winter in Narnia', function() {
//         const demoTest = new Person();
//         spyOn(demoTest, "checkBox");       
//         expect(demoTest.checkBox).toHaveBeenCalled();
//     });
// });

// describe('winner method ', function() {
//     it('should call draw function', function() {
//         let spiedSumOddNumbers = jasmine.createSpy("draw spy"); 
//        const spy = new changePlayer()
//        expect(spiedSumOddNumbers).toHaveBeenCalled();
//     })
// });

describe('obje', function() {
  it('should spy on save', function() {
    var spy = spyOn(obje, "test");       
    obje.test();
    expect(spy).toHaveBeenCalled();
  });
});

// describe('obje', function() {
//   it('should spy on save', function() {
//     var spy = spyOn(obje, "test5");     
//     var currentPlayer = '❌';
//     var players = "Player1";
//     obje.test5();
//     expect(obje.currentPlayer).toEqual(currentPlayer)
//     console.log()
//     expect(spy).toHaveBeenCalled();
//   });
// });

describe('restartGame', function() {
  it('should spy on save', function() {
    var test = '❌';
    var test2 = "Player1";
    restartGame();
    expect(currentPlayer).toEqual(test)
    expect(players).toEqual(test2)
  });
});

// describe('Winner ', function() {
//   it('should be checked winner', function() {
//     var testElement = document.createElement('div');
//     document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(testElement);
//     winner();
//   });
// });

describe('changePlayer ', function() {
  it('should check currentPlayer value ❌ and  players value Player1', function() {
    var test = '❌';
    var player = 'Player1'
    changePlayer();
    expect(currentPlayer).toBe(test)
    expect(players).toBe(player)
  });

  it('should check currentPlayer value ⭕ players value Player2', function() {
    var test = '⭕'
    var player = 'Player2'
    changePlayer();
    expect(currentPlayer).toBe(test)
    expect(players).toBe(player)
  });
});

describe('boxCheck', function() {
  it('should be continueGame true', function() {
    var dummyElement = document.createElement('div');
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement); 
    var e= {
      target: {
        id: "0",
        innerText: '❌'
      }
    };
    boxCheck(e);
    expect(continueGame).toBe(true)
  });

  // it('should be continueGame false', function() {
  //   var e= {
  //     target: {
  //       id: "0",
  //       innerText: '❌'
  //     }
  //   }
  //   continueGame = false
  //   boxCheck(e);
  //   expect(continueGame).toBe(false)
  // })
});

describe('winner', function() {
  it('.....', function() {
    var dummyElement = document.createElement('div');
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement); 
    winner();
  });
});

describe('draw', function() {
  it('should be .....', function() {
    var dummyElement = document.createElement('div');
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement); 
    draw();
  });
});

// expect(array).toContain(member);
// expect(fn).toThrow(string);
// expect(fn).toThrowError(string);
// expect(instance).toBe(instance);
// expect(mixed).toBeDefined();
// expect(mixed).toBeFalsy();
// expect(mixed).toBeNull();
// expect(mixed).toBeTruthy();
// expect(mixed).toBeUndefined();
// expect(mixed).toEqual(mixed);
// expect(mixed).toMatch(pattern);
// expect(number).toBeCloseTo(number, decimalPlaces);
// expect(number).toBeGreaterThan(number);
// expect(number).toBeLessThan(number);
// expect(number).toBeNaN();
// expect(spy).toHaveBeenCalled();
// expect(spy).toHaveBeenCalledTimes(number);
// expect(spy).toHaveBeenCalledWith(...arguments);
