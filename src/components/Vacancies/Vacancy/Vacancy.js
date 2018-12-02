import React, { Component } from 'react';
import "./Vacancy.css";
import moment from 'moment'
import { formatSalary } from '../../../utils/functions'
const Vacancy = ({ id,  position, company, city, published, requirement, getVacancyId, vacancyId, salary }) => {
    const style = `vacancy ${vacancyId === id ? 'vacancy--active' : ''}`

    return (
      <div className={style} onClick = {()=>getVacancyId(id)}>
          <b>{position}</b>
          <p>{company}</p>
          <p>{formatSalary(salary)}</p>
          <p>{city}</p>
          <p>Дата публикации: {moment(published).format('MM-DD-YY HH:mm')}</p>
   
      </div>
    );

}

export default Vacancy;
