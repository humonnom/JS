// non strict mode: arguments 객체가 변경됨
function foo(name, age) {
  "use strict";
  name = "nice";
  age = 28;
  console.log(arguments);
  arguments[0] = "changed";
  console.log(arguments);
  return name;
}

console.log(foo("jueun", 29));
