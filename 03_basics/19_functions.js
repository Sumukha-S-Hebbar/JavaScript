function say(){
    console.log("hello")
}
//why is this "say" called reference and "say()" called execution
//so the answer to this is reference means like it is pointing to that function it holds the property
//but if we put () we will be able to execute that function
//the refernece is used to copy or send as a reference in callbakcs
// function say() {
//   console.log("hello");
// }

// // 'greet' now holds a reference to the 'say' function
// const greet = say; 

// // You can now execute it using the new reference
// greet(); // Outputs: "hello"

function add(num1,num2){ //the things written inside () while defining fucntion is called parameters
    console.log(num1+num2)
}
add(1,2) //the thigns written inside the () while executing a function is called arguments

function sub(num1,num2){
    console.log(num1-num2)
}
const result =sub(2,1)
console.log("result:",result)

function sub(num1,num2){
    return num1-num2
}
const res =sub(2,1)
console.log("res:",res)
//dont get confused between these two

function send(name ="good game"){//so while executing send() if the user hasnt given any parameter then by default it will take good game in this scenario
    console.log("gg");
    
}

//let us say i am executing a function and the arguments that will be given is unknown for the function then we use rest operator "..."

function adding(...num1){
    return num1
}
console.log(adding(100,200,300))

function adding(val1,...num1){
    return num1
}
console.log(adding(100,200,300))
//check the difference between these two

let arr1=[1,2,3]
function sendingarr(getarr){
console.log(getarr);
}
sendingarr(arr1)
//do the same for objects

var a =10
if (true) {
    var a =20
}
console.log(a)