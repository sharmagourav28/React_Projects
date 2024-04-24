const express = require("express");
const cors = require("cors");
const app = express();
const collection = require("./monogodb");
const contactCollection = require("./contactSchema");
app.use(cors());

app.use(express.json());
app.listen(8080, () => {
  console.log("Port Started");
});

app.get("/home", (req, res) => {
  console.log("Kuch bhi");
  res.send("Data get");
});

app.post("/SignUp", async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password,
  };
  const id = await collection.insertMany([data]);
  console.log(id);
  res.send("Sign Up Successfull");
});

app.post("/Contact", async (req, res) => {
  const guestdata = {
    gemail: req.body.guestemail,
    gsubject: req.body.guestsubject,
    gmsg: req.body.guestmsg,
  };
  console.log(guestdata);
  const gid = await contactCollection.insertMany([guestdata]);
  console.log(gid);
  res.send("Contact Form Submitted Successfully");
});

app.post("/Login", async (req, res) => {
  // console.log("Mel gya");
  const userData = {
    name: req.body.name,
    password: req.body.password,
  };
  const checkdata = await collection.findOne({
    name: userData.name,
  });
  if (
    checkdata.name === userData.name &&
    checkdata.password === userData.password
  ) {
    res.send("Login Successfull");
  } else {
    res.send("Login Unsucessfull");
  }
  console.log(checkdata);
  // res.send("got it");
});
