function foo() {
  x = 10;
  const y = 10;
}
foo();
console.log(x);
// console.log(y); // => Reference error: not defined

z = 20;
console.log(z);

function footrict() {
  "use strict"; // 해당 함수는 strict mode 적용
  //   strictX = 10; // => Reference error: not defined
}

footrict();
