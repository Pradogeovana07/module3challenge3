var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
    var passwordCharSet = "";

    var passwordLength = prompt("Password Length? \(must be 8-128 characters long\)")

    var lower = confirm("Lowercase?")
    var upper = confirm("Uppercase?")
    var number = confirm("Numbers?")
    var symbol = confirm("Symbols?")

    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers = "1234567890"
    var symbols = "!@#$%^&*()_+="

    if(lower){
        passwordCharSet += lowercase
    }

    if(upper){
        passwordCharSet += uppercase
     }
    if(numbers){
        passwordCharSet += numbers
    }

    if(symbols){
        passwordCharSet += symbols
    }


  var generatedPassword = "";

  for (let i = 0; i < passwordLength; i++) {
    generatedPassword += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return generatedPassword;
}
