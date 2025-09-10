const map= new Map()
map.set("In","India")
map.set("Usa","united")
for (const element of map) {
    console.log(element);
    
}
//but using the above method we will get entire key value as array
//if we want key and value seperate then
for (const [key,val] of map) {
    console.log(key,val);
    
}