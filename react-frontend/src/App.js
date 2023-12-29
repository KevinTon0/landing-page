import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Resume from './Resume';
import Images from './Images';
//Used to display Stock Photo behindn everything
const Home = () => (
  <div>
    <Images />
  </div>
);
//Adding Navigation tools
const SmartBenchmark = () => (
  <div>
    <h2>Smart Benchmark Page</h2>
  </div>
);

const AugmentedMentorship = () => (
  <div>
    <h2>Augmented Mentorship Page</h2>
  </div>
);

const EnterpriseSolution = () => (
  <div>
    <h2>Enterprise Solution Page</h2>
  </div>
);

const Contact = ({ isContactPage }) => (
  <div>
    {isContactPage && <Resume />}
  </div>
);
//Main
const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
//Error logging 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
  
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
  
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response is not in JSON format');
        }
  
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
  
    fetchData();
  }, []);
//Main Code for Routers and Links to different parts of the site
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="navbar-title">CopilotCareer</div>

          <div className="navbar-links">
            <Link to="/" onClick={() => setCurrentPage('Home')}>
              Home
            </Link>
            <Link to="/smart-benchmark" onClick={() => setCurrentPage('SmartBenchmark')}>
              Smart Benchmark
            </Link>
            <Link to="/augmented-mentorship" onClick={() => setCurrentPage('AugmentedMentorship')}>
              Augmented Mentorship
            </Link>
            <Link to="/enterprise-solution" onClick={() => setCurrentPage('EnterpriseSolution')}>
              Enterprise Solution
            </Link>
            <Link to="/contact" onClick={() => setCurrentPage('Contact')}>
              Contact
            </Link>
          </div>

          <div className="navbar-login">
            <button>Log in</button>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/smart-benchmark"
            element={<SmartBenchmark />}
          />
          <Route
            path="/augmented-mentorship"
            element={<AugmentedMentorship />}
          />
          <Route
            path="/enterprise-solution"
            element={<EnterpriseSolution />}
          />
          <Route
            path="/contact"
            element={<Contact isContactPage={currentPage === 'Contact'} />}
          />
          <Route 
            path="/image"
            element={<Images />} 
          />
          {/* Redirect to Home if an invalid route is provided */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {(currentPage !== 'Contact') && (
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                {item.name}: {item.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Router>
  );
};

export default App;
