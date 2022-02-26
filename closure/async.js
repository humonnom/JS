const student = [
  { name: "jueun", age: 25 },
  { name: "yumi", age: 26 },
  { name: "nayoung", age: 27 },
];

//error. using var keyword
for (let i = 0; i < student.length; i++) {
  var studentName = student[i].name;
  setTimeout(() => console.log(studentName), 0);
}
// => nayoung, nayoung, nayoung

//solution1. use let keyword (instead of var)
for (let i = 0; i < student.length; i++) {
  let studentName = student[i].name;
  setTimeout(() => console.log(studentName), 0);
}
// => jueun, yumi, nayoung

//solution2. use closure
for (let i = 0; i < student.length; i++) {
  function outer() {
    let studentName = student[i].name;
    return function () {
      setTimeout(() => console.log(studentName), 0);
    };
  }
  const inner = outer();
  inner();
}
// => jueun, yumi, nayoung
