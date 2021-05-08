const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");
const app = express();
const port = 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/produtos", async (req, res) => {
  try {
    const produto = await db("produtos");
    res.send(produto);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.post("/produtos", async (req, res) => {
  try {
    const { nome, valor } = req.body;
    const produto = await db("produtos").insert({ nome, valor });

    res.send();
  } catch (err) {
    res.send({ error: err.message });
  }
});

app.listen(port, () => {
  console.log("A aplicação express iniciou em ambiente de desenvolvimento!");
});
