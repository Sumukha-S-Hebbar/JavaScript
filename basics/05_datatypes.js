//tc39 officical ecma js documentation
//mdn for easier documentation

"use strict"; //this is used to make the javascript strict to use the latest version things only *learn more about this*

// Data Types in JavaScript
// JavaScript has 7 primitive data types and 1 complex data type
// Primitive Data Types
// 1. Number: Represents both integer and floating-point numbers.
let num = 42; // Integer
let pi = 3.14; // Floating-point number
// 2. String: Represents a sequence of characters.
let str = "Hello, World!"; // String literal
// 3. Boolean: Represents a logical entity and can have two values: true or false.
let isTrue = true; // Boolean value
// 4. Undefined: A variable that has been declared but not assigned a value is of type undefined.
let notAssigned; // Undefined variable  
// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null; // Null value, explicitly set to indicate no value
//so the null is used for an example a temperature app where i dont have any data but if i send 0 it will be the data so we use null which shoes no data received
// 6. Symbol: A unique and immutable value often used as an identifier for object properties.
let uniqueSymbol = Symbol("description"); // Unique symbol, can be used as a property key
// 7. BigInt: Represents integers with arbitrary precision, useful for large integers.
let bigIntValue = BigInt(1234567890123456789012345678901234567890); // BigInt value, can handle very large integers
// Complex Data Type
// 8. Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true,
    address: {
        city: "Wonderland",
        zipCode: "12345"
    }
}; // Object with properties and nested object 

console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known quirk in JavaScript) this is fun remember this 

let bignumber = BigInt(1234567890123456789012345678901234567890);

console.log(typeof bignumber); // "bigint"

let anotherbignumber = 12497024380180481094810n;
console.log(typeof anotherbignumber); // "bigint"

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//the primitive datatypes get stored in stack memory and the non-primitive datatypes get stored in heap memory that means that the primitive datatypes use pass by value and the non-primitive datatypes use pass by referencee