// 단항 산술 연산자
var str = "1";
var num = +str;

console.log(typeof str); // str 변수의 타입은 바뀌지 않음
console.log(typeof num); // num은 str을 number로 바뀐 값을 가지고 있음

var str2 = "Not a Number";
var num2 = +str2;

console.log(typeof str2); // str2 변수에는 영향이 없음
console.log(num2); // str2를 number로 바꿀 수 없기 때문에 NaN을 반환
