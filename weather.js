// temperature in Kelvin
const kelvin = 293;
// celsius = kelvin - 273
const celsius = kelvin - 273;
//calculating fahrenheiut from celsius
let fahrenheit = celsius * (9/5) + 32;
//rounding fahrtenheit down
fahrenheit = Math.floor(fahrenheit);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);