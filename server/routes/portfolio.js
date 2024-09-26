// routes/portfolio.js
const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio'); // Adjust the path to your Portfolio model

// POST api/portfolio
router.post('/', async (req, res) => {
    const { title, description, projects } = req.body; // Adjust based on your form fields

    try {
        const newPortfolio = new Portfolio({
            title,
            description,
            projects,
        });

        await newPortfolio.save();
        return res.status(201).json({ message: 'Portfolio created successfully', portfolio: newPortfolio });
    } catch (error) {
        console.error(error); // Log the error to the server console
        return res.status(500).json({ message: 'Error creating portfolio. Please try again.' });
    }
});

module.exports = router;
