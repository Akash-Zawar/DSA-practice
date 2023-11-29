//Remove Duplicate characters from array of element and find the count of an elements using set

const removeDuplicateFromArray = (arr) => {
  let ans = new Set();

  for (let i = 0; i < arr.length; i++) {
    ans.add(arr[i]);
  }
  let count = ans.size;

  return { ans, count };
};

console.log(removeDuplicateFromArray([1, 2, 3, 1, 22, 4, 5, 5, 5, 2, 3, 5, 7]));
