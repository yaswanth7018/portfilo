const express = require('express');
const router = express.Router();
const Portfolio = require('../models/portfolio'); // Make sure to import the Portfolio model
const authMiddleware = require('../middleware/auth'); // Ensure you have an auth middleware for token verification

// Create or update portfolio route
router.post('/', authMiddleware, async (req, res) => {
    const { projects, skills, certificates } = req.body;

    try {
        // Check if the user already has a portfolio
        let portfolio = await Portfolio.findOne({ userId: req.user.id });

        if (portfolio) {
            // Update existing portfolio
            portfolio.projects = projects;
            portfolio.skills = skills;
            portfolio.certificates = certificates;
            await portfolio.save();
        } else {
            // Create a new portfolio
            portfolio = new Portfolio({
                userId: req.user.id,
                projects,
                skills,
                certificates
            });
            await portfolio.save();
        }

        res.status(200).json({ message: 'Portfolio saved successfully', portfolio });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
