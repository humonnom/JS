// N이 1이 될때까지 두 과정 중 하나를 반복수행
// 두번째 연산은 N이 K로 나누어 떨어질때만 선택할 수 있음
// 1. N--
// 2. N/K (N%K === 0일때만 수행)

function my_solution_log(n, k) {
  let value = n;
  let num = 0;
  while (value !== 1) {
    const target = value - (value % k);
    num += value - target;
    value = target;
    if (value < k) {
      break;
    }
    num++;
    value /= k;
  }
  num += value - 1;
  return num;
}

function my_solution(n, k) {
  let value = n;
  let num = 0;
  while (value !== 1) {
    if (value % k === 0) {
      value /= k;
    } else {
      value--;
    }
    num++;
  }
  return num;
}

let n = 25;
let k = 5;

console.log(my_solution(n, k));
console.log(my_solution_log(n, k));
n = 1;
k = 1;

console.log(my_solution(n, k));
console.log(my_solution_log(n, k));
