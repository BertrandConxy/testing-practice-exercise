

const Calculator = require('./calculator')

describe('Testing calculator operations', ()=>{

    const calc = new Calculator(2,3);

    test('testing addition', ()=>{
        expect(calc.add(2,3)).toEqual(5)
    })
    test('testing subtraction', ()=>{
        expect(calc.subtract(2,3)).toEqual(1)
    })
    test('testing multiplication', ()=>{
        expect(calc.multipy(2,3)).toEqual(6)
    })
    test('testing division', ()=>{
        expect(calc.divide(2,3)).toEqual(1.5)
    })
})