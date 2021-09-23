"use strict";

const axios = require("axios");
require("dotenv").config();
const Cache = require("../helper/cache.helper");
let cacheObject = new Cache();
const { paintingsModel, Paintings } = require("../models/paintings.model");

// const museumData = require("../data/mus.json");

const getPainting = async (request, response) => {
  const museumName = request.query.id;


  const shutTime = 30000000;
  const time = (Date.now() - cacheObject.timeStamp) > shutTime;
  if (time) {
   
    cacheObject = new Cache();
  }
  const findData = cacheObject.paintings.find(
    (mus) => mus.museumName === id
  );
  if (findData) {
    response.json(findData.data);
  } else {

  await axios
    .get("https://api-server-museum.herokuapp.com")
    .then((museumData) => {
      

      if (museumName) {
        const museumArr = museumData.data.filter((item) => {
          return item.id.toLowerCase() === museumName.toLowerCase();
        });
        // console.log(museumArr);
        let arr1 = museumArr.map((paint) => {
          return new Paintings(
            paint.name,
            paint.title,
            paint.artist_display,
            paint.image_id,
            paint.id
          );
        });
        console.log("Museum", arr1);
        response.json(arr1);
      } else {
        response.json(museumData.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}} ;

module.exports = {
  getPainting,
};
