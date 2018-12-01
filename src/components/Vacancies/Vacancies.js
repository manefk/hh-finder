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
                vacancyId = {vacancyId}
      					position={vac.name}
      					company = {vac.employer.name}
      					city = {vac.area.name}
      					published = {vac.published_at}
      					requirement = {vac.snippet.requirement}
      			    getVacancyId = {getVacancyId}
      				/>
      			)
      		})
      	}
      </div>
    );
  }
}

export default Vacancies;
