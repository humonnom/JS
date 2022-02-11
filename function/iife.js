// Immediately Invoked Funciton Expression

// 일반적인 방식
(function () {
  console.log("iife");
})(); // }())도 같음

// -> 함수를 소괄호로 감싸는 이유
// function() {}(); => ASI => function() {};();로 바뀜 => 에러발생

// + 이용하여 객체로 만들기
+(function () {
  console.log("iife");
})();

// ! 이용하여 객체로 만들기
!(function () {
  console.log("iife");
})();

let num = 2;
// 변수에 대입하여 객체로 만들기
const a = (function () {
  console.log("-- 실행 --");
  num++;
  return num;
})();
console.log(typeof a); // 즉시실행함수를 실행한 결과가 저장되어 있음
console.log(a);
console.log(num);
