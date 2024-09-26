import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PortfolioView = () => {
    const [portfolio, setPortfolio] = useState(null);
    const [error, setError] = useState('');

    const fetchPortfolio = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/portfolio', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setPortfolio(response.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : 'Failed to fetch portfolio');
        }
    };

    useEffect(() => {
        fetchPortfolio();
    }, []);

    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!portfolio) return <p>Loading...</p>;

    return (
        <div>
            <h2>Your Portfolio</h2>
            <h3>Projects</h3>
            <ul>
                {portfolio.projects.map((project, index) => (
                    <li key={index}>{project.title}: {project.description}</li>
                ))}
            </ul>
            <h3>Skills</h3>
            <p>{portfolio.skills.join(', ')}</p>
            <h3>Certificates</h3>
            <p>{portfolio.certificates.join(', ')}</p>
        </div>
    );
};

export default PortfolioView;
