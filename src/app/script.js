
// query selectors
var generateBtn = document.querySelector("#generate")

function generatePassword(){
  // lists of special characters, numbers, lowecase, uppercase
  var specSymbols = ["!", "\"", "#", "$", "%", "&", "'", "(", ")","*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@","[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var numbers = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"]
  var lowerCaseCharset = Object.assign([],"abcdefghijklmnopqrstuvwxyz")
  var upperCaseCharset = Object.assign([],"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
  var passLength = 0
  // greet the user
  alert("Let's generate a secure password!" );
  passLength = prompt("How long should the password be? Choose length 8-128 chars"); 

  // user input prompts and confirmations
  if((passLength < 7) || ( passLength > 129)) {
      alert("Please enter a valid password")
      console.log("you done messed up, RETRY WITH A VALID NUMBER!!!!")
  }else {
      // console.log("great")
      confirm("you entered " + passLength + " as your password length. IS THIS CORRECT??!!!")
      var lowerCaseTrue = confirm("Do you want to include LOWERCASE CHARACTERS???!!!!")
      console.log(lowerCaseTrue)
      // include uppercase??
      var upperCaseTrue = confirm("Do you want to include UPPERCASE CHARACTERS???!!!!!")
      console.log(upperCaseTrue)
      // include numerics??
      var numbersTrue = confirm("Do you want to include NUMBERS???!!!!!!!")
      console.log(numbersTrue)
      // include special characters??
      var specialCharsTrue = confirm("Do you want to include SPECIAL CHARACTERS???!!!!!!!")
      console.log(specialCharsTrue)
      // empty array to hold new password
      var passwordSet = []

//      console.log(passwordSet) testing purposes
      // logic to handle what lists to include in random password
      if(lowerCaseTrue === true) {
        passwordSet = passwordSet.concat(lowerCaseCharset)
      }
      if(upperCaseTrue === true) {
        passwordSet = passwordSet.concat(upperCaseCharset)
      }
      if(numbersTrue === true) {
        passwordSet = passwordSet.concat(numbers)
      }
      if(specialCharsTrue === true) {
        passwordSet = passwordSet.concat(specSymbols)
      }
    // console.log(passwordSet) testing
    // input should be validated and at least one character type should be selected
      if(passwordSet.length === 0) {
      alert("PICK SOMETHING TO BUILD A PASSWORD!!!!!!")
      return
      }
    // Add selected chars and numbers to final password selection array
    var password = ""
    for (let index = 0; index < passLength; index++) {
      password += passwordSet[Math.floor(Math.random()*passwordSet.length)]
    }   
  } 
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Interactive event
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)