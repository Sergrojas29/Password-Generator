// Assignment code here

function ranNum() {
  num = Math.floor(Math.random() * (((57 - 48) + 1)) + 48);
  return num;
}

function randcapletter() {
  capLetter = Math.floor(Math.random() * (((90 - 65) + 1)) + 65);
  return capLetter
}

function randletter() {
  letter = Math.floor(Math.random() * (((122 - 97) + 1)) + 97);
  return letter;
}
function randSymbol() {
  symbolchar = "!@#$%^&"
  rnam = Math.floor(Math.random() * 7);
  symbol = symbolchar.charAt(rnam)
  return symbol;
}
function rnum(max) {
  var rrnum = Math.floor(Math.random() * (max))
  return rrnum;
}
function generateBadPassword(Length) {
  var letters = []
  var newPassord = ''
  for (let i = 0; i < Length; i++) {
    letters.push(String.fromCharCode(randletter()));
  }
  for (let x = 0; x < Length; x++) {
    newPassord = newPassord.concat(letters[rnum(Length)]);

  }

  return newPassord;

}
function generatePassword(Length) {
  var letters = []
  var capLetter = []
  var number = []
  var together = []
  var newPassord = ''
  for (let i = 0; i < Length; i++) {
    letters.push(String.fromCharCode(randletter()));
    number.push(String.fromCharCode(ranNum()));
  }

  together = number.concat(capLetter, letters)


  for (let x = 0; x < Length; x++) {
    newPassord = newPassord.concat(together[rnum(Length * 2)]);

  }

  return newPassord;

}

function generateSemiSecurePassword(Length) {
  var letters = []
  var capLetter = []
  var number = []
  var together = []
  var newPassord = ''
  for (let i = 0; i < Length; i++) {
    letters.push(String.fromCharCode(ranNum()));
    number.push(String.fromCharCode(randletter()));
    capLetter.push(String.fromCharCode(randcapletter()));
  }

  together = number.concat(capLetter, letters)


  for (let x = 0; x < Length; x++) {
    newPassord = newPassord.concat(together[rnum(Length * 3)]);

  }

  return newPassord;

}


function generateSecurePassword(Length) {
  var letters = []
  var capLetter = []
  var number = []
  var symbols = []
  var together = []
  var SecurePassord = ''
  for (let i = 0; i < Length; i++) {
    letters.push(String.fromCharCode(ranNum()));
    number.push(String.fromCharCode(randletter()));
    capLetter.push(String.fromCharCode(randcapletter()));
    symbols.push(randSymbol());
  }

  together = number.concat(capLetter, letters, symbols)


  for (let x = 0; x < Length; x++) {
    SecurePassord = SecurePassord.concat(together[rnum(Length * 4)]);

  }

  return SecurePassord;

}

console.log(generateBadPassword(24))
console.log(generatePassword(24))
console.log(generateSemiSecurePassword(24))
console.log(generateSecurePassword(24))













// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generateSecurePassword(24);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
