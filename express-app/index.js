const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");
const app = express();
const port = 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/produtos", (req, res) => {
  res.send([
    { id: 1, nome: "Nome1", valor: 44.44 },
    { id: 2, nome: "Nome2", valor: 55.55 },
    { id: 3, nome: "Nome3", valor: 66.66 },
    { id: 4, nome: "Nome4", valor: 77.77 },
    { id: 5, nome: "Nome5", valor: 88.88 },
  ]);
});

app.post("/produtos", async (req, res) => {
  try {
    const { nome, valor } = req.body;
    const produto = await db("produtos").insert({ nome, valor });

    res.send(produto);
  } catch (err) {
    res.send({error: err.message});
  }
});

app.listen(port, () => {
  console.log("A aplicação express iniciou em ambiente de desenvolvimento!");
});
