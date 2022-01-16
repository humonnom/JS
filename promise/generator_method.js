function* generator() {
  try {
    console.log("=> Hello");
    yield 1;
    console.log("=> Hi");
    yield 2;
    console.log("=> Again, nice to meet you");
    yield 3;
  } catch (e) {
    console.error(e);
  }
}

// 제너레이터 객체의 생성
const generatorObject = generator();

// 제너레이터 객체의 메소드(next, return, throw)
// iterator result object 반환

// <next>
// yield 표현식까지 코드 블록 실행
// { value : yield된 값, done : false }
console.log(generatorObject.next()); // Hello 출력
console.log(generatorObject.next()); // Hi 출력
console.log(generatorObject.next()); // Again, nice to meet you 출력

// <return>
// console.log(generatorObject.return("닭가슴살")); // { value : 매개변수로 받은 값, done : true }

// <throw>
console.log(generatorObject.throw("퍽퍽살")); // { value: undefined, done: true }
