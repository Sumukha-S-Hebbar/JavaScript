//******************************NUMBER*****************************

const num1= new Number(10);
// Number object

console.log(num1.toExponential(2))
//will convert the number to a string and in exponential form
//takes one parameter will show only that much numbers after the decimal

console.log(num1.toString())
//will convert the number to string

console.log(myNumber.toFixed(2))
//will convert the number to string
// trims the number to given paramters after the decimal point

const population = 7000000000;
// Default locale (e.g., en-US)
console.log(population.toLocaleString());
// Output: "7,000,000,000"

const myNumber = 123.45678;
// Keep 4 significant digits
console.log(myNumber.toPrecision(4));
// Output: "123.5" (the number is rounded)


//******************************MATH*******************************
.abs
.ceil
.floor
.round

//******************************DATE AND TIME*******************************
.now()
//will be the one which will be used the most