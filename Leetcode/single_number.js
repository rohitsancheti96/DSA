/**
 * https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = {};
  for (let num of nums) {
    single[num] = ++single[num] || 1;
  }

  for (let num in single) {
    //console.log(num)
    if (single[num] === 1) return num;
  }
  return -1;
};
