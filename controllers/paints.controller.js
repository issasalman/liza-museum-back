"use strict";

const { response } = require("express");
const paintsModel = require("../models/paints.model");

//=============================================================== Get Feedback:

const getPaints = (request, response) => {
  paintsModel.find((error, paintsData) => {
    console.log("paintsData", paintsData);
    response.json(paintsData);
  });
};

//============================================================== Create Feedback:
const addPaints = (request, response) => {
  const {
    name,
    title,
    location,
    image_id,
   
  } = request.body;
  const newPaints = new paintsModel({
    name,
    title,
    location,
    image_id,
   
  });
  newPaints.save();
  response.json(newPaints);
};

const deletePaints = (request, response) => {
  console.log(request.params);
  const paintName = request.params.name;

  paintsModel.deleteOne({ name: paintName }, (error, deletedData) => {
    response.json(deletedData);
  });
};

//========================================== Controller Exports:
module.exports = {
  getPaints,
  addPaints,
  deletePaints,
};
