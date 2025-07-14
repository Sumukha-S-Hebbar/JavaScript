let a = "33A"
let number_a = Number(a) // Convert string to number{Use Number() function to convert a string to a number}
//but be careful, if the string is not a valid number, it will return NaN
//for example if a = "33abc", then number_a will be NaN
// you can check if a value is NaN using the isNaN() function
console.log(isNaN(number_a)) // will return true, because "33A" is a not valid number
// if a = null, then number_a will be 0 *careful with null values
//if a = undefined, then number_a will be NaN
let b = 0
let boolean_b = Boolean(b) // Convert number to boolean{Use Boolean() function to convert a number to a boolean}
// 0 is falsy, so boolean_b will be false
// if b = 1, then boolean_b will be true
// if b ="" then boolean_b will be false
// if b = "abc" then boolean_b will be true
 
//*****************************Operations**************************************** */
let c = 10
let neg_c= -c // Negation operator{Use - operator to negate a number} will return -10

//learn about pre-increment and post-increment operators and precedence 