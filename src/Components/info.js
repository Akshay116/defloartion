import React from 'react';

const Info = () => {
    return (
      <div className="info-container" style={{backgroundColor:"black"}}>
        <div className="info-top"></div>
        <div>
          <h2 style={{color:"white"}}>Become a defloration</h2>
          <p style={{color:"white"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eaque ea exercitationem rerum est fuga quo fugiat quaerat id?
            Asperiores voluptatibus unde eaque sint delectus, aut reiciendis
            cumque veritatis neque.
          </p>
          <button>Burn shedule</button>
        </div>
        <div className='info-bottom'>
            <button>connect wallet</button>
        </div>
      </div>
    );
}

export default Info;
