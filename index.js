function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

  The time complexity of the hasTargetSum function is O(n^2), where n is the length of the input array. This is because the function has nested loops, where for each element in the array, it checks whether there exists a complement element that adds up to the target value. The first loop iterates over each element in the array, and the second loop iterates over the remaining elements. As a result, the function has to perform n * (n-1)/2 comparisons in the worst case, leading to a time complexity of O(n^2).
*/

/* 
  Add your pseudocode here
  need function revive two arrgument 
  Create a function named hasTargetSum with two arguments, an array, and a target value.
Initialize a loop that iterates over each element in the array.
Inside the loop, compute the complement by subtracting the current element from the target value.
Initialize a second loop that iterates over the remaining elements in the array.
Inside the second loop, check if the current element is equal to the complement.
If it is, return true since we have found two elements that add up to the target value.
If the loops complete without finding a pair of elements that add up to the target value, return false.
*/

/*
  Add written explanation of your solution here
  The hasTargetSum function takes an array and a target value as input and checks whether there exists a pair of elements in the array that add up to the target value. It does this by iterating over each element in the array and computing the complement of the current element, which is the value that needs to be added to the current element to reach the target value. It then iterates over the remaining elements in the array and checks whether the complement exists in the array. If it does, then a pair of elements that add up to the target value has been found and the function returns true. If the loops complete without finding a pair of elements that add up to the target value, then the function returns false.
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
