// console.log(a); // => Reference Error

// let a; // => 초기화(최초의 할당, undefined로 할당됨)되는 순간
//----------------------------
// let a = 42;

// if (true) {
//   let a = 2022;
// }
// console.log(a); // 42
//----------------------------
let a;
let b;
{
  let c;
}
