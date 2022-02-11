// "use strict";
//
const person = {
  name: "jueun",
  age: 42,
};

// non-configurable과 관련이 있음
// non-configurable을 true로 설정할 수는 없음

// 1. 객체의 속성
Object.defineProperty(person, "age", { configurable: false });
console.log(Object.getOwnPropertyDescriptors(person));
delete person.name; // configurable: true => 삭제 가능
// delete person.age; // configurable: false => Ref error

// 2. 함수
console.log("[ 함수의 configurable ]");
const abc = function () {
  console.log("함수");
};
console.log(delete abc); // => 비엄격 모드: false, 엄격 모드: error
// console.log(Object.getOwnPropertyDescriptors(abc));

// 3. 변수
const d = "d";
let e = "e";
var f = "f";
console.log("[ 변수의 configurable ]");
console.log("const로 선언한 변수");
console.log(Object.getOwnPropertyDescriptors(d)["0"].configurable);
console.log("let으로 선언한 변수");
console.log(Object.getOwnPropertyDescriptors(e)["0"].configurable);
console.log("var로 선언한 변수");
console.log(Object.getOwnPropertyDescriptors(f)["0"].configurable);

// delete d; // => 비엄격 모드에서는 삭제 가능
// delete e; // => 비엄격 모드에서는 삭제 가능
// delete f; // => 비엄격 모드에서는 삭제 가능

// 4. 매개변수 삭제
// const
const ghi = function (j) {
  console.log("함수");
  delete j.alpha; //  => configurable: true
  //   delete j; // => j 자체를 delete 할 수는 없음
};
const ghiDesc = Object.getOwnPropertyDescriptors(ghi);
console.log(ghiDesc);
ghiDesc.name.value = "GHI";
console.log(ghiDesc);

const j = {
  alpha: "j",
};
console.log(Object.getOwnPropertyDescriptors(j)); // => configurable: true
ghi(j);
