import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PortfolioForm from './PortfolioForm';
import PortfolioView from './PortfolioView';
import './portfolio.css';

const Portfolio = () => {
  return (
    <div>
      <h2>Your Portfolio</h2>
      <Routes>
        <Route path="add" element={<PortfolioForm />} />
        <Route path="view" element={<PortfolioView />} />
      </Routes>
    </div>
  );
};

export default Portfolio;
