const array1= [1,2,3,4,5]

let array2= array1

array2[0]=2
console.log(array1);

//leaarn about arrays and its methods
.push()
//adds to the last
.pop()
//removes from last
.unshift()
//adds at the start
.shift()
//removes from start
.includes()
.indexOf()
.join()
//converts array to string
.slice()
.splice()
//makes changes to the array
.push()
//in this it will take anything and aadd at the last be it array
//so to join 2 arrays use wither concat or spread operator
new_arr=[...arr1,...arr2]
//the above uses spread operator
const arr2 = [1, [2, [3, 4]]];
const newArr2 = arr2.flat(2);
console.log(newArr2);
// Output: [1, 2, 3, 4]
//we can give infinity to resolve it to infinity

.isArray
//will check if the given is an array
//array1.from will convert the given strign or set into array
const mySet = new Set([1, 2, 3]);
const arrFromSet = Array.from(mySet);
console.log(arrFromSet);
// Output: [1, 2, 3]
//.of can be used to make array from elements or variables
const myArr = Array.of(1, 2, "three", true);
console.log(myArr); // Output: [1, 2, "three", true]