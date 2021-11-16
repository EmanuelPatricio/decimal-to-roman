const decToRoman = require('./decToRoman');

test('CP_Submit1', () => {
  expect(decToRoman()).toBe("Un numero debe ser ingresado");
});

test('CP_Submit2', () => {
  expect(decToRoman("asdf")).toBe("Un numero debe ser ingresado");
});

test('CP_Submit3', () => {
  expect(decToRoman(-5)).toBe("Por favor, ingrese un numero entre 1 y 3999");
});

test('CP_Submit4', () => {
  expect(decToRoman(31)).toBe("XXXI");
});

test('CP_Submit5', () => {
  expect(decToRoman(4000)).toBe("Por favor, ingrese un numero entre 1 y 3999");
});
