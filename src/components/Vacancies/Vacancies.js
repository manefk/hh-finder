import React, { Component } from 'react';
import "./Vacancies.css";
import Vacancy from "./Vacancy/Vacancy"

class Vacancies extends Component {
  render() {
  	const { vacancies } = this.props
 	return (
      <div>
      	{
      		vacancies.items && vacancies.items.map((vac, i) => {
      			return (
      				<Vacancy
      					key={i}
      					position={vac.name}
      					company = {vac.employer.name}
      					city = {vac.area.name}
      					published = {vac.published_at}
      				/>
      			)
      		})
      	}
      </div>
    );
  }
}

export default Vacancies;
