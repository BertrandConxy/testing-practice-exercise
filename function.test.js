
const {returnStringLength }   = require('./function')
const {reverseString }   = require('./function')

describe ('practice tests', ()=> {
    
test('character count', () => { expect(returnStringLength('bertrand'))
.toBe(8)});

test('  character count validity', ()=>{
expect( () =>returnStringLength('hfohfohwoihfhwfhwhhfhwh')).toThrowError()
expect( () =>returnStringLength('')).toThrowError()
})

test('reversed correctly', ()=>{
    expect( reverseString('bertrand')).toMatch('dnartreb')
})

})
