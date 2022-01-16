// client side Web API
import fetch from "node-fetch";

const endpoint = "http://localhost:8080/posts/1";
const options = { method: "GET" };

function getPost() {
  const result = fetch(endpoint, options).then((res) => res.json());
  return result;
}

async function exec() {
  const data = await getPost();
  console.log(data);
}

exec();
