//String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join.

const reverseStrWithoutWords = (str) => str.split(" ").reverse().join(" ");

console.log(reverseStrWithoutWords("I am a web developer"));
