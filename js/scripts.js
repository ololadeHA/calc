//function to add
function add(number1, number2) {
  return number1 + number2;
}

//modulus function
function modulus(number1, number2) {
  return number1 % number2 ;
} 

//division function
function divide(number1, number2) {
  return number1 / number2
}

//multiplication function
function multiply(number1, number2) {
  return number1 * number2
}

//subtraction function
function subtract(number1, number2){
  return number1 - number2
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

// alert(add(number1, number2));
// alert(modulus(number1, number2));
// alert(divide(number1, number2));
// alert(multiply(number1, number2));
alert(subtract(number1, number2));

