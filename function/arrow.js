// => : fat arrow
// ES6
// feature: simple

// 1. use the 'fat arrow' instead of the 'function' keyword
// 2. why?
//      problem: In the callback function, 'this' point global object.
//      example:
//HOF
function higherOrderFunc(f) {
  f();
}
//callback
const callbackFunc = function () {
  console.log(this);
};
higherOrderFunc(callbackFunc);

// 함수 표현식으로 정의
const number = () => 2;
const number2 = () => {
  return 2;
};

if (number() === number2()) console.log("same result");
const list = ["1", "2", "3"].map((v) => +v);
const type = list.map((v) => typeof v);
console.log(list);
console.log(type);

// not instantiable
// - can not use as a constructor
// - has no prototype property
{
  const Genaral = function () {};
  const generalInstance = new Genaral();
  console.log(generalInstance.hasOwnProperty("prototype"));
  const arrow = () => {};
  //  new arrow(); //arrow is not a constructor
  console.log(arrow.hasOwnProperty("prototype"));
}

// using same name in multiple params is not allowed
{
  const genaral = function (a, a) {
    console.log(a);
  };
  //   const arrow = (a, a) => { //SyntaxError: Duplicate parameter name not allowed in this context
  //     console.log(a);
  //   };
  genaral(1, 2);
  //   arrow(1, 2);
}

// doesn't have [this, arguments, super, new.target] binding
// - if use one of these in arrow function, it will be found in higher scope.
// -> "lexical this"
class Person { // 클래스 내부는 strict mode로 실행됨
  constructor(name) {
    this.name = name;
  }

  announce(arr) {
    console.log(this); // 여기서 this는 jueun 객체를 가리킴
    const that = this; // this를 회피시킴
    // map에 콜백함수로 일반 함수를 전달한 경우
    return arr.map(function (item) {
      // return `Hi ${item}, my name is ${that.name}.`; // 회피시키는 방법
      // return `Hi ${item}, my name is ${this.name}.`; // Q: 결과는?
    });
    // map에 화살표 함수를 전달한 경우
    // return arr.map((item) => {
    //   return `Hi ${item}, my name is ${this.name}.`;
    // });
  }
}
this.name = "error"; // 전역에 등록
const jueun = new Person("jueun");
const greeting = jueun.announce(["a", "b", "c", "d"]);
console.log(greeting);