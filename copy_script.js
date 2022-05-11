// Assignment Code
var generateBtn = document.querySelector("#generate");

//choose length of min 8 characters but no more than 128
//include numeeric?
//lowercase?
//uppercase?
//special characters?
const password = '';

function pwLength() {
  const pwLength = Number(window.prompt('Please indicate the number of characters for your password. \
  Password must have a minimum of 8 characters but no more than 128 characters.'));

  if (pwLength >= 8 && pwLength <= 128) {
    return pwLength;
  } else {
    window.alert('Please input a number between 8 and 128.');
    break; //return?
  }
}

function numChar() {
  const options = ['yes', 'no', 'y', 'n']
  const numChars = '0123456789'
  const numChar = window.prompt('Would you like numbers in your password?');

  if (numChar in options) {
    for (let i = 0; i <= numChars.length; i++) {
      const char = Math.floor(Math.random()*numChars.length);

      password += numChars.charAt(char)
    }
  } else {
    window.alert("Please input a valid answer 'Yes(Y)', 'No(n)");
    break; //return?
  }
}

function letterLow() {
  const options = ['yes', 'no', 'y', 'n']
  const lowChars = 'abcdefghijklmnopqrstuvwxyz'
  const letterLow = window.prompt('Would you like only lowercase letters?');

  if (letterLow in options) {
    for (let i = 0; i <= lowChars.length; i++) {
      const char = Math.floor(Math.random()*lowChars.length);

      password += lowChars.charAt(char)
    }
  } else {
    window.alert("Please input a valid answer 'Yes(Y)', 'No(n)");
    break; //return?
  }
}

function letterUp() {
  const options = ['yes', 'no', 'y', 'n']
  const upChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const letterUp = window.prompt('Would you like uppercase letters?');

  if (letterUp in options) {
    for (let i = 0; i <= upChars.length; i++) {
      const char = Math.floor(Math.random()*upChars.length);

      password += upChars.charAt(char)
    }
  } else {
    window.alert("Please input a valid answer 'Yes(Y)', 'No(n)");
    break; //return?
  }
}

function specialChar() {
  const options = ['yes', 'no', 'y', 'n']
  const specialChars = '!@#$%^&*'
  const specialChar = window.prompt('Would you like uppercase letters?');

  if (specialChar in options) {
    for (let i = 0; i <= specialChars.length; i++) {
      const char = Math.floor(Math.random()*specialChars.length);

      password += specialChars.charAt(char)
    }
  } else {
    window.alert("Please input a valid answer 'Yes(Y)', 'No(n)");
    break; //return?
  }
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
// might return true for functions above then build password
//function generatePassword(pwLength, numChar, letterLow, letterUp, specialChar) {

function generatePassword() {
  const password = '';
  const password_string = '';
  const numChars = '0123456789';
  const upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialChars = '!@#$%^&*';
  const options = ['yes', 'y'];
  const pwLength = Number(window.prompt('Please indicate the number of characters for your password. \
  Password must have a minimum of 8 characters but no more than 128 characters.'));
  const numChar = window.prompt('Would you like numbers in your password?');
  const letterUp = window.prompt('Would you like uppercase letters?');
  const specialChar = window.prompt('Would you like special characters?');

  if (pwLength >= 8 && pwLength <= 128) {

    continue;
  } else {
    window.alert('Please input a number between 8 and 128.');
    break;
  }

  if (numChar in options) {
    const numList = '';
    for (let i = 0; i <= numChars.length; i++) {
      const nums = Math.floor(Math.random()*numChars.length);
      numList += specialChars.charAt(nums);
    }
  }
//   } else {
//     window.alert("Your password will not contain numbers.");
//   }
// }
  if (letterUp in options) {
    const upperList = '';
    for (let i = 0; i <= upLetters.length; i++) {
      const selectUpper = Math.floor(Math.random()*upperLetters.length);
      upperList += upperLetters.charAt(selectUpper);
    }
  }
//   } else {
//     window.alert("Your password will not contain uppercase letters.");
//   }
// }
  if (specialChar in options) {
    const specialList = '';
    for (let i = 0; i <= specialChars.length; i++) {
      const selectSpecial = Math.floor(Math.random()*specialChars.length);
      specialList += specialChars.charAt(selectSpecial);
    }
  }
//   } else {
//     window.alert("Your password will not contain special characters.");
//   }
// }

  password_string += numList, upperList, specialList;
  for (let i = 0; i <= password_string.length; i++) {
    const randomizePass = Math.floor(Math.random()*password_string.length);
    password += password_string.charAt(randomizePass);
  }
  return password;
  
  // for (let i = 0; i <= pwLength + 1; i++) {
  //   var char = Math.floor(Math.random()*characters.length + 1);
  // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
  //         'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  // for (let i = 1; i <= 8; i++) {
  //   var char = Math.floor(Math.random()*characters.length + 1);
      
  //   password += characters.charAt(char)
  // }
  
  // return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
