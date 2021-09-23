"use strict";

const { response } = require("express");
const eventModel = require("../models/event.model");

//=============================================================== Get Feedback:

const getEvent = (request, response) => {
  eventModel.find((error, eventData) => {
    console.log("eventData", eventData);
    response.json(eventData);
  });
};

//============================================================== Create Feedback:
const addEvent = (request, response) => {
  const {
    name,
    event_description,
    event_description_image,
    date,
    ticket_price,
  } = request.body;
  const newEvent = new eventModel({
    name,
    event_description,
    event_description_image,
    date,
    ticket_price,
  });
  newEvent.save();
  response.json(newEvent);
};

const deleteEvent = (request, response) => {
  console.log(request.params);
  const eventName = request.params.name;

  eventModel.deleteOne({ name: eventName }, (error, deletedData) => {
    response.json(deletedData);
  });
};

//========================================== Controller Exports:
module.exports = {
  getEvent,
  addEvent,
  deleteEvent,
};
