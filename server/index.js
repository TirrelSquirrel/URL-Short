const express = require("express");
const cors = require("cors");

const controller = require("./controller");
const { default: mongoose } = require("mongoose");

const PORT = 5000;
const app = express();

app.use(cors());

try {
  mongoose.connect("mongodb://127.0.0.1:27017/urlshort");
  console.log("---Conectado a base de datos---");
} catch (error) {
  console.error("---Error al conectar a la base de datos---");
  console.error(error);
  console.error("---Error al conectar a la base de datos---");
}

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  res.json(controller.test("hye"));
});

app.post('/', (req, res) => {
  

  res.send('hey')
})

app.listen(PORT, () => {
  console.log("Servidor iniciado");
});
