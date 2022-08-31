const { decimalToRoman, romanToDecimal } = require("../../models/converters")

const initalExample = { 
    type:  "decimal-to-roman" , 
    decimal: 10, 
    roman: decimalToRoman(10),
    error: null
}

const ConverterController = {

    index: (req, res) => {
        res.render('converters/index', initalExample);
    }, 

    converter: (req, res) => {
        let { type, decimal, roman } = req.body;
        let error = null
        try {
            if (type === "decimal-to-roman") {
                const newRoman = decimalToRoman(parseInt(decimal))
                res.render("converters/index", { type, decimal, roman: newRoman, error })
            } else if (type === "roman-to-decimal") {
                const newDecimal = romanToDecimal(roman)
                res.render("converters/index", { type, decimal: newDecimal, roman, error })
            } else {
                throw new Error("Unknow type of conversion")
            }
        } catch(err) {
            res.render("converters/index", { type, decimal, roman, error: err })
        }
    }
}

module.exports = ConverterController