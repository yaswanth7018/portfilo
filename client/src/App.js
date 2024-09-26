import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import PortfolioForm from './components/PortfolioForm';
import PortfolioView from './components/PortfolioView';


const App = () => {
  console.log('App component rendered');
  return (
// Existing Router in App.js
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/portfolioform" element={<PortfolioForm />} />
                <Route path="/portfolioview" element={<PortfolioView />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
</Router>

  
  );
};

export default App;
