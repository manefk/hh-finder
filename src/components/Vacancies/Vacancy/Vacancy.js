import React, { Component } from 'react';
import "./Vacancy.css";

const Vacancy = ({ id,  position, company, city, published, requirement, getVacancyId, vacancyId }) => {
    const style = `vacancy ${vacancyId === id ? 'vacancy--active' : ''}`
    return (
      <div className={style} onClick = {()=>getVacancyId(id)}>
          <b>{position}</b>
          <p>{company}</p>
          <p>{city}</p>
          <p>Обязанности: {requirement}</p>
          <p>Дата публикации: {published}</p>
   
      </div>
    );

}

export default Vacancy;
