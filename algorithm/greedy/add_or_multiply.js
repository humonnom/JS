function solution_hard(S) {
  let index = 1;
  let result = parseInt(S[0]);
  while (index < S.length) {
    const num = parseInt(S[index]);
    if (num <= 1 || result <= 1) {
      result += num;
    } else {
      result *= num;
    }
    index++;
  }
  return result;
}

function solution_easy(S) {
  let index = 1;
  let result = Number(S[0]);
  while (index < S.length) {
    const num = Number(S[index]);
    if (num === 0 || result === 0) {
      result += num;
    } else {
      result *= num;
    }
    index++;
  }
  return result;
}
let start = new Date().getTime();
console.log(solution_easy("02984"));
console.log(solution_easy("567"));
let end = new Date().getTime();
console.log(end - start);
