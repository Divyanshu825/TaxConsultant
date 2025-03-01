import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';

const App = () => {

  return (
    <div>
      <Router>
        <Navbar />

        {/* <Routes>
          <Route path="" element={<Home />} />
        </Routes> */}

        <button
          style={{
            position: 'fixed',
            bottom: 10,
            right: 10,
            backgroundColor: '#4277a8',
            border: 'none',
            boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
            borderRadius: 30,
            padding: 12,
            color: 'white',
          }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}>
          +
          {/* <ArrowUpwardIcon /> */}
        </button>
      </Router>
    </div >
  );
};



export default App;
