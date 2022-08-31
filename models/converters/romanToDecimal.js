const _ = require("underscore")
const dictionary = require('./romanDictionary.js');

const invertedDictionary = _.invert(dictionary);

function romanToDecimal(roman){
    validateRomanNumber(roman);
    const fromRightToLeft = roman.split('').reverse();
    let result = 0
    let prevValue = null
    for (const index in fromRightToLeft){

        const currentValue  = parseInt(invertedDictionary[fromRightToLeft[index].toUpperCase()])

        if (prevValue === null) {
            result += currentValue
        } else if (currentValue < prevValue){
            result -= currentValue
        } else{
            result += currentValue
        }
        prevValue = currentValue
    }

    return result
}

function validateRomanNumber(roman){
    symbolsArray = roman.split('')
    for (const index in symbolsArray){
        const currentValue = symbolsArray[index]
        const nextValue = symbolsArray[parseInt(index)+1]
        const thirdValue = symbolsArray[parseInt(index)+2]
        const fourthValue = symbolsArray[parseInt(index)+3]
        if (currentValue === "I"){
            if (["V", "X", undefined].indexOf(nextValue) === -1){
                throw Error("Algorithm I can appear only before V and X")
            }
        }
        if (currentValue === "X"){
            if (["L", "C", undefined].indexOf(nextValue) === -1){
                throw Error("Algorithm X can appear only before L and C")
            }
        }
        if (currentValue === "C"){
            if (["D", "M", undefined].indexOf(nextValue) === -1){
                throw Error("Algorithm C can appear only before D and M")
            }
        }
        if (currentValue === nextValue && nextValue === thirdValue && thirdValue === fourthValue){
            throw Error(`Invalid roman number. Algorithm ${currentValue} repeated more than 3 times in a row.`)
        }
    }
}

module.exports = romanToDecimal