/*
 ** 리터럴로 생성된 객체의 생성자 함수
 */

const o = {};

console.log(o.__proto__.constructor === Object); // true

/*
 **  [ ECMAScript 사양 ]
 ** 1. 같은 추상 연산 사용 => "OrdinaryObjectCreate"
 ** 생성자 함수에 인자를 전달하지 않는 경우와
 ** {}리터럴로 객체를 생성하는 경우 같은 추상 연산을 쓰도록 되어있음
 **
 ** 2. new.target의 처리 등 세부 내용은 다름
 */
