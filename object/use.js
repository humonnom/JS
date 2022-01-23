var coffee = {
  sort: "americano",
  ice: false,
  size: "large",
  shots: 2,
};

// dot notation
console.log(coffee.ice);

// bracket notation
console.log(coffee["ice"]);
// console.log(coffee[ice]); // => doesn't work

var ice = "ice";
console.log(coffee[ice]); //=> it works

console.log(coffee["hot"]); // => undefined

console.log(coffee.is); // => undefined
