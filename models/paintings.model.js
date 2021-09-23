"use strict";
const mongoose = require("mongoose");

const paintingsSchema = new mongoose.Schema({
  title: { type: String },
  location: { type: String },
  art_image1: { type: String },
  description_image1: { type: String },
  art_image2: { type: String },
  description_image2: { type: String },
  art_image3: { type: String },
  description_image3: { type: String },
  art_image4: { type: String },
  description_image4: { type: String },
  art_image5: { type: String },
  description_image5: { type: String },
});

class Paintings {
  constructor(
    name,
    title,
    artist_display,
    image_id,
    id
   
  ) {
    this.name = name;
    this.title = title;
    this.artist_display = artist_display;
    this.image_id = image_id;
    this.id=id
    
  }
}

const paintingsModel = mongoose.model("myPaintings", paintingsSchema);

module.exports = {
  paintingsModel,
  Paintings,
};
