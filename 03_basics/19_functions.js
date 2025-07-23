// function say(){
//     console.log("hello")
// }
// //why is this "say" called reference and "say()" called execution
// //so the answer to this is reference means like it is pointing to that function it holds the property
// //but if we put () we will be able to execute that function
// //the refernece is used to copy or send as a reference in callbakcs
// // function say() {
// //   console.log("hello");
// // }

// // // 'greet' now holds a reference to the 'say' function
// // const greet = say; 

// // // You can now execute it using the new reference
// // greet(); // Outputs: "hello"

// function add(num1,num2){ //the things written inside () while defining fucntion is called parameters
//     console.log(num1+num2)
// }
// add(1,2) //the thigns written inside the () while executing a function is called arguments

// function sub(num1,num2){
//     console.log(num1-num2)
// }
// const result =sub(2,1)
// console.log("result:",result)

// function sub(num1,num2){
//     return num1-num2
// }
// const res =sub(2,1)
// console.log("res:",res)
// //dont get confused between these two

// function send(name ="good game"){//so while executing send() if the user hasnt given any parameter then by default it will take good game in this scenario
//     console.log("gg");
    
// }

// //let us say i am executing a function and the arguments that will be given is unknown for the function then we use rest operator "..."

// function adding(...num1){
//     return num1
// }
// console.log(adding(100,200,300))

// function adding(val1,...num1){
//     return num1
// }
// console.log(adding(100,200,300))
// //check the difference between these two

// let arr1=[1,2,3]
// function sendingarr(getarr){
// console.log(getarr);
// }
// sendingarr(arr1)
// //do the same for objects

// var a =10
// if (true) {
//     var a =20
// }
// console.log(a)

// // functions can be declared in two ways as of now
// function fun1(){
//     console.log("this is one type")
// }
// fun1()
// const fun2 = function(){
//     console.log("this is the other type");
// }
// fun2()
// //the difference comes in initialization for the fun1 is it is executed before writing the function it will not throw error but fun2 will

const user={
    name: "sumukha",
    age: "21",
    fun1: ()=>{
        console.log("hello",`${this.name}`)
    }

}
user.fun1()
// Using call(), apply(), or bind(): These methods explicitly set the value of this.

// JavaScript

// function greet() {
//     console.log("Hello", this.name);
// }

// const user = {
//     name: "sumukha",
//     age: "21"
// };

// greet.call(user); // Output: Hello sumukha
//                   // 'this' is explicitly set to 'user'







//********exp about this in arraow functions************************** */
// why cant i use this inside arrow function


// You absolutely can use this inside an arrow function, but its behavior is fundamentally different from traditional function expressions or declarations. This difference is precisely why arrow functions are so useful for certain scenarios, and why they can be a source of confusion if you're expecting the traditional this binding.

// The Key Difference: Lexical this Binding

// The core reason you "can't" use this in an arrow function the same way as a regular function is that arrow functions do not bind their own this. Instead, they lexically inherit this from their enclosing scope.

// Let's break down what that means:

// Traditional Functions (Function Declarations/Expressions):

// They define their own this context.

// The value of this inside them is determined by how they are called (e.g., method call, standalone function call, constructor call, using call/apply/bind). This is what we discussed in the previous answer.

// Arrow Functions:

// They do not create their own this context.

// They look up the scope chain for the nearest non-arrow function (or global scope) and inherit its this value. This "inheritance" happens at the time the arrow function is defined, not when it's called.

// Why this is often perceived as "can't use this" (and why it's a good thing for certain cases):

// Consider this common JavaScript problem before arrow functions:

// JavaScript

// function Counter() {
//     this.count = 0;
//     setInterval(function() {
//         // Problem: 'this' here does NOT refer to the Counter instance!
//         // It refers to the global object (window) or undefined in strict mode.
//         this.count++;
//         console.log(this.count);
//     }, 1000);
// }

// // const counter = new Counter(); // This would throw an error or increment window.count
// To fix this with traditional functions, you'd often see workarounds like:

// JavaScript

// function Counter() {
//     this.count = 0;
//     const self = this; // Capture 'this'
//     setInterval(function() {
//         self.count++; // Use the captured 'this'
//         console.log(self.count);
//     }, 1000);
// }

