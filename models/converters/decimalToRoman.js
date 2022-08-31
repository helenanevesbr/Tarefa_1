const dictionary = require('./romanDictionary.js');

function decimalToRoman(decimal) {
    if (decimal > 3999 || decimal < 1) {
        throw Error("Number can't be smaller than 1 nor greater than 3999");
    }
    else{
        let str = String(decimal).split('')
        let result = ''
        for (let i = 0; i < str.length; i++) {
            var lookup = str[i] * Math.pow(10, str.length - i - 1)
            if (dictionary[lookup]) {
                result += dictionary[lookup]
            }
        }
        return result
    }
}

module.exports = decimalToRoman;