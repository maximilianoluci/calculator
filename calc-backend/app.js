const express = require("express");
const Calculator = require("./calculator");

const app = express();
const calc = new Calculator();

app.get("/add", (req, res) => {
  const { a, b } = req.query;
  const result = calc.add(parseFloat(a), parseFloat(b));
  res.send(`Result: ${result}`);
});

app.get("/subtract", (req, res) => {
  const { a, b } = req.query;
  const result = calc.subtract(parseFloat(a), parseFloat(b));
  res.send(`Result: ${result}`);
});

app.get("/multiply", (req, res) => {
  const { a, b } = req.query;
  const result = calc.multiply(parseFloat(a), parseFloat(b));
  res.send(`Result: ${result}`);
});

app.get("/divide", (req, res) => {
  const { a, b } = req.query;
  const result = calc.divide(parseFloat(a), parseFloat(b));
  res.send(`Result: ${result}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
