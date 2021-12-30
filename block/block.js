// 잘못된 break 사용
if (true) {
  //break; // SyntaxError: Illegal break statement
}

// 레이블문에서의 break 사용
outer: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("[" + i + "] " + j + " => " + (i + j));
    if (i + j === 3) break outer;
  }
}
