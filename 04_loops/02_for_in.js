//as we saw that we were unable to use for of for objects there comes a new loop 
//for in loop which always return the keys
const obj={
    name:"sumukha",
    age:20
}
for(const key in obj){
    console.log(key);
}
//will print only the keys
for(const key in obj){
    console.log(obj.key);
}
//will throw errors as this is not the right way to access the values
for(const key in obj){
    console.log(obj[key]);
}
//this is the right way to get values

//for in also works for arrays but it gives its keys which are its index