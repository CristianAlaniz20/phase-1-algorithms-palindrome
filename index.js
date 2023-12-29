function isPalindrome(word) {
  // Write your algorithm here
  const reversedString = word.split("").reverse().join("")
  return reversedString === word ? true : false;
}

/* 
  Add your pseudocode here
  Make isPalindrome take in a string(All lowercase with no special characaters or spaces)
  Check to see if string is a palindrome(a word spelled the same forwards and backwards)
  If string is a palindrome, return true
  Else return false 
*/

/*
  Add written explanation of your solution here
  The function isPalindrome has one parameter for an argument that 
  should be a string in lower case, with no spaces or special characters.
  Inside the code block, I declared a variable, reversedString, using const
  which had the value of a string that was split into an array, had 
  the order reversed, and then joined. In the next line it checks if 
  the reversedString value is equal to the original string passed in. If 
  it is, it returns true, else it returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("albert"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
