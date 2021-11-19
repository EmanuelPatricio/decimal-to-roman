let romanNum = new Array(), dNum = new Array();

romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
dNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

function decimalRoman(num) {
  if (isNaN) return "Un numero debe ser ingresado";
  if (num < 1 || num > 3999) return "Por favor, ingrese un numero entre 1 y 3999";
  
  let romanNumeral = "";
  for (var i = 0; i < romanNum.length; i++) {
    while (value >= dNum[i]) {
      value -= dNum[i];
      romanNumeral += romanNum[i];
    }
  }
  return romanNumeral;
}

module.exports = decimalRoman;

// let num;

// console.log("Ingrese un numero decimal: ");
// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', function() {
//   num = process.stdin.read();
//   console.log(decimalRoman(num));
//   process.exit();
// });
