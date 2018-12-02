import React, { Component } from 'react';
import moment from 'moment'
import { formatSalary } from '../../utils/functions'
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
	const salary = vacancyInfo ? "Зарплата: " + formatSalary(vacancyInfo.salary) : ''
	const company = vacancyInfo && vacancyInfo.employer.name
	const requirement = vacancyInfo && vacancyInfo.snippet.requirement && "Требования: " + vacancyInfo.snippet.requirement
	const responsibility = vacancyInfo && vacancyInfo.snippet.responsibility && "Обязанности: " + vacancyInfo.snippet.responsibility
	const published = vacancyInfo && "Дата публикации: " + moment(vacancyInfo.published_at).format('MM-DD-YY HH:mm')

    return (
      <div className="detailed-info">
      	<div className="detailed-info__content">
	     	<b>{position}</b>
	     	<p>{company}</p>
	     	<p>{salary}</p>
	     	<p>{requirement}</p>
	     	<p>{responsibility}</p>
	     	<p>{published}</p>
	     	
     	</div>

  	  </div>
    );
  
}

export default DetailedInfo;
