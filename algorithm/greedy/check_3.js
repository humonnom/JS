function solution(n) {
  let num = 0;
  for (let h = 0; h <= n; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        if (h.toString().includes("3")) num++;
        else if (m.toString().includes("3")) num++;
        else if (s.toString().includes("3")) num++;
      }
    }
  }
  return num;
}

console.log(solution(5));
