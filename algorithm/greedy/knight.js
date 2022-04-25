function solution(position) {
  function checkDirection(x, y) {
    if (x < 1 || y < 1) return 0;
    if (x > 8 || y > 8) return 0;
    return 1;
  }

  const [xChar, yChar] = position.split("");
  const x = xChar.charCodeAt(0) - 97 + 1;
  const y = Number(yChar);

  let num = 0;
  num += checkDirection(x + 2, y - 1);
  num += checkDirection(x + 2, y + 1);
  num += checkDirection(x - 2, y - 1);
  num += checkDirection(x - 2, y + 1);
  num += checkDirection(x - 1, y + 2);
  num += checkDirection(x + 1, y + 2);
  num += checkDirection(x - 1, y - 2);
  num += checkDirection(x + 1, y - 2);
  return num;
}

console.log(solution("a3"));
