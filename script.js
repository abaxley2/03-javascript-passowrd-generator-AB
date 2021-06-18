// Assignment Code
var generateBtn = document.querySelector("#generate");

var lenthEl = document.getElementById("length");
var upperEl = document.getElementById("upper");
var lowerEl = document.getElementById("lower");
var symbolEl = document.getElementById("symbol");



var randomPassword = {
  lower: randomlowerCase,
  upper: randomUpperCase,
  number: randomPassNumber,
  symbol: randomPassSym,
};

// Write password to the #password input
function writePassword() {
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
console.log(randomPassSym());
console.log(randomlowerCase());
console.log(randomUpperCase());
console.log(randomPassNumber());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
