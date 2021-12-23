// 0. NaN, null and undefined
{
  console.log("0. NaN, null and undefined");
  console.log(typeof NaN); // number
  console.log(typeof null); // object
  console.log(typeof undefined); // undefined
}

// 1. undefined - 초기화에 사용되는 값
console.log("1. undefined - 초기화에 사용되는 값");
{
  var a;
  console.log(typeof a); // undefined

  let b;
  console.log(typeof b); // undefined

  //특이사항: 선언하지 않은 식별자에 대한 typeof 결과
  console.log(typeof c); // undefined -> ReferenceError가 발생해야하는데, 그렇지 않고 undefined를 띄움
}

// 2. 연산에 undefined를 이용한 경우
console.log("2. 연산에 undefined를 이용한 경우");
{
  var tmp; // undefined
  console.log(tmp * 42); // undefined * 42

  tmp = "string";
  console.log(tmp * 42); // string * 42

  tmp = false;
  console.log(tmp * 42); // bool * 42

  tmp = !!undefined;
  console.log(tmp * 42); // bool * 42
}

// 3. null, undefined, NaN의 상호 비교
console.log("3. null, undefined, NaN의 상호 비교");
{
  console.log(NaN === NaN); // false
  console.log(isNaN(NaN)); // true

  console.log(null == undefined); // [동등비교] 암묵적으로 type을 바꿔 비교하므로 true
  console.log(null === undefined); // [일치비교] type이 다르므로 false
}

// 4. null이 object인 이유
console.log("[4. null이 object인 이유]");
{
  let a = null;
  console.log(typeof a);
  console.log(a === null);
}
