const sort = [500, 100, 50, 10];

function getCoinNumbers(input) {
  let num = 0;
  let rest = input;
  let index = 0;
  while (rest !== 0 && index < sort.length) {
    if (sort[index] <= rest) {
      rest -= sort[index];
      num++;
    } else {
      index++;
    }
  }
  return num;
}

const input = "1260";
const output = getCoinNumbers(input);

console.log(output);
