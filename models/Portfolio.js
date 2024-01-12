const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  // Define your schema fields here
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
