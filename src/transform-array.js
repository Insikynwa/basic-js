const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    const result = [];
    if (Array.isArray(arr) === false) {
        throw new Error("FAIL");
    } else {
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case "--discard-next":
                    i + 1 < arr.length ? i++ && result.push(undefined) : i;
                    break;
                case "--discard-prev":
                    i > 0 ? result.pop() : i;
                    break;
                case "--double-next":
                    i + 1 < arr.length ? result.push(arr[i + 1]) : i;
                    break;
                case "--double-prev":
                    i > 0 ? result.push(result[result.length - 1]) : i;
                    break;
                default:
                    result.push(arr[i]);
            }
        }
    }
    return result.filter((item) => item !== undefined);
};
