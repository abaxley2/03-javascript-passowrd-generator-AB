// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating string for random values

const randomChars = {
  lower: randomlowerCase(), 
  upper: randomUpperCase(), 
  number: randomPassNumber(), 
  symbol: randomPassSym()
};


// Write password to the #password input
function writePassword() {
  const typesCount = userSelectionsArray.length;
  let generatedPassword = "";
  if(typesCount === 0) {
    return '';
  }

  for (let i = 0; i < userLength ; i += typesCount) {
    userSelectionsArray.forEach(type => {
      const pwordNames = Object.keys(type)[0];
      generatedPassword += randomChars[pwordNames]();
    });
  }
 var password = generatedPassword
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

//Functions that generate random characters
function randomlowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function randomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function randomPassNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function randomPassSym() {
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random()*symbols.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.alert("Welcome to my password generator!");
var userLengthString = window.prompt("Enter Length of password:");
var userUpper = window.confirm("Would you like uppercase letters? Cancel if no.");
var userLower = window.confirm("Would you like lowercase letters? Cancel if no.");
var userNumbers = window.confirm("Would you like numbers? Cancel if no.")
var userSymbols = window.confirm("Would you like special characters? Cancel if no.");

var userLength = parseInt(userLengthString);

//creating array for user input
var userSelectionsArray = [{userUpper}, {userLower}, {userNumbers}, {userSymbols}].filter(item => Object.values(item)[0]);






