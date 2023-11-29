//Find factorial of user input number

const factorial = (num) => {
  if (num < 0) {
    return "factorial is only defined for non-negative integers";
  }

  let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans *= i;
  }
  return ans;
};

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(-3));
