// my first prototype

// 생성자 함수
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi my name is ${this.name}`);
};

const me = new Person("jueun"); // 생성자
const you = new Person("daeun"); // 생성자

me.sayHello();
you.sayHello();
