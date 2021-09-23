"use strict";

const { response } = require("express");
const feedBackModel = require("../models/feedback.modal");

//=============================================================== Get Feedback:

const getFeedBack = (request, response) => {
  feedBackModel.find((error, feedBackData) => {
    response.json(feedBackData);
  });
};

//============================================================== Create Feedback:
const createFeedBack = (request, response) => {
  const { name, feedBackMessage, gender } = request.body;
  const newFeedBack = new feedBackModel({
    name,
    feedBackMessage,
    gender,
  });
  newFeedBack.save();
  response.json(newFeedBack);
};

//========================================== Controller Exports:
module.exports = {
  getFeedBack,
  createFeedBack,
};
