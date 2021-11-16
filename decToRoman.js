function romanize (num) {
  if (isNaN(num))
    return "Un numero debe ser ingresado";
  if (num < 1 || num > 3999)
    return "Por favor, ingrese un numero entre 1 y 3999";

  var digits = String(+num).split(""),
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM", "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC", "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 3;

  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;

  return Array(+digits.join("") + 1).join("M") + roman;
}

module.exports = romanize;

// let num;

// console.log("Ingrese un numero decimal: ");
// process.stdin.setEncoding('utf8');

// process.stdin.on('readable', function() {
//   num = process.stdin.read();
//   console.log(romanize(num));
//   process.exit();
// });
