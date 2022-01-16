// 5가지 정적 메서드
// 1. resolve, reject, all, race, allSettled
// resolve
const data = [1, 2, 3];
{
  const promise = Promise.resolve(data);
  promise.then((res) => {
    console.log("=== data ===");
    console.log(res);
  });
}
// reject
const err = new Error("This is the most seriously error i've ever seen!!");
{
  //   const promise = Promise.reject(err);
  //   promise.catch(console.log); //Error: This is the most seriously error i've ever seen!!
}
// all
{
  const req1 = () => Promise.resolve("🐇");
  const req2 = () =>
    new Promise((resolve) => setTimeout(() => resolve("🐢"), 3000));
  const req3 = () => Promise.resolve("🐇");
  Promise.all([req1(), req2(), req3()])
    .then((res) => {
      console.log("=== all ===");
      console.log(res);
    })
    .catch(console.error);
  Promise.race([req1(), req2(), req3()])
    .then((res) => {
      console.log("=== race ===");
      console.log(res);
    })
    .catch(console.error);
}
// allSettled
{
  const resolved = () => Promise.resolve(data);
  const rejected = () => Promise.reject(err);

  Promise.allSettled([resolved, rejected]).then((res) => {
    console.log("=== allSetteld ===");
    console.log(res);
  });
}
