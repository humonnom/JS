const id = setTimeout(() => console.log("hi"), 1000); // return Timer Id
console.log("hello");

console.log(" << timer id >>");
console.log(id._idleTimeout); // In the browser, Timer Id is a number

// cancle timeout using Timer Id
// clearTimeout(id);
