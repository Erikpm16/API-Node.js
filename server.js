// startar api
// 1 npm init -y
// 2 npm add express
// 3 npm add cors
// 4 node server.js
//http://localhost:5000/?valor=2&cod=2

const path = require("path");
const express = require("express");
// A linha a seguir não é necessária a partir da versão 4 do Express
const bodyParser = require("body-parser");

const app = express();

// A partir da versão 4 do Express, é possível substituir a linha abaixo por app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/add", (req, res) => {
  const { renda_anual, retido, dependentes, custo_saude, custo_educacao } = req.body;
  const dobro = dependentes * 300;
  if(renda_anual < 30000) {
    res.send({
      result: 'Insento'
    });
  } else if(renda_anual < 60000) {
    res.send({
      result: renda_anual / 10 - dobro - custo_saude - custo_educacao
    });
  } else if(renda_anual < 100000) {
    res.send({
      result: renda_anual / 20 - dobro - custo_saude - custo_educacao
    });
  } else if(renda_anual >= 100000) {
    res.send({
      result: renda_anual / 30 - dobro - custo_saude - custo_educacao
    });
  }

  
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000.`);
});