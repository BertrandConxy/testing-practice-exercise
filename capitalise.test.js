

function capitaliseString(string){
    const first =string.charAt(0).toUpperCase()
    return first.concat(string.substring(1))
    

}


test('string is capitalised', ()=>{
    expect(capitaliseString('bertrand')).toMatch('Bertrand')
})