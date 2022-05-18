// [[Construct]] 내부 메서드
// 함수는 객체이지만 일반 객체와 다르다.
// +----------+---+-------------------------+
// |   구분    |호출|         내부 메서드        |
// +----------+---+-------------------------+
// | 일반 함수  | x |          [[Call]]       |
// +----------+---+-------------------------+
// | 생성자 함수 | o | [[Call]], [[Construct]] |
// +----------+---+-------------------------+

// 함수 표현식 => [[Call]], [[Construct]]를 둘 다 가짐

const Person = function (name) {
  this.name = name;
  this.printName = function () {
    console.log(`my name is ${this.name}`);
  };
  new.target
    ? console.log("==> 생성자로서 호출되었음")
    : console.log("==> 일반 함수로서 호출되었음");
};

//일반함수로 호출 => [[Call]]이 호출됨
const dohoon = Person("dohoon");

console.log("[dohoon]");
console.log(dohoon); // => undefined를 반환함
printName(); // => 전역에 바인딩 됨

//생성자로서 호출 => [[Construct]]가 호출됨
const jueun = new Person("jueun");

console.log("[jueun]");
console.log(jueun); // => 객체를 반환함
jueun.printName(); // => 생성된 인스턴스에 바인딩 됨

console.log(JSON.stringify(jueun));
