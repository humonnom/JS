function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const generatorObject = generator();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next()); // done : true

function* generator2() {
  let a;
  yield a; // pending
  yield a; // pending
  a = { data: "coffee" };
  yield a; // settled
}
const generatorObject2 = generator2();
let res;
while (res === undefined) {
  res = generatorObject2.next().value;
}
// get data
console.log(res);
