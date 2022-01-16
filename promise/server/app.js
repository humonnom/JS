const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

const post = {
  data: {
    type: "text",
    contents: "humonnom is great",
  },
};

app.use(cors());
app.get("/", (req, res) => {
  res.send("this is mini server for test");
});
app.get("/posts/:id", (req, res) => res.json(post));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
