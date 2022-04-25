function solution(string) {
  const array = string.split("");
  let new_string = [];
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (isNaN(Number(array[i]))) {
      new_string.push(array[i]);
    } else {
      num += Number(array[i]);
    }
  }
  const result = new_string.sort().toString().replace(/,/g, "");
  console.log(result + num);
}

solution("K1KA5CB7");
