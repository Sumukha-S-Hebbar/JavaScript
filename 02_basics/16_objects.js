//code and learn about objects

const user ={}
user.name="sumukha"
user.age="20"
console.log(user);
//**i had a doubt here that how was i able to make changes to the object as i have declared using const
//  ie it was declared empty then it should be empty was my thinking
//  but i was wrong the case is that until i do not assign a new object to the "user" its perfectly fine so basically the object is like a box and user is pointing to that box i am able to change anything inside the box but not change the box which is reassigning**
//so basically i can do the above thing but not the below thing
// const users={}
// users={
//     name:"sumukha",
//     age:20
// }
// console.log(users);
const arr1=[1,2,3,4]
const arr2=[2,3,4,5]
console.log([...arr1,...arr2])

const ob1={
    name: "sumukha",
    age: 10,
    [sym]: "key"
    //this is the way to declare symbols inisde an object
}
console.log(ob1[sym])
//this is the way of accessing the symbols

//if we want someone to not make any changes to the object then we can freeze it
Object.freeze(ob1)

Object.assign()
const user = { name: 'Alice', age: 25 };
const info = { email: 'alice@example.com', country: 'USA' };
const merged = Object.assign(user, info);

console.log(merged);
// Output: { name: 'Alice', age: 25, email: 'alice@example.com', country: 'USA' }

// The original 'user' object is also modified
console.log(user);
// Output: { name: 'Alice', age: 25, email: 'alice@example.com', country: 'USA' }

Object.keys(obj_name)
Object.values(obj_name)
Object.entires(obj_name)

.hasOwnProperty(Property_name)