var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();
// 후속처리 메서드 then, catch, finally
// 프로미스를 반환함 -> 따라서 체이닝 가능

const endpoint = "http://localhost:8080";
const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });
};

promiseGet(`${endpoint}/posts/1`)
  .then((res) => {
    console.log("result: ");
    console.log(res);
  })
  .catch((err) => console.error(err))
  .finally(() => console.log("done"));
