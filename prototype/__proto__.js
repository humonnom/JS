// 모든 객체는 내부 슬롯으로 [[Prototype]]을 가진다.
// 객체에서 직접 접근할 수는 없고, 간접적으로 일부에 접근할 수 있는 접근자 프로퍼티를 제공한다.
// 그것이 __proto__이다.
//

/* > 내부동작
 ** __proto__에 접근하면
 ** [[Get]] 어트리뷰트에 할당된 함수 getter, [[Set]] 어트리뷰트에 할당된 setter 함수가 호출됨
 **
 */

/*
 ** > 프로토타입 객체의 교체
 */

function ObjFunc(x) {
  this.x = x;
}

const proto = {
  y: 1,
};

// const obj = {
//   x: 2,
// };

const obj = new ObjFunc(0);

console.log(obj.__proto__.y); // y는 없음
obj.__proto__ = proto;
console.log(obj.__proto__.y); // 프로토타입에 y가 생김
console.log(obj.y); // obj에서도 y를 상속받아 사용할 수 있음

/*
 ** > 프로토타입 객체에 대한 접근자 프로퍼티, "__proto__"의 소속
 */
const obj2 = {
  x: 1,
}; // 객체 리터럴로 생성

console.log(obj2.hasOwnProperty("__proto__")); // => false : __proto__가 객체 고유의 프로퍼티가 아님
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")); // => {get, set, ...} : 모든 객체의 프로토타입 객체인 "Object.prototye" 객체가 __proto__를 가지고 있음
console.log(obj2.__proto__ === Object.prototype); // => true : 객체가 사용하는 __proto__가 Object.prototye 객체의 접근자 프로퍼티와 같음

/*
 ** > 프로토타입의 참조를 얻거나(get) 교체(set)하고 싶은 경우 "__proto__" 대신에 "메소드" 사용하기
 */

const obj3 = Object.create(null); // prototype 객체가 null인(상속하는 prototype이 없는) 객체가 만들어짐
console.log(obj3.__proto__); // => undefined
console.log(Object.getPrototypeOf(obj3));
