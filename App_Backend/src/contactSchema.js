const mongoose = require("mongoose");

const ContactDetailsSchema = new mongoose.Schema({
  gemail: {
    type: String,
    // required: true,
  },
  gsubject: {
    type: String,
    // required: true,
  },
  gmsg: {
    type: String,
    // required: true,
  },
});

const ContactCollection = new mongoose.model(
  "ContactCollectionSchema1",
  ContactDetailsSchema
);
module.exports = ContactCollection;
