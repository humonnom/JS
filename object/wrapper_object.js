// 래퍼 객체
const strLiteral = "hello";
const str = new String("hello");
console.log(typeof strLiteral); // => string
console.log(typeof str); // object

// String 생성자 함수로 만들지 않았는데 왜 String 쓸 수 있을까?
console.log(strLiteral.includes("h")); // => 왜 쓸 수 있을까?
console.log("string".includes("s")); // => 왜 쓸 수 있을까?

// 프로토타입 체인상에 String.prototype이 존재하는지 확인
console.log(str instanceof String); // => true
console.log(strLiteral instanceof String); // => false
console.log("string" instanceof String); // => false

// 엔진이 일시적으로 원시값을 객체로 변환하고 메서드 호출 후 다시 되돌려놓는다.

/*
 * 1. "string".includes("s")
 * 2. "string"을 String 객체로 변환
 * 3. String.prototype.includes 메서드 호출
 * 4. 다시 "string"을 String 객체에서 리터럴로 바꿈
 */

// 래퍼객체의 형태
console.log(Object.getOwnPropertyDescriptors(str));
