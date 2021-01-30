// complete the function
function palindrom(str) {
  // code goes here
  let regEx = /[^A-Za-z0-9]/g;
  let lowerCase = str.toLowerCase().replace(regEx, '');
  var reverse = lowerCase.split('').reverse().join(''); 
  return reverse === lowerCase;

}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
