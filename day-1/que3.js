//Remove Duplicate characters from array of element using filter

const removeDuplicateusingFilter = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);

console.log(
  removeDuplicateusingFilter([1, 2, 5, 5, 4, 6, 5, 6, 8, 6, 9, 8, 6, 9, 7])
);
