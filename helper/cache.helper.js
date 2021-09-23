"use strict";

class Cache {
  constructor() {
    this.museum = [];
    this.paintings = [];
    this.timeStamp = Date.now();
  }
}

module.exports = Cache;
