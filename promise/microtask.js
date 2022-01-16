// microtask queue >>> 🐇  >>> task queue >>> 🐢
// 마이크로태스크 큐는 태스크 큐보다 우선순위가 높다.

// 비동기 함수의 콜백함수나 이벤드 핸들러
setTimeout(() => console.log("task queue"), 0); // -> task queue

// 프로미스의 후속 처리 메서드도 비동기로 동작함
Promise.resolve()
  .then(() => console.log("microtask queue1")) // -> microtask queue
  .then(() => console.log("microtask queue2")); // -> microtask queue
