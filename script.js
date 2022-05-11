// Assignment Code
var generateBtn = document.querySelector("#generate");

const numChars = '0123456789';
const upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialChars = '!@#$%^&*';
const lowLetters = upLetters.toLowerCase();

// Collect password criteria through window prompts and generate a randomized string
function generatePassword() {
  var passwordString = '';
  
  // Password length
  const pwLength = prompt('Please indicate the number of characters for your password. \
  Password must have a minimum of 8 characters but no more than 128 characters.');
  if (pwLength >= 8 && pwLength <= 128) {
    var passLength = pwLength;
    passwordString += lowLetters;
  } else {
    alert('Please input a number between 8 and 128.');
    return;
  }

  // Numeric characters
  const requestNum = confirm('Would you like numbers in your password?');
  if (requestNum) {
    passwordString += numChars;
  } else {
    alert("Your password will not contain numbers.");
  }

  // Uppercase characters
  const requesUpCase = confirm('Would you like uppercase letters?');
    if (requesUpCase) {
    passwordString += upLetters;
  } else {
    alert("Your password will not contain uppercase letters.");
  }

  // Special characters
  const requestSpecial = confirm('Would you like special characters?');
  if (requestSpecial) {
    passwordString += specialChars;
  } else {
    alert("Your password will not contain special characters.");
  }

  // From passwordString, generate a random password
  var password = '';
  for (let i = 0; i <= passLength - 1; i++) {
    var randomizePass = Math.floor(Math.random()*passwordString.length);
    password += passwordString.charAt(randomizePass);
  }
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
