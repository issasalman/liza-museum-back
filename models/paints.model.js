"use strict";
const mongoose = require("mongoose");

const paintsSchema = new mongoose.Schema({
  name: { type: String },
   location: { type: String },
  title: { type: String },
  image_id: { type: String },
  
});

const paintsModel = mongoose.model("myPaints", paintsSchema);

module.exports = paintsModel;
