import React, { Component } from 'react';

import './DetailedInfo.css';

const DetailedInfo = ({ vacancyInfo }) => {
	
	const getSalary = () => {
		let text = ''
		if (vacancyInfo.salary) {
			const salary = vacancyInfo.salary
			const currency = vacancyInfo.salary.currency
			if (salary.from && salary.to) {
				text = `${salary.from} - ${salary.to} ${currency}`
			} else if (salary.from) {
				text = `от ${salary.from} ${currency}`
			} else {
				text = `до ${salary.to} ${currency}`
			}
		}
		else {
			text = 'не указана'
		}
		return text
	}
	
	const position = vacancyInfo && vacancyInfo.name
	const salary = vacancyInfo ? "Зарплата: " + getSalary() : ''
	const company = vacancyInfo && vacancyInfo.employer.name
	const requirement = vacancyInfo && vacancyInfo.snippet.requirement && "Требования: " + vacancyInfo.snippet.requirement
	const responsibility = vacancyInfo && "Обязанности: " + vacancyInfo.snippet.responsibility
	const published = vacancyInfo && "Дата публикации: " + vacancyInfo.published_at
    return (
      <div className="detailed-info">
     	<b>{position}</b>
     	<p>{company}</p>
     	<p>{salary}</p>
     	<p>{requirement}</p>
     	<p>{responsibility}</p>
     	<p>{published}</p>

  	  </div>
    );
  
}

export default DetailedInfo;
