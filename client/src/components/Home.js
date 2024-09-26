import React from 'react';
import './Home.css'; // Ensure you have a corresponding CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Showcasing my projects, skills, and experiences.</p>
      </header>
      <section className="home-introduction">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate developer with a love for creating interactive and dynamic web applications.
          My goal is to build user-friendly interfaces and deliver smooth experiences.
        </p>
        <button className="btn-learn-more">Learn More</button>
      </section>
      <section className="home-links">
        <h2>Explore</h2>
        <ul>
          <li>
            <a href="/Login" className="link-project">
              Project 1
            </a>
          </li>
          <li>
            <a href="/Register" className="link-project">
              Project 2
            </a>
          </li>
          <li>
            <a href="" className="link-project">
              Project 3
            </a>
          </li>
        </ul>
      </section>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;