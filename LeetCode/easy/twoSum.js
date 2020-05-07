// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//   Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
//   Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} numberArray - Array of integers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numberArray, target) {
  // Keep track of complements of seen numbers
  let complements = {};

  for (let i = 0; i < numberArray.length; i++) {  // Time Complexity => O(n)
    if (complements[numberArray[i]] >= 0) {
      return [complements[numberArray[i]], i] // Time Complexity => O(1)
    } else {
      complements[target - numberArray[i]] = i; // Time Complexity => O(1)
    }
  }
};

/**
 *
 * Big O Analysis
 *
 * Total time Complexity, T(n) = O(1) + O(1) + O(n)
 * For the worst case, the constant time look ups are insignificant: T(n) = O(n)
 *
 */