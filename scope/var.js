console.log(x); // => undefined

var x;
//----------------------------
var y = 42;

if (true) {
  var y = 2022;
}
console.log(y); // 2022
//----------------------------
var a = "a";
var b = "b";
{
  var c = "c";
}
console.log(c);
// a, b, c 모두 전역변수이자 전역객체의 프로퍼티가 된다.

function foo() {
  // 함수레벨 스코프
  var d = "d";
}
foo();
// console.log(d); // => Reference Error (not defined)
