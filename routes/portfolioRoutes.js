const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// POST endpoint for handling form submissions
router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate data (you may want to add more validation)
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new portfolio item
    const newPortfolioItem = new Portfolio({
      name,
      email,
      phone,
      message,
    });

    // Save the portfolio item to the database
    await newPortfolioItem.save();

    res.json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
