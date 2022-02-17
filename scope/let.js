let x;
console.log(x); // => undefined
{
  // => 스코프 시작지점
  // console.log(x); // => Reference Error (일시적 사각지대)
  let x; // => 선언부
}

/* 스코프의 시작부 ~ 변수 선언부까지의 영역에서 변수를 참조하면 에러가 난다.
 * 이 부분을 일시적 사각지대라 함 (블록레벨 스코프를 사용하는 let, const에 해당)
 * 호이스팅이 스코프 단위로 일어난다.
 * +--------+ => 스코프 시작점   : 실행컨텍스트가 관리하는 스코프에 등록됨(소스코드 평가과정)
 * |  x참조  | } 일시적 사각지대   : x참조시 에러
 * | let x; | => 선언부         : undefined로 초기화되는 순간
 * +--------+
 */

//----------------------------
let y = 42;

if (true) {
  let y = 2022;
}
console.log(y); // 42
//----------------------------
let a = "a";
let b = "b";
{
  // 블록레벨 스코프
  let c = "c";
}
// console.log(c); // => Reference Error (not defined)
