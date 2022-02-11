globalThis.a = 1;
b = 2;
var c = 3;
for (const key in globalThis) {
  console.log(`${key}`);
}

console.log(globalThis["NaN"]);
console.log(globalThis["Infinity"]);

// eval
var x = eval("1 + 2;"); // => 표현식이면 값을 생성함
console.log(x);
eval("var y = 1;"); // => 값으로 평가할 수 없는 문이면 런타임에 실행함(즉, 호이스팅 적용 안됨)
console.log(y);

const z = 42;
// eval("var z = 24;"); // => syntax error
console.log(z);

// foo 함수의 스코프를 동적으로 수정함
function foo() {
  eval("var z = 24;"); // => var z = 24;와 같은 효과
  console.log(z); // => 24
}
foo();

// strict 모드에서는 eval 자체 스코프를 생성함
function foo2() {
  "use strict";
  eval("var z = 24;"); // => var z = 24;와 같은 효과
  console.log(z); // => 42
}
foo2();
