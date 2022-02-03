// 프로토타입 객체가 결정되는 방식

// 객체리터럴로 생성된 객체의 prototype => Object.prototype
const Amy = {
  name: "amy",
};

function Person(name) {
  this.name = name;
}

const Jane = new Person("jane");

// 생성자 함수로 생성된 객체의 prototype => 생성자 함수의 "prototype" 프로퍼티에 바인딩된 객체
//
//            +-----------------------------------------------------------------+
//            |                                                                 | ("prototye" 프로퍼티로 접근)
//            |          ("constructor"로 접근)                                   |
//   [생성자 함수] Person  <--------------------- [프로토타입 객체] Person.prototype <-+
//                |                                  |
//                |                                  | (상속)
//                +-------------->  [객체] Jane <-----+
//                  (생성)
