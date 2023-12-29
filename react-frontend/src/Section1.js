// Section1.js
import React from 'react';
import { Link } from 'react-router-dom';
// Section 1 Contains an image and a button that links to the Smart Benchmark page
const Section1 = () => {
  return (
    <div id="section1" className="image-container">
      <div className="text-overlay">
        <h1>Your New <span className="gradient-text">Copilot</span></h1>
        <p style={{ marginTop: '50px' }}>
          Constantly Accessible, Completely Anonymous, Contextually Aware
        </p>
        {/* Smart Career Benchmark button */}
        <Link to="/smart-benchmark">
          <button>Smart Career Benchmark</button>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
