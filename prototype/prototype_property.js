/*
 ** prototype 프로퍼티는 함수객체만 가진다.
 */

const A = function (name) {
  this.name = name;
};

const a = new A("object_a");

console.log(A.hasOwnProperty("prototype")); // => true : 함수 객체는 "prototype" 프로퍼티를 가진다.
console.log(a.hasOwnProperty("prototype")); // => false : 함수가 아닌 객체는 가지지 않는다.

console.log(a.__proto__ === A.prototype); // => true : 생성자 함수인 A의 "prototype" 프로퍼티에 바인딩 된 객체가 a를 만드는데 사용되었으므로 a의 __proto__ 값과 같다.

/*
 **               [ 관계도 ]
 ** 생성자
 **  함수                           프로토타입 객체
 ** +---+  "A.prototype"로 접근  +------------------+
 ** | A |--------------------► | prototype object |
 ** +---+                      +------------------+
 **   \                               ▲
 **    \                              |
 **   생성자 함수로                      |
 **       생성된 객체                    |
 **         +---+                     |
 **         | a | --------------------+
 **         +---+      "__proto__"로 접근
 */

console.log(a.__proto__.constructor === A); // => true : a의 프로토타입 객체를 통해서 생성자에 접근할 수 있다.
const b = new a.__proto__.constructor("object_b");
console.log(b);
