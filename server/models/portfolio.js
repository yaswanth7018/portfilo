const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
    },
    projects: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    skills: {
        type: [String],
        required: true
    },
    certificates: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
