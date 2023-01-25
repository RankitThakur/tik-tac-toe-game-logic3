import {add} from './index.js'
import { boxCheck } from './index.js'

describe("test", function() {
   
    //This will be called before running each spec
    beforeEach(function() {
    });
  
    describe('index.js', function() {
        it('should add two numbers', function() {
            expect(add(1,2)).toBe(3);
        })
    });

    describe('boxCheck function', function() {
        it('should call init function', function() {
            spyOn(boxCheck, 'winner')
            spyOn(boxCheck, 'changePlayer')
            expect(boxCheck.winner).toHaveBeenCalled();
            expect(boxCheck.changePlayer).toHaveBeenCalled();
        })
    });
})