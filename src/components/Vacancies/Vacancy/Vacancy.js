import React, { Component } from 'react';
import "./Vacancy.css";

const Vacancy = ({ position, company, city, published }) => {
    return (
      <div className="vacancy">
          <b>{position}</b>
          <p>{company}</p>
          <p>{city}</p>
          <p>{published}</p>
   
      </div>
    );

}

export default Vacancy;
