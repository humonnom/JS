// 이항 산술 연산자

// +연산자
// 피연산자 중 하나가 문자열인 경우
console.log(42 + "seoul"); // => 42seoul
console.log(typeof (42 + "seoul")); // => string

// 아닌 경우
console.log(42 + true); // => 43
console.log(typeof (42 + true)); // => number
