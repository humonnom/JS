console.log(y); // => undefined (호이스팅 O)
// console.log(x); // => Reference error (호이스팅 X)

x = 2; // 전역 프로퍼티이지만 호이스팅의 대상이 아님
var y = 2; // 전역 프로퍼티이자 전역 변수이기 때문에 delete로 삭제할 수 없음

console.log(delete x); // => true
// console.log(x); // => x is undefined

console.log(delete y); // => false
