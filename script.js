function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    
  }
  
  function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
   
  }
  
  function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  
  }
  
  function getRandomSymbol(){
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
  }
  
  
  // Assignment Code
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
  
    for (let i = 0; i < length; i++) {
      password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return password;
  }
  