/*
Assignment Checklist:
-Present a series of prompts when 'generate password' button is clicked
-Select criteria to include in password
-Select a length of at least 8 characters & no more than 128 characters
-Select/unselect character types: lowercase, uppercase, numeric & special
-Input should be validated and at least 1 character type should be selected
-Generate password that meets selected criteria
-Display passord in alert or written to page

*/

/*
Psuedo code
||| Generate password |||
when button is pressed:
  display prompt 1: How many characters do you want to include
  display prompt 2: Do you want to include lowercase letters
  display prompt 3: Do you want to include uppercase letters
  display prompt 4: Do you want to include numberic characters
  display prompt 5: Do you want to include special characters (!"£$%^&*()_+-=`¬|\,.<>/?;:'@#[]{})

  Create password:



*/

// Asks the user the number of characters required for the password and saves the answer
// and makes sure the number is valid (between 8 and 128 characters)
function correctNumber() {
  //
  var validNumber = 0;
  while (validNumber == 0) {
   numOfCharacters = prompt("How many Characters do you want your password to have? \nMust be between 8 and 128 characters.");
   if (numOfCharacters >= 8 && numOfCharacters <= 128) {
     alert("Your password will have " + numOfCharacters + " characters.");
     validNumber = 1;
   } else {
   alert("Please enter a number between 8 and 128");
   }
 }

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var numOfCharacters;
  var includeLowerCase;
  var includeUpperCase;
  var includeNumber;
  var includeSpecial;

  passwordText.value = password;

  correctNumber();

  // Asks if the user wants to include lowercase characters and saves the answer
  includeLowerCase = confirm("Do you want to include lowercase characters?");
  if (includeLowerCase == true) {
    alert("You have chosen to include lowercase characters");
  } else {
    alert("You have chosen to ommit lowercase characters");
  }

  // Asks if the user wants to include uppercase characters and saves the answer
  includeUpperCase = confirm("Do you want to include uppercase characters?");
  if (includeUpperCase == true) {
    alert("You have chosen to include uppercase characters")
  } else {
    alert("You have chosen to ommit uppercase characters");
  }

  // Asks if the user wants to include numbers and saves the answer
  includeNumber = confirm("Do you want to include numbers?");
  if (includeNumber == true) {
    alert("You have chosen to include numbers");
  } else {
    alert("You have chosen to ommit numbers");
  }

  // Asks if the user wants to include special characters and saves the answer
  includeSpecial = confirm("Do you want to include special characters?")
  if (includeSpecial == true) {
    alert("You have chosen to include special characters");
  } else {
    alert("You have chosen to ommit special characters");
  }

  generatePassword() = {
    // Creating arrays that include number, uppercase letters, lowercase letter and special characters
    var num = '0123456789';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVQXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';
    var spec = ' !"#$%&()*+,-./:;<=>?@[]\{}~`|^_';
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
