import React, { Component } from 'react';
import "./Vacancy.css";

const Vacancy = ({ position, company, city, published }) => {
    return (
      <div>
          {position}<br/>
          {company}<br/>
          {city}<br/>
          {published}<br/>
   
      </div>
    );

}

export default Vacancy;
