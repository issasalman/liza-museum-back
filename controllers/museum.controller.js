"use strict";
// const CircularJSON = require('circular-json');
const axios = require("axios");
require("dotenv").config();
const Cache = require("../helper/cache.helper");
let cacheObject = new Cache();
const { museumModel, Museum } = require("../models/museum.model");


// const museumData = require("../data/mus.json");
// console.log(museumData)
const getMuseum = async (request, response) => {
  // const museumData = await axios.get('https://api-server-museum.herokuapp.com');
  const museumName = request.query.id;
  
  const shutTime = 30000000;
  const time = (Date.now() - cacheObject.timeStamp) > shutTime;
  if (time) {
   
    cacheObject = new Cache();
  }
  const findData = cacheObject.museum.find(
    (mus) => mus.museumName === id
  );
  if (findData) {
    response.json(findData.data);
  } else {


 await axios.get('https://api-server-museum.herokuapp.com').then((museumData)=>{
  
  if (museumName) {
    const museumArr = museumData.data.filter((item) => {
     
      return  item.id.toLowerCase() === museumName.toLowerCase();
        
    });
        // console.log(museumArr);
    let arr1=museumArr.map((mus) => {
     return new Museum(
      mus.name,
      mus.location,
      mus.event_description,
      mus.event_description_image,
      mus.ticket_price,
      mus.museum_image,
      mus.id,
      mus.date,
     
     
    );
  });
      console.log("Museum",arr1)
    response.json(arr1);
  } else {
    response.json(museumData.data)
  }
}).catch((error)=>{
  console.log(error);
  });
}  };

module.exports = {
  getMuseum,
};
