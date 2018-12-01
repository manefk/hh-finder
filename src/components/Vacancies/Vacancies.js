import React, { Component } from 'react';
import "./Vacancies.css";
import Vacancy from "./Vacancy/Vacancy"

class Vacancies extends Component {
  render() {
  	const { vacancies } = this.props
 	return (
      <div className="vacancies">
      	{
      		 vacancies.map(vac => {
      			return (
      				<Vacancy
      					key={vac.id}
      					position={vac.name}
      					company = {vac.employer.name}
      					city = {vac.area.name}
      					published = {vac.published_at}
      					requirement = {vac.snippet.requirement}
      			    getVacancyId = {this.props.getVacancyId}
      					id={vac.id}
      				/>
      			)
      		})
      	}
      </div>
    );
  }
}

export default Vacancies;
