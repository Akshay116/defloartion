import React from 'react';
import Navbar from './navbar';

const Start = () => {
    return (
      <div className="starter" style={{ backgroundColor: "red" }}>
        <Navbar />
        <div className="starter-content">
          <h1 style={{ color: "White" }}>DEfaltory</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            voluptates minus error cum. Deserunt odio asperiores sequi iure
            veniam vitae incidunt culpa ut placeat, neque dolorum nostrum aut ea
            quia.
          </p>
        </div>
      </div>
    );
}

export default Start;
