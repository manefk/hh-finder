import React, { Component } from "react";
import Vacancies from "./components/Vacancies/Vacancies";
import Filters from "./components/Filters/Filters";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import "./App.css";

class App extends Component {
	state = {
		vacancies: [],
		loading: false
	};
	componentDidMount() {
		this.setState({
			loading: true
		})
		fetch("https://api.hh.ru/vacancies").then(response => {
			response.json().then(data => {
				console.log(data);
				this.setState({
					vacancies: data,
					loading: false
				});
			});
		});
	}
	render() {
		const { vacancies, loading } = this.state;

		return (
			<div className="App">
				{loading ? <h1>Загрузка вакансий</h1> 
						 : <Vacancies vacancies={vacancies} />
				}
				<Filters />
				<DetailedInfo />
			</div>
		);
	}
}

export default App;
