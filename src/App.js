import React, { Component } from "react";
import Vacancies from "./components/Vacancies/Vacancies";
import Filters from "./components/Filters/Filters";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import "./App.css";

class App extends Component {
	state = {
		vacancies: {}
	};
	componentDidMount() {
		fetch("https://api.hh.ru/vacancies").then(response => {
			response.json().then(data => {
				console.log(data);
				this.setState({
					vacancies: data
				});
			});
		});
	}
	render() {
		const { vacancies } = this.state;

		return (
			<div className="App">
				{vacancies.length == 0 ? <h1>Загрузка вакансий</h1> : <Vacancies vacancies={vacancies} />}
				
				<Filters />
				<DetailedInfo />
			</div>
		);
	}
}

export default App;
