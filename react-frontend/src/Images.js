// Images.js
import React from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import './Images.css';
//Formatted into 3 sections for website
const Images = () => {
  return (
    <div className="page-container">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Images;
