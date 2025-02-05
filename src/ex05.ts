// 5. Create a function named `countVowels` that takes a string as a parameter.
//    The function should return the number of vowels (a, e, i, o, u) in the string.
//    Use TypeScript types to ensure the parameter and return type are properly typed.

function countVowels(word: string): number {
  return word.split("").filter((letter) => "aeiou".includes(letter)).length;
}

// Expected output:
console.log(countVowels("hello")); // 2
console.log(countVowels("typescript")); // 2
