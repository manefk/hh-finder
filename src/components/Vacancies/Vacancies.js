import React, { Component } from 'react';
import "./Vacancies.css";
import Vacancy from "./Vacancy/Vacancy"

class Vacancies extends Component {
  render() {
  	const { vacancies, vacancyId, getVacancyId } = this.props
 	return (
      <div className="vacancies">
      	{
      		 vacancies.map(vac => {
      			return (
      				<Vacancy
      					key={vac.id}
                id={vac.id}              
                vacancyId = {vacancyId}  // айдишник вакансии в стейте, для стилизации активной вакансии
      					position={vac.name}
      					company = {vac.employer.name}
      					city = {vac.area.name}
      					published = {vac.published_at}
                salary = {vac.salary}
      					requirement = {vac.snippet.requirement}
      			    getVacancyId = {getVacancyId} // для записи в стейт айди активной вакансии
      				/>
      			)
      		})
      	}
      </div>
    );
  }
}

export default Vacancies;
