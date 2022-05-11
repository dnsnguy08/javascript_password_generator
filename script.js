// Assignment Code
var generateBtn = document.querySelector("#generate");

const password = '';
// const options = ['yes', 'y'];
const numChars = '0123456789';

function generatePassword() {
  // const password = '';
  const password_string = '';
  // const numChars = '0123456789';
  // const numChars = [0,1,2,3,4,5,6,7,8,9];
  const upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specialChars = '!@#$%^&*';
  const options = ['yes', 'y'];
  // const pwLength = window.prompt('Please indicate the number of characters for your password. \
  // Password must have a minimum of 8 characters but no more than 128 characters.');
  const numChar = window.prompt('Would you like numbers in your password?');
  // const letterUp = window.prompt('Would you like uppercase letters?');
  // const specialChar = window.prompt('Would you like special characters?');
  // return pwLength;

  // if (pwLength >= 8 && pwLength <= 128) {
  //   const passLength = pwLength;
  // } else {
  //   window.alert('Please input a number between 8 and 128.');
  // }
  if (options.includes(numChar)) {
    var updatePass = password.concat(numChars);
    // var password = 'yes';
    // password.concat(numChars);
    // const numList = '';
    // for (let i = 0; i <= numChars.length; i++) {
    //   const nums = Math.floor(Math.random()*numChars.length);
    //   // numList.append(numChars.charAt(nums));
    //   numList += numChars.charAt(nums);
    // }
  } else {
    window.alert("Your password will not contain numbers.");
  }
  return updatePass;
  
// //   } else {
// //     window.alert("Your password will not contain numbers.");
// //   }
// // }
//   if (letterUp in options) {
//     const upperList = '';
//     for (let i = 0; i <= upLetters.length; i++) {
//       const selectUpper = Math.floor(Math.random()*upperLetters.length);
//       upperList += upperLetters.charAt(selectUpper);
//     }
//   }
// //   } else {
// //     window.alert("Your password will not contain uppercase letters.");
// //   }
// // }
//   if (specialChar in options) {
//     const specialList = '';
//     for (let i = 0; i <= specialChars.length; i++) {
//       const selectSpecial = Math.floor(Math.random()*specialChars.length);
//       specialList += specialChars.charAt(selectSpecial);
//     }
//   }
// //   } else {
// //     window.alert("Your password will not contain special characters.");
// //   }
// // }

//   password_string += numList, upperList, specialList;
//   for (let i = 0; i <= password_string.length; i++) {
//     const randomizePass = Math.floor(Math.random()*pwLength);
//     password += password_string.charAt(randomizePass);
//   }

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
