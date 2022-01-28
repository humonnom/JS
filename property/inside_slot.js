const object = {
  age: 5,
  name: "jueun",
};

//object.[[Prototype]] -> 내부 로직이므로 원칙적으로 접근 불가
console.log(object.__proto__); // -> 간접적으로 접근 할 수 있음

//데이터 property -> 프로퍼티 생성시 만들어지고,엔진에 의해 디폴트 값으로 초기화됨
console.log(Object.getOwnPropertyDescriptor(object, "age"));
console.log(Object.getOwnPropertyDescriptor(object, "name"));

//접근자 property -> getter와 setter를 정의할 수 있다.
const coffee = {
  ice: true,
  menu: "americano",
  customer: "jueun",

  get order() {
    return `${this.customer}, your ${this.ice ? "iced" : "hot"} ${
      this.menu
    } is ready.`;
  },
  set order(sentence) {
    let temp;
    [this.customer, this.menu] = sentence.split(" ordered ");
    [temp, this.menu] = this.menu.split(" ");
    this.ice = temp === "iced" ? true : false;
  },
};

console.log(coffee.order);
coffee.order = "donghyun ordered iced latte";
console.log(coffee.order);
coffee.order = "jinyoung ordered hot coffee";
console.log(coffee.order);
