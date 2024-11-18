import React from 'react';
// import Navbar from '../Navbar/Navbar'
// import { Link } from 'react-router-dom'

import './Home.css';
// import HomeImage from "../../assets/fitness-removebg-preview.png"

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar/> */}
      <div className="hero-section">
        
        <div className="hero-image">
          <img src='https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHx8MA%3D%3D' alt="Fitness" />
        </div>
        <div className="hero-text" >
          <h1>Keith General Agencies Limited</h1>
          <p>Streamlining Operations, Securing Data, Empowering Success.</p>
          <a style={{ color: 'white', backgroundColor: '#000', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
  START NOW
</a>

        </div>
      </div>
      <div className="push-forward-section">
        <h2>OUR MISSION</h2>
        <p>
        Our mission is to empower Keith General Agencies Limited with a modern, efficient, and secure HR platform that centralizes employee information, enhances communication, and supports organizational growth.
        </p>
        <div className="features">
          <div className="feature">
            <img src="https://plus.unsplash.com/premium_photo-1661284828052-ea25d6ea94cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Quality Equipment" />
            <p>Manage your work force</p>
          </div>
          <div className="feature">
            <img src="https://plus.unsplash.com/premium_photo-1682309667112-971fb0622b55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVzc2FnZXxlbnwwfHwwfHx8MA%3D%3D" alt="Communication" />
            <p>Send messages to your employees</p>
          </div>
          <div className="feature">
            <img src="https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D" alt="Data security" />
            <p>Sensitive data is safe with us</p>
          </div>
        </div>
      </div>
      <div className="stats-section1">
        <div className="stat">
          <h3>750+</h3>
          <p>Satisfied customers</p>
        </div>
        <div className="stat">
          <h3>690+</h3>
          <p>Good reviews</p>
        </div>
        <div className="stat">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Home;