const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }

    encrypt(message, key) {
        return this.encryptFunction(message, key, true);
    }
    decrypt(message, key) {
        return this.encryptFunction(message, key, false);
    }
    encryptFunction(message, key, mode) {
        let tempString = "";
        if (message === undefined || key === undefined) {
            throw new Error("FAIL");
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        var index = 0;
        var step = 0;
        var counter = 0;

        while (index < message.length) {
            if (/^[A-Z]$/.test(message[index])) {
                counter = (index - step) % key.length;
                var messageCode = message.charCodeAt(index);
                var keyCode = key.charCodeAt(counter);
                var modifElement = mode ? 1 : -1;
                var newCode = (keyCode - 65) * modifElement + messageCode;
                if (newCode < 65 || newCode > 90) {
                    newCode = mode
                        ? ((keyCode - 65 + messageCode) % 91) + 65
                        : 90 - (64 - (newCode % 65));
                }
                tempString += String.fromCharCode(newCode);
            } else {
                tempString += message[index];
                step++;
            }
            index++;
        }
        return this.isDirect
            ? tempString
            : String(tempString).split("").reverse().join("");
    }
}

module.exports = VigenereCipheringMachine;
