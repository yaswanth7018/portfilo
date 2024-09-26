// PortfolioForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PortfolioForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form submitted with:', { title, description }); // Check form data

    try {
      const data = { title, description }; // Structure the data to send
      const response = await axios.post('http://localhost:5000/api/portfolio', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data); // Log the response
      setSuccessMessage('Portfolio created successfully!'); // Success message
      setTitle(''); // Reset title
      setDescription(''); // Reset description
    } catch (error) {
      console.error('Error creating portfolio:', error);
      setErrorMessage('Error creating portfolio. Please try again.'); // Error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Submit Portfolio</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Show error */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Show success */}
    </div>
  );
};

export default PortfolioForm;
