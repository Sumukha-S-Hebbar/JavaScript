//console.log(2>2)
//console.log(2>=2)
//console.log(2<2)
//console.log(2<=2)
//console.log(2==2)
//console.log(2!=2)
//these are some of the basics things that i know about data comparison in javascript

console.log(2 === 2)
// strict equality this will not onlycompare the value but also the datatype

console.log(2 == '2')
// this will return true because it only compares the value

console.log(null == undefined)
// this will return true because null and undefined are loosely equal
console.log(null > 0)
// in this the null will be converted then compared to 0 and it will return false
console.log(null == 0)
// this will return false because null is not converted here == and >,<,>=,<= works different than ==
console.log(null >= 0)
//this will return true as the null will be converted to number 0

console.log(undefined == 0)
// this will return false because undefined is not converted to a number
console.log(undefined <= 0)
// this will return false because undefined is not converted to a number


// loose equality operator (==) have a special exception just for null and undefined
// null == undefined evaluates to true.
// null == null evaluates to true.
// undefined == undefined evaluates to true.