// // const counter = new Counter(); // This works!
// Enter Arrow Functions: The Elegant Solution

// With arrow functions, the problem above is naturally solved because of lexical this:

// JavaScript

// function Counter() {
//     this.count = 0;
//     // 'this' inside the arrow function will lexically inherit from the Counter function's 'this'
//     setInterval(() => {
//         this.count++; // 'this' correctly refers to the Counter instance
//         console.log(this.count);
//     }, 1000);
// }

// const counter = new Counter(); // This works beautifully!
// When You "Can't" (or shouldn't) Use this in Arrow Functions (because it won't be what you expect):

// You'll run into issues if you try to use an arrow function when you need this to be dynamically bound based on how the function is called, such as:

// Object Methods (where you want this to refer to the object):

// JavaScript

// const user = {
//     name: "sumukha",
//     fun1: () => {
//         // 'this' here does NOT refer to 'user'.
//         // It refers to the 'this' of the scope where 'user' was defined (likely the global object).
//         console.log("hello", `${this.name}`);
//     }
// };
// user.fun1(); // Output: hello undefined (or global object's name if it exists)
// In this case, a traditional function expression is what you want:

// JavaScript

// const user = {
//     name: "sumukha",
//     fun1: function() { // Or just fun1() { ... } in ES6+ shorthand
//         console.log("hello", `${this.name}`);
//     }
// };
// user.fun1(); // Output: hello sumukha
// Constructors: Arrow functions cannot be used as constructors. Trying to use new with an arrow function will throw an error because they don't have their own this binding, nor do they have a prototype property.

// In summary:

// It's not that you can't use this inside arrow functions; it's that this behaves differently (lexically scoped) than in traditional functions. This makes them incredibly powerful for maintaining this context in callbacks and nested functions, but unsuitable for situations where you rely on dynamic this binding (like typical object methods or constructors).







// const user={

//     name: "sumukha",

//     age: "21",

//     fun1: ()=>{

//         console.log("hello",`${this.name}`)

//     }

// }

// user.fun1()

// const user={

//     name: "sumukha",

//     age: "21",

//     fun1: function(){

//         console.log("hello",`${this.name}`)

//     }

// }

// user.fun1()



// Let's break down both code snippets and explain the output for each, specifically focusing on the behavior of this with arrow functions versus regular function expressions.

// Snippet 1: Arrow Function as a Method
// JavaScript

// const user = {
//     name: "sumukha",
//     age: "21",
//     fun1: () => {
//         console.log("hello", `${this.name}`);
//     }
// };
// user.fun1();
// Explanation:

// In this case, fun1 is defined as an arrow function. As discussed previously, arrow functions do not have their own this binding. Instead, they inherit this from their enclosing lexical scope.

// Where is user defined? The user object itself (and thus the arrow function fun1) is defined in the global scope (if run in a browser, this is the window object; if in Node.js, it's the global object or undefined in a module's top level depending on strict mode).

// What is this in the global scope?

// In a browser: this in the global scope refers to the window object. The window object typically does not have a name property that holds "sumukha".

// In Node.js (common scenarios): In a module, this at the top level is undefined. If not in strict mode, it might default to the global object.

// Result: When user.fun1() is called, the arrow function looks up for this. It finds that its this is bound to the global object (or undefined). Therefore, this.name will likely be undefined (or an empty string if window.name is empty).

// Expected Output:

// hello undefined
// (Or similar, depending on the environment's global name property.)

// Snippet 2: Regular Function Expression as a Method
// JavaScript

// const user = {
//     name: "sumukha",
//     age: "21",
//     fun1: function() {
//         console.log("hello", `${this.name}`);
//     }
// };
// user.fun1();
// Explanation:

// In this case, fun1 is defined as a regular function expression. Regular functions do have their own this binding, and the value of this is determined by how the function is called.

// How is fun1 called? fun1 is called as a method of the user object (i.e., user.fun1()).

// this in a method call: When a function is called as a method of an object, this inside that function refers to the object on which the method was called.

// Result: When user.fun1() is called, this inside fun1 will correctly refer to the user object. Therefore, this.name will be user.name, which is "sumukha".

// Expected Output:

// hello sumukha

