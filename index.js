function isPalindrome(word) {

    // Convert the string to lowercase
    word = word.toLowerCase();
    
    // Reverse the string and compare with the original
    return word === word.split('').reverse().join('');
}


/* 
  FUNCTION isPalindrome
    INPUT: word 
    OUTPUT: boolean (true if palindrome, false if not)

    // Convert the input string to lowercase
    word = CONVERT_TO_LOWERCASE(str)

    // Initialize a variable to store the reversed string
    reversedWord = ""

    // Loop through each character in the string from the end to the beginning
    FOR i = LENGTH(word) - 1 TO 0
        reversedWord += word[i] // Append the character to the reversed string

    // Compare the original word with the reversed string
    IF str EQUALS reversedStr
        RETURN true // The string is a palindrome
    ELSE
        RETURN false // The string is not a palindrome

*/

/*
  The function isPalindrome takes a word as an input and changes it to lower case
  It then splits it and reverses the word and joins it togerther after it has been split 
  Finally, it compares the original word with the reversed word and returns true if they are the same
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
