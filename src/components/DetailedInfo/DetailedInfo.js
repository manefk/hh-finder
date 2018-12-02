import React, { Component } from 'react';
import moment from 'moment'
import { formatSalary } from '../../utils/functions'
import './DetailedInfo.css';

const DetailedInfo = ({ vacancyInfo }) => {

	const position = vacancyInfo.name
	const salary = "Зарплата: " + formatSalary(vacancyInfo.salary) 
	const company = vacancyInfo.employer.name
	const requirement = vacancyInfo.snippet.requirement && "Требования: " + vacancyInfo.snippet.requirement
	const responsibility = vacancyInfo.snippet.responsibility && "Обязанности: " + vacancyInfo.snippet.responsibility
	const city = vacancyInfo.address && vacancyInfo.address.city ? vacancyInfo.address.city : ''            
	const street = vacancyInfo.address && vacancyInfo.address.street ? vacancyInfo.address.street : ''           
	const building = vacancyInfo.address && vacancyInfo.address.building ? vacancyInfo.address.building : ''
	const address = vacancyInfo.address && vacancyInfo.address.city && `Адрес: ${city},${street},${building}`  //в апи некоторые vacancyInfo.address содержат только null значения
	const published = "Дата публикации: " + moment(vacancyInfo.published_at).format('MM-DD-YY HH:mm')

    return (
      <div className="detailed-info detailed-info-content">
      	
     	<b>{position}</b>
     	<p>{company}</p>
     	<p>{salary}</p>
     	<p>{requirement}</p>
     	<p>{responsibility}</p>
     	<p>{address}</p>
     	<p>{published}</p>
	     	
     
  	  </div>
    );
  
}

export default DetailedInfo;
