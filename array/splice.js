var array = [1, 2, 3, 4];
var removed = array.splice(2); // 2번 인덱스 부터 삭제
console.log("array :" + array); // 1, 2
console.log("removed :" + removed); // 3, 4

var array = [1, 2, 3, 4];
var removed = array.splice(1, 2); // 1번 인덱스부터 2개 삭제
console.log("array :" + array); // 1, 4
console.log("removed :" + removed); // 2, 3
