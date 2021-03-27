//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let newArray = matrix.flat();

  const A = newArray.filter(item => item === '^^')
  return A.length;




};
