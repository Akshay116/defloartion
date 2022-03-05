import React from 'react';
import "./assets/info.css";

const Info = () => {
    return (
      <div className="info-container" style={{ backgroundColor: "black" }}>
        <div className="info-top"></div>
        <div>
          <h2 className="head" style={{ color: "white" }}>
            Become a defloration
          </h2>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            eaque ea exercitationem rerum est fuga quo fugiat quaerat id?
            Asperiores voluptatibus unde eaque sint delectus, aut reiciendis
            cumque veritatis neque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quae praesentium quidem obcaecati sint in illo, neque voluptate ipsam dicta, error sed porro nesciunt impedit facilis dolore perspiciatis repellendus alias.
          </p>
          <div className="btn-burnshedule">
            <button className='btnclr'>Burn shedule</button>
          </div>
        </div>
      </div>
    );
}

export default Info;
