// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
  //write your code here
  const vowel = "aeiou";
  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (vowel.includes(str1[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowel_count("The quick brown fox"));

//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  //write your code here
  let text = "";
  let sampleCharacter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < l; i++) {
    text += sampleCharacter.charAt(
      Math.floor(Math.random() * sampleCharacter.length)
    );
  }
  return text;
}

console.log(makeid(8));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc() {
  //write your code here
}

abc();
