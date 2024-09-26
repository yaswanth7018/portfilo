// controllers/portfolioController.js
const Portfolio = require('../models/portfolios'); // Assuming you have a Portfolio model

// Update portfolio
const updatePortfolio = async (req, res) => {
    try {
        const { userId, portfolioData } = req.body; // Adjust based on your data structure
        const portfolio = await Portfolio.findOneAndUpdate({ userId }, portfolioData, { new: true });
        res.json(portfolio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// View portfolio
const viewPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.findOne({ userId: req.user.id }); // Assuming user ID is attached to req.user
        res.json(portfolio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    updatePortfolio,
    viewPortfolio
};
