// executor
const async = (generator) => {
  // generate
  const generatorObject = generator();

  // exec
  const exec = () => {
    const result = generatorObject.next();
    return result.value ? result.value : exec();
  };
  return exec;
};

// generator
const res = async(function* generator() {
  let a;
  yield a;
  yield a;
  a = { data: "coffee" };
  yield a;
  yield a;
})(); // 즉시 실행 함수

console.log(res);
