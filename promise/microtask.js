// microtask queue >>> π  >>> task queue >>> π’
// λ§μ΄ν¬λ‘νμ€ν¬ νλ νμ€ν¬ νλ³΄λ€ μ°μ μμκ° λλ€.

// λΉλκΈ° ν¨μμ μ½λ°±ν¨μλ μ΄λ²€λ νΈλ€λ¬
setTimeout(() => console.log("task queue"), 0); // -> task queue

// νλ‘λ―Έμ€μ νμ μ²λ¦¬ λ©μλλ λΉλκΈ°λ‘ λμν¨
Promise.resolve()
  .then(() => console.log("microtask queue1")) // -> microtask queue
  .then(() => console.log("microtask queue2")); // -> microtask queue
