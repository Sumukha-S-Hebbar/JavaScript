const counter = function () {
  let count = 0; // 'count' is a variable in the outer function's scope

  // The inner function 'increment' is a closure
  // It has access to 'count' even after createCounter() finishes
  return function increment() {
    count = count + 1;
    return count;
  };
}; // createCounter() runs and returns the 'increment' function
console.log(counter()()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3