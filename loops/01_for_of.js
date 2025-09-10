const arr=[1,2,3,4,5]
for (const element of object) {
    console.log(element);
    
}
//the above is the syntax
//element is just the name given its name can be anything it represents the elements of object
//object can be  array string
//cannot iterate object using for of
//can be used to iterate map
const map= new Map()
map.set(In,"India")
map.set(Usa,"united")
for (const element of map) {
    console.log(element);
    
}
//but using the above method we will get entire key value as array
//if we want key and value seperate then
for (const [key,val] of map) {
    console.log(key);
    console.log(val)
}
//if we use the above syntax then we can get the key and value seperate