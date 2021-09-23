const getIndex = (request, response) => {
  response.send(
    "Welcome to Liza Art Museum, you can see an amazing paints from different museums and we offers an events to visit these museums."
  );
};

module.exports = getIndex;
