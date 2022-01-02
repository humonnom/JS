// empty string
var foo = {
  "": "",
};

console.log(foo);

// 예약어 사용시 에러가 나지 않음
var foo2 = {
  var: "var",
  function: "function",
};

console.log(foo2);

// 중복선언시
var boyfriend = {
  name: "minho",
};

var boyfriend = {
  name: "jinho",
};

console.log(boyfriend);

// 문자열이 아닌 타입을 사용
var number = {
  3: 3,
};

console.log(number);
