const user = { name: 'Alice', age: 25 };
const info = { email: 'alice@example.com', country: 'USA' };
const merged = Object.assign(user, info);

console.log(merged);
// Output: { name: 'Alice', age: 25, email: 'alice@example.com', country: 'USA' }

// The original 'user' object is also modified
console.log(user.name);
// Output: { name: 'Alice', age: 25, email: 'alice@example.com', country: 'USA' }

