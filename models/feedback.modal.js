"use strict";

const mongoose = require("mongoose");

//================================================================== Schema:
const feedBackSchema = new mongoose.Schema({
  name: { type: String },
  feedBackMessage: { type: String },
  gender:{type : String},
});

//==================================================== FeedBack model:

const feedBackModel = mongoose.model("feedback", feedBackSchema);

module.exports = feedBackModel;
