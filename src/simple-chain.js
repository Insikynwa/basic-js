const CustomError = require("../extensions/custom-error");

const chainMaker = {
    resultArray: [],
    getLength() {
        const chainLength = chainMaker.resultArray.length;
        return chainLength;
    },
    addLink(value) {
        chainMaker.resultArray.push(value);
        return chainMaker;
    },
    removeLink(position) {
        const realPosition = position - 1;
        if (
            !Number.isInteger(realPosition) ||
            typeof realPosition !== "number" ||
            realPosition < 0 ||
            realPosition > chainMaker.getLength()
        ) {
            chainMaker.resultArray = [];
            throw new Error("FAIL");
        } else {
            chainMaker.resultArray.splice(realPosition, 1);
            return chainMaker;
        }
    },
    reverseChain() {
        chainMaker.resultArray.reverse();
        return chainMaker;
    },
    finishChain() {
        let result = "";
        chainMaker.resultArray.forEach((element) => {
            result += "( " + element + " )~~";
        });

        chainMaker.resultArray = [];
        return result.slice(0, -2);
    },
};

module.exports = chainMaker;
