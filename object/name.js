// fun fact

// node => doesn't have the 'name' variable
// browser => does

var person = {
  "last-name": "park",
  "first-name": "jueun",
};

// console.log(person.last - name); => Reference Error
// browser에서의 실행결과: NaN
// browser에 name이라는 전역변수가 있기 때문이다.
