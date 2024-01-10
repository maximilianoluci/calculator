const express = require("express");
const cors = require("cors");
const Calculator = require("./calculator");

const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(router);
const calc = new Calculator();

router.post("/calculator/add", (req, res) => {
  const { a, b } = req.body;
  const result = calc.add(parseFloat(a), parseFloat(b));
  res.send(`${result}`);
});

router.post("/calculator/subtract", (req, res) => {
  const { a, b } = req.body;
  const result = calc.subtract(parseFloat(a), parseFloat(b));
  res.send(`${result}`);
});

router.post("/calculator/multiply", (req, res) => {
  const { a, b } = req.body;
  const result = calc.multiply(parseFloat(a), parseFloat(b));
  res.send(`${result}`);
});

router.post("/calculator/divide", (req, res) => {
  const { a, b } = req.body;
  const result = calc.divide(parseFloat(a), parseFloat(b));
  res.send(`${result}`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
