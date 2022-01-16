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
class Person {
  constructor(name) {
    this.name = name;
  }

  announce(arr) {
    // return arr.map(function (item) {
    //   return `Hi ${item}, my name is ${this.name}.`;
    // });
    return arr.map((item) => {
      return `Hi ${item}, my name is ${this.name}.`;
    });
  }
}

const jueun = new Person("jueun");
const greeting = jueun.announce(["yeji", "homin", "juehoon", "jinyoung"]);
console.log(greeting);
