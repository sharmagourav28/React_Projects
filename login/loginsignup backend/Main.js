const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//connection of db
mongoose
  .connect("mongodb://localhost:27017/loginSignUp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully !"))
  .catch((error) => console.log(error));

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is started");
});

app.post("/userData", (req, res) => {
  console.log(req.body);
  res.send("aagaya data");
});

app.listen(8080, () => {
  console.log("Server started");
});
