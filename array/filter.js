// 모든 요소를 순회하며 콜백함수를 실행, true를 리턴한 값만 모아서 새로운 배열 생성
var arr = [1, 2, 3, 5];

var odds = function (num) {
  if (num % 2) return true;
  return false;
};

console.log(arr.filter(odds));
