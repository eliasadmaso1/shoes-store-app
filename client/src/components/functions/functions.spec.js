import {sumNumbers,multNumbers,subNumbers,divisionNumbers} from './functions';
describe(
    'sumNumbers() get 2 numbers and return the sum',()=>{
    it("get 4 and 5, and should return 9",()=>{
        expect(sumNumbers(4,5)).toBe(9);
    })
    it('get "hello" and 5 , and should return "not a number"',()=>{
        expect(sumNumbers("hello",5)).toBe("not a number");
    })
    it('get only 5, and should return "not a number"',()=>{
        expect(sumNumbers(5)).toBe("not a number");
    })
})

describe(
    'multNumbers() get 2 numbers and return the multiply',()=>{
        it("get 4 and 5, and should return 20",()=>{
            expect(multNumbers(4,5)).toBe(20);
        })
        it('get only 5, and should return "not a number"',()=>{
            expect(multNumbers(5)).toBe("not a number")

        })
    }
)

describe(
    'subNumbers() get 2 numbers and return the subtraction',()=>{
        it("get 4 and 5, and should return -1",()=>{
            expect(subNumbers(4,5)).toBe(-1);
        })
       
        it('get only 5, and should return "not a number"',()=>{
            expect(subNumbers(5)).toBe("not a number")

        })
    }
)

describe(
    'divisionNumbers() get 2 numbers and return the division',()=>{
        it("get 6 and 3, and should return 2",()=>{
            expect(divisionNumbers(6,3)).toBe(2);
        })
        it('get 5 and 6, and should return "not a full number"',()=>{
            expect(divisionNumbers(5,6)).toBe("not a full number")
        })
        it('get only 5, and should return "not a number"',()=>{
            expect(divisionNumbers(5)).toBe("not a number")

        })
    }
)