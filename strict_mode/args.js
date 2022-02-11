// non strict mode: arguments 객체가 변경됨
function foo(name, age) {
  name = "juhoon";
  age = 28;
  console.log(arguments);
}

foo("jueun", 29);
