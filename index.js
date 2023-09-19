function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const sum = target - array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === sum) {
        return true;
      } 
    }
  }
  return false;
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. Loop through the array of numbers
    2. i = the current number, need to identify which corresponding number adds up to the target
    3. Loop through the remaining numbers = sum
    4. If the two numbers = the sum then return true
  5. If none add up to target, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
