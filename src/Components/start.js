import React from 'react';
import Navbar from './navbar';
import './assets/start.css';

const Start = () => {
    return (
      <div className="starter" style={{ backgroundColor: "red" }}>
        <Navbar />
        <div className="starter-content">
          <h1 style={{ color: "White" }}>DEfaltory</h1>
          <p>logo moto tagline contetent can be taken here from props</p>
        </div>
      </div>
    );
}

export default Start;
