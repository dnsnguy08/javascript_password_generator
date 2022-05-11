// Assignment Code
var generateBtn = document.querySelector("#generate");

const options = ['yes', 'y'];
const numChars = '0123456789';
const upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specialChars = '!@#$%^&*';
const lowLetters = upLetters.toLowerCase();

function generatePassword() {
  var passwordString = '';

  // const pwLength = window.prompt('Please indicate the number of characters for your password. \
  // Password must have a minimum of 8 characters but no more than 128 characters.');
  // const requestNum = window.prompt('Would you like numbers in your password?');
  // const requesUpCase = window.prompt('Would you like uppercase letters?');
  // const requestSpecial = window.prompt('Would you like special characters?');
  
  const pwLength = window.prompt('Please indicate the number of characters for your password. \
  Password must have a minimum of 8 characters but no more than 128 characters.');
  if (pwLength >= 8 && pwLength <= 128) {
    var passLength = pwLength;
    passwordString += lowLetters;
  } else {
    window.alert('Please input a number between 8 and 128.');
    return;
  }

  const requestNum = window.confirm('Would you like numbers in your password?');
  if (requestNum) {
  // if (options.includes(requestNum.toLowerCase())) {
    passwordString += numChars;
    // var updateNums = password.concat(numChars);
  } else {
    window.alert("Your password will not contain numbers.");
  }
  // return passwordString;

  const requesUpCase = window.confirm('Would you like uppercase letters?');
  // if (options.includes(requesUpCase.toLowerCase())) {
    if (requesUpCase) {
    passwordString += upLetters;
    // var updateLetterUp = password.concat(upLetters);
  } else {
    window.alert("Your password will not contain uppercase letters.");
  }
  // return passwordString;

  const requestSpecial = window.confirm('Would you like special characters?');
  if (requestSpecial) {
  // if (options.includes(requestSpecial.toLowerCase())) {
    passwordString += specialChars;
    //  var updateSpecial = password.concat(specialChars);
  } else {
    window.alert("Your password will not contain special characters.");
  }
  // return passwordString;

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
