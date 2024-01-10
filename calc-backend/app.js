const express = require("express");
const cors = require("cors");
const Calculator = require("./calculator");

const app = express();
app.use(cors());
const calc = new Calculator();

app.get("/calculator/add", (req, res) => {
  const { a, b } = req.query;
  const result = calc.add(parseFloat(a), parseFloat(b));
  res.send(`${result}`);
});

app.get("/calculator/subtract", (req, res) => {
  const { a, b } = req.query;
  const result = calc.subtract(parseFloat(a), parseFloat(b));
  res.send(`${result}`);
});

app.get("/calculator/multiply", (req, res) => {
  const { a, b } = req.query;
  const result = calc.multiply(parseFloat(a), parseFloat(b));
  res.send(`${result}`);
});

app.get("/calculator/divide", (req, res) => {
  const { a, b } = req.query;
  const result = calc.divide(parseFloat(a), parseFloat(b));
  res.send(`${result}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
