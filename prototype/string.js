const str = "literal";
const str2 = new String("object");

console.log(str.__proto__ === str2.__proto__);
console.log(str instanceof String);
console.log(str2 instanceof String);

// 현아가 남기고 간 의문
