var person = {
  name: "jueun",
};

// modify, add

person.name = "sungeun"; // modify
person.age = 30; // add
console.log(person); // => { name: 'sungeun', age: 30 }

// delete

delete person.age; // => work
delete person.banana; // => 에러없이 실행됨
console.log(person); // => { name: 'sungeun' }
