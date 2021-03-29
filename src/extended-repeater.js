const CustomError = require("../extensions/custom-error");

// str это строка, которая будет повторена
// options это объект опций, который содержит следующие свойства:
// repeatTimes устанавливает число повторений str
// separator это строка, разделяющая повторения str
// addition это дополнительная строка, которая будет добавлена после каждого повторения str
// additionRepeatTimes устанавливает число повторений addition
// additionSeparator это строка, разделяющая повторения addition

// Например: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }) =>
// 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
module.exports = function repeater(str, options) {
    if (typeof str !== "string") {
        str = String(str);
    }
    let result = [];
    let newStr = [];
    if (!options.separator) {
        options.separator = "+";
    }
    if (!options.additionSeparator) {
        options.additionSeparator = "|";
    }

    if (options.hasOwnProperty("addition")) {
        if (typeof options.addition !== "string") {
            options.addition = String(options.addition);
        }

        if (options.additionRepeatTimes > 1) {
            for (let j = 1; j < options.additionRepeatTimes; j++) {
                newStr.push(options.addition);
                newStr.push(options.additionSeparator);
            }
        }
        newStr.push(options.addition);
        newStr.push(str);
        str = newStr.reverse().join("");
    }

    if (options.repeatTimes > 0) {
        for (let i = 1; i < options.repeatTimes; i++) {
            result.push(str);
            result.push(options.separator);
        }
    }
    result.push(str);

    return result.join("");
};
