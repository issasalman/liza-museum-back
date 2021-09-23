"use strict";

const eventModel = require("../models/event.model");

const seedFeedBack = () => {
  //=============================================== First Feedback:

  //=============================================== Second Feedback:
  const eventSeeding = new eventModel({
    name: "hiidsi",
  
    event_description: "hiii",
    event_description_image: "hiii",
    date:"201",
    ticket_price: "hiii",
   
  });
  eventSeeding.save();
};

module.exports = seedFeedBack;
