function returnStringLength(string)  {
    if (string.length === 0 || string.length > 10) {
        throw new Error ('invalid')
    }
    return string.length; 
}

function reverseString (str) {
    reversed = str.split('').reverse().join('')
    return reversed

}



module.exports =  {returnStringLength, reverseString}