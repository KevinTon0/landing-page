// Section3.js
import React from 'react';
import './Section3.css';
// Section 3 Includes 2 Images and 1 text Container
const Section3 = () => {
  return (
    <div className="section3-container">
      <div className="section3-text-container">
        <h2 className="section3-gradient-text">Private and Efficient Self-Assessment</h2>
        <p>
          Only 16 questions provide a quick yet insightful evaluation of your Emotional Fulfillment, Intellectual Engagement, Workplace Relationships, and Engagement within your current role.
        </p>
      </div>
      <div className="section3-image-container">
        <img src={process.env.PUBLIC_URL + '/images/Assessment.jpg'} alt="Description" />
        <img src={process.env.PUBLIC_URL + '/images/ConfidentialGuidance.jpg'} alt="Description" />
      </div>
    </div>
  );
};

export default Section3;
