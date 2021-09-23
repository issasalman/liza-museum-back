"use strict";
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String },
   event_description: { type: String },

  event_description_image: { type: String },
  date:{ type: String },
  ticket_price: { type: String },
 
});


const eventModel = mongoose.model("myEvent", eventSchema);

module.exports = eventModel;