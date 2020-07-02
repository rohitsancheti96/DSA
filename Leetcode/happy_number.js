/**
 * https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3284/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  return happy(n, []);
};

var happy = function (n, arr) {
  console.log(n, arr);
  let number = n.toString().split("");
  let sum = 0;
  number.forEach((num) => {
    let parsedNum = parseInt(num);
    sum = sum + parsedNum * parsedNum;
  });
  if (sum == 1) {
    return true;
  } else {
    if (arr.includes(sum)) {
      return false;
    }
    arr.push(sum);
    return happy(sum, arr);
  }
};
