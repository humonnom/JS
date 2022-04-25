// 최대한 많은 모험가 그룹 만들기

function solution_simple(total, value) {
  const array = value
    .split(" ")
    .map((element) => Number(element))
    .sort();
  let num = 0;
  let cnt = 0;
  let index = 0;
  while (index < total - 1) {
    cnt++;
    if (cnt >= array[index]) {
      num++;
      cnt = 0;
    }
    index++;
  }
  return num;
}

function solution(total, value) {
  const array = value
    .split(" ")
    .map((element) => Number(element))
    .sort();
  let index = 0;
  let num = 0;
  let level = array[0];
  while (level <= total - index) {
    if (level === array[index + array[index] - 1]) {
      num++;
      index += level;
      level = array[index];
    } else {
      level++;
    }
  }
  return num;
}

const fs = require("fs");
const fileName = "group.txt";
let input = fs.readFileSync(fileName).toString().trim().split("\n");
const [num, value] = input;
console.log(solution(num, value));
console.log(solution_simple(num, value));
