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


// Creating arrays that include number, uppercase letters, lowercase letter and special characters
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upper = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Q', 'X', 'Y', 'Z'];
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var spec = ['!', '"', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '¬', '\\', '|', '<', '>', '/', '?', ':', ';', '@', '~', '#', ',', '.', '[', ']',
'`', '{', '}', ' ', "'"];
// Select a random number from the num array
function chooseNum() {
  var randomNum = num[Math.floor(Math.random() * num.length)];
  return randomNum;
}

// Select a random letter from the upper array
function chooseUpper() {
  var randomUpp = upper[Math.floor(Math.random() * upper.length)]
    return randomUpp;
}

// Select a random letter from the lower array
function chooseLower() {
  var randomLow = lower[Math.floor(Math.random() * lower.length)]
  return randomLow;
}

// Select a random character from the spec array
function chooseSpec() {
  var randomSpec = spec[Math.floor(Math.random() * spec.length)]
  return randomSpec;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var numOfCharacters;
  var includeLowerCase;
  var includeUpperCase;
  var includeNumber;
  var includeSpecial;

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

  function generatePassword() {

    // create an empty array with the size of the password
    /*
    My idea here was to create an empty array and iterate over the
    number of characters the user has included('numOfCharacters') and add
    a random letter from a specific array if the user decided to include
    that criteria in their password. The code does not give any errors in the browser
    but it does not work.
     */
    var password = [];
    for (var i = 0; i < numOfCharacters; i++) {
      if (includeLowerCase == true){
        password.push(chooseLower());
        i++;
      }
      if (includeUpperCase == true) {
        password.push(chooseUpper());
        i++;
      }
      if (includeNumber == true) {
        password.push(chooseNum());
        i++;
      }
      if (includeSpecial) {
        password.push(chooseSpec());
        i++;
      }
    }
    passwordText.value = password.join('');
    console.log(password);
  }
  generatePassword();
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
