import React, { Component } from "react";
import Vacancies from "./components/Vacancies/Vacancies";
import Filters from "./components/Filters/Filters";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import "./App.css";

class App extends Component {
	state = {
		vacancies: [],
		loading: false,
		town: '',
		keyWord: '',
		salary:'',
		areas: []
	};
	getVacancies = () => {
		console.log(this.state.keyWord)
		const baseUrl = 'https://api.hh.ru/vacancies';
		//const areaURL = this.state.town ? `?area=${this.state.town}` : ''
		const keyWordUrl = this.state.keyWord !== '' ? `?text=${this.state.keyWord}` : ''
		//const experienceUrl = this.state.keyWord !== '' ? `?salary=${this.state.salary}` : ''
		fetch(baseUrl + keyWordUrl).then(response => {
			response.json().then(data => {
				this.setState({
					vacancies: data.items,
					loading: false,

				});
			});
		});
	}
	findTownId = () => {
		console.log("l")
	} 
	getAreas = () => {
		fetch('https://api.hh.ru/areas')
			.then(response => response.json())
			.then(response =>  this.setState({areas: response}))

	}
	componentDidMount() {
		this.setState({
			loading: true
		})
		console.log(this.state.areas)
		this.getVacancies()
		
	}

	onTownSearch = e => {
		if(e.key === 'Enter'){
			this.setState({
				town: e.target.value
			}, this.getAreas)


		};
			
	}
	onKeySearch = e => this.setState({keyWord: e.target.value}, this.getVacancies)
	onExperienceSearch = e => this.setState({experience: e.target.value}, this.getVacancies)

	render() {
		const { vacancies, loading } = this.state;
		console.log(this.state.areas)
		return (
			<div className="App">
				{loading ? <h1>Загрузка вакансий</h1> 
						 : <Vacancies vacancies={vacancies} />
				}
				<Filters onTownSearch={this.onTownSearch} onKeySearch={this.onKeySearch} onExperienceSearch={this.onSalarySearch}/>
				<DetailedInfo />
			</div>
		);
	}
}

export default App;
