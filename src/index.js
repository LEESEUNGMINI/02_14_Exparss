import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ name: "YunJinMocks" });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
