// 메서드의 중복 문제를 js가 해결하는 방법

// 중복되는 경우와 중복되지 않는 경우()

function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

Person.prototype.sayHello = function () {
  console.log(`Hi my name is ${this.name}`);
};

const Amy = new Person("Amy");
const Jane = new Person("Jane");

console.log(Amy.getName === Jane.getName); // => false : 각자의 메소드를 가짐
console.log(Amy.sayHello === Jane.sayHello); // => true : 메소드를 공유함

/*
 **      [ 메모리 구조 일러스트 ]
 **
 **       Amy              Jane
 ** +------------+    +------------+
 ** | getName()  |    | getName()  |
 ** +------------+    +------------+
 **       \                 /
 **       \                /
 ** +------------------------------+
 ** |        sayHello()            |
 ** +------------------------------+
 **
 */

/*
 **          Person
 ** +----------------------+
 ** |  프로퍼티   |   바인딩   |            프로토타입 객체
 ** +-----------+----------+            +----------+
 ** | prototype |프로토타입객체|--------->  | sayHello |
 ** +----------------------+            +----------+
 **             /     |                     |   |
 **            /      |        (상속)        |   |
 **           /     Jane  <-----------------+   |
 **         Amy <-------------------------------+
 **                         (상속)
 **
 */
