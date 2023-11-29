//Remove Duplicate characters from String

const removeDuplicate = (str) => {
  let ans = str
    .split("")
    .filter((item, index) => index === str.indexOf(item))
    .join("");

  return ans;
};

console.log(removeDuplicate("Aradhana Dasa"));
