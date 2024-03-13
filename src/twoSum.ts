// Given a sorted array of integers arr and a target integer target,
// Return two numbers in the array that sum up to the target, and aren't equal to eachother.
// Return empty array if no solution exists

/**
 * @param {number[]} arr - The sorted array of integers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the two numbers that sum up to the target.
 */

//a.easiest way: a for loop , and then nest another for loop for add the numbers. test tes tes

function findTwoNumbers(arr: number[], target: number): number[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      let sum = arr[j] + arr[i];
      if (arr[i] !== arr[j] && sum === target) {
        console.log([i, j]);
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

// Test runner
function testFindTwoNumbers() {
  let result;

  result = findTwoNumbers([1, 2, 3, 4, 5], 9);
  console.log("1: ", result);
  console.log(
    JSON.stringify(result) === JSON.stringify([4, 5]) ||
      JSON.stringify(result) === JSON.stringify([5, 4])
      ? "PASS"
      : "FAIL"
  );

  result = findTwoNumbers([1, 2, 3, 4, 5], 10);
  console.log("2: ", result);
  console.log(JSON.stringify(result) === JSON.stringify([]) ? "PASS" : "FAIL");

  result = findTwoNumbers([-1, 0, 1, 3], 1);
  console.log("3: ", result);
  console.log(
    JSON.stringify(result) === JSON.stringify([0, 1]) ||
      JSON.stringify(result) === JSON.stringify([1, 0])
      ? "PASS"
      : "FAIL"
  );

  result = findTwoNumbers([1, 1, 1, 2], 3);
  console.log("4: ", result);
  console.log(
    JSON.stringify(result) === JSON.stringify([1, 2]) ||
      JSON.stringify(result) === JSON.stringify([2, 1])
      ? "PASS"
      : "FAIL"
  );

  result = findTwoNumbers([1, 2, 5, 10, 20], 30);
  console.log("5: ", result);
  console.log(
    JSON.stringify(result) === JSON.stringify([10, 20]) ||
      JSON.stringify(result) === JSON.stringify([20, 10])
      ? "PASS"
      : "FAIL"
  );
}

testFindTwoNumbers();
