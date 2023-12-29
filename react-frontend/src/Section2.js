// Section2.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Section2.css';
//Section 2 Contains a text container, a gradient text, and an additional button
const Section2 = () => {
  return (
    <div className="additional-text">
      <div className="text-container">
        <p className="first-text">Considering a Job Change? Unsure If Better Awaits?</p>
        <p className="gradient-text">Smart Career Benchmark</p>
        <p className="second-text">Compare, Analyze, and Intelligent Guidance for Success</p>
      </div>
      <Link to="/smart-benchmark">
        <button className="smart-career-benchmark">Smart Career Benchmark</button>
      </Link>
      <p className="additional-info">
        An insightful and private tool that quickly assesses your career standing through 16 targeted
        questions, offering comparative insights with peers and personalized strategies for growth,
        ideal for those at career crossroads.
      </p>
    </div>
  );
};

export default Section2;
