// slice without args(shallow copy)
console.log("[1 배열의 요소로 객체를 가지지 않은 경우]");
var arr = [1, 2, 3, 4, 5];
var arr2 = arr.slice();
arr2.push(6);

console.log("arr: ");
console.log(arr);
console.log("arr2: ");
console.log(arr2);

console.log("=> 원시값으로 이루어진 배열은 부수효과가 없음");

console.log("[2 배열의 요소로 객체를 가진 경우]");
var obj = { x: 0, y: 42 };
var arr = [1, 2, 3, 4, 5, obj];
var arr2 = arr.slice();

arr2[5].x = 420;
console.log("arr: ");
console.log(arr);
console.log("arr2: ");
console.log(arr2);

console.log("arr[5] === arr2[5] ->" + (arr[5] === arr2[5]));

console.log("=> 가리키는 객체가 동일하므로 부수효과가 있음");

//
//    arr    arr2
//      |    /
//      |   /
//      |  /
//     {obj}
//
console.log("여기서, 가리키는 객체를 통채로 바꿀 수 있을까?");
var obj2 = { new_x: 20, new_y: 40 };
arr2[5] = obj2;

console.log("arr[5] === arr2[5] ->" + (arr[5] === arr2[5]));
console.log("arr: ");
console.log(arr);
console.log("arr2: ");
console.log(arr2);

console.log("=> 가리키는 객체 자체가 달라짐");

//
//     arr     arr2
//      |       |
//      |       |
//      |       |
//    {obj}   {obj2}
//
