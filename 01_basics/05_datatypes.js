//tc39 officical ecma js documentation
//mdn for easier documentation

"use strict"; //this is used to make the javascript strict to use the latest version things only *learn more about this*

// Data Types in JavaScript
// JavaScript has 7 primitive data types and 1 complex data type
// Primitive Data Types

let num = 42;
// 1. Number: Represents both integer and floating-point numbers.

let str = "Hello, World!";
// 2. String: Represents a sequence of characters.

let isTrue = true;
// 3. Boolean: Represents a logical entity and can have two values: true or false.

let notAssigned;
// 4. Undefined: A variable that has been declared but not assigned a value is of type undefined.

let emptyValue = null;
// 5. Null: Represents the intentional absence of any object value.

let uniqueSymbol = Symbol("description");
// 6. Symbol: A unique and immutable value often used as an identifier for object properties.


let bigIntValue = BigInt(1234567890123456789012345678901234567890);
let anotherbignumber = 12497024380180481094810n;
// 7. BigInt: Represents integers with arbitrary precision, useful for large integers.

// Complex Data Type


let person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    address: {
        city: "Wonderland",
        zipCode: "12345"
    }
};
// 8. Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.

let favoriteFruits = ["apple", "banana", "orange"];
//9. Array: An array is an ordered, integer-indexed, collection of values.

function functionName(parameter1, parameter2,) {
  // code to be executed
  return value; // optional
}
//10. Functions: A function in JavaScript is a reusable block of code that performs a specific task.

console.log(typeof favoriteFruits); // "objects"
console.log(typeof null); // "object" 
//this is fun remember this 

// 1) Primitive Datatypes
//        Number     => number
//        String     => string
//        Boolean    => boolean
//        null       => object
//        undefined  => undefined
//        Symbol     => symbol
//        BigInt     => bigint

// 2) Non-primitive Datatypes
//        Arrays    =>  object
//        Function  =>  function
//        Object    =>  object

//the primitive datatypes get stored in stack memory
//and the non-primitive datatypes get stored in heap memory,
//that means that the primitive datatypes use pass by value and the non-primitive datatypes use pass by referencee