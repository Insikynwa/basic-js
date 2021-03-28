const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const steps = Math.pow(2, disksNumber) - 1;
    const secondsToStep = Math.floor((steps /turnsSpeed) * 3600);
    return { turns: steps, seconds: secondsToStep };
};
