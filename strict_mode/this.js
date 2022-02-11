//일반 함수의 this 바인딩 비교

console.log("[non strict mode]");
function foo(type) {
  console.log(type);
  console.log(this === globalThis ? "전역객체 바인딩" : this); // 전역객체에 바인딩 => true
}
foo("일반함수:");
new foo("new 연산자:");

(function () {
  "use strict";
  console.log("[strict mode]");

  function strictFoo(type) {
    console.log(type);
    console.log(this === undefined ? "undefined" : this);
  }
  strictFoo("일반함수:"); // => undefined
  new strictFoo("new 연산자:"); // => this 바인딩
})();
