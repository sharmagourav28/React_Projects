const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/sellhere")
  .then(() => {
    console.log("Mongo sign/login Connected");
  })
  .catch(() => {
    console.log("Failed To connected");
  });

const LoginInSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const collection = new mongoose.model("Collection1", LoginInSchema);

module.exports = collection;
