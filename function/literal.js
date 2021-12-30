// 변수에 할당된 형태
{
  // 1. 함수 표현식 => 표현식인 문
  let a = function () {
    console.log("식별자: a");
  };
  a(); // should work

  let b = function c() {
    console.log("식별자: b");
  };
  b(); // should work
  // c로 호출할 수 없다.
}

// 변수에 할당되지 않은 형태
{
  // 함수 선언문 => 표현식이 아닌 문
  function d() {
    console.log("식별자: d");
  }
  d(); // should work

  // 그룹 연산자 속 기명함수 리터럴 => 표현식인 문
  (function e() {
    console.log("함수리터럴");
  });
  // 호출할 수 없음
}
