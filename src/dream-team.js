const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let result = [];
    if (members && Array.isArray(members) === true) {
        members.forEach((element) => {
            if (typeof element === "string") {
                let letters = element.trim().charAt(0).toUpperCase();
                result.push(letters);
            }
        });

        return result.sort().join("");
    } else return false;
};
