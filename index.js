const express = require("express");

const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 4001;
app.use(express.json());

app.use(cors());

app.use(require("./routes"));

mongoose
  .connect(
    "mongodb+srv://bootcamp:bootcamp@cluster0.qvq9t.mongodb.net/EXC?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
