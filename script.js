// Assignment Code
var generateBtn = document.querySelector("#generate");

var lenthEl = document.getElementById("length");
var upperEl = document.getElementById("upper");
var lowerEl = document.getElementById("lower");
var symbolEl = document.getElementById("symbol");


//checking user inputs in console log
// console.log(userLength);
// console.log(userUpper);
// console.log(userLower);
// console.log(userSymbols);

const randomPassword = {
  lower: randomlowerCase,
  upper: randomUpperCase,
  number: randomPassNumber,
  symbol: randomPassSym,
};


// Write password to the #password input
function writePassword() {
  // var length =

  var password = generatePassword();
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


//checking random values in console
// console.log(randomPassSym());
// console.log(randomlowerCase());
// console.log(randomUpperCase());
// console.log(randomPassNumber());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

window.alert("Welcome to my password generator!");
var userLength = window.prompt("Enter Length of password:");
var userUpper = window.confirm("Would you like uppercase letters? Cancel if no.");
var userLower = window.confirm("Would you like lowercase letters? Cancel if no.");
var userNumbers = window.confirm("Would you like numbers? Cancel if no.")
var userSymbols = window.confirm("Would you like special characters? Cancel if no.");

//creating array for user input
var userSelectionsArray = [{userUpper}, {userLower}, {userNumbers}, {userSymbols}].filter(item => Object.values(item)[0]);
console.log(userSelectionsArray);

// generating password
function generatePassword() {

  for (let i = 0; i < userLength; i += userSelectionsArray)


}