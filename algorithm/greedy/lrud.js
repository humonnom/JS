const fs = require("fs");
const input = fs.readFileSync("lrud.txt").toString().trim().split("\n");
const [total, string] = input;

function solution(total, string) {
  let x = 1;
  let y = 1;
  function is_valid(num) {
    if (num > 0 && num < total) {
      return true;
    }
    return false;
  }
  const go = string.split(" ");
  for (let i = 0; i < go.length; i++) {
    const where = go[i];
    let temp_x = x;
    let temp_y = y;
    if (where === "R") {
      temp_y++;
    } else if (where === "L") {
      temp_y--;
    } else if (where === "U") {
      temp_x--;
    } else if (where === "D") {
      temp_x++;
    }
    x = is_valid(temp_x) ? temp_x : x;
    y = is_valid(temp_y) ? temp_y : y;
  }
  return x + " " + y;
}

console.log(solution(total, string));
