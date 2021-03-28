const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {


    let maxDepth = 1;
    arr.forEach(elem => {
      if (Array.isArray(elem)) {
        let curDepth = 1
        curDepth += this.calculateDepth(elem);
        curDepth > maxDepth ? maxDepth = curDepth : maxDepth;
        
      }
    });
    return maxDepth
  
  };
  }