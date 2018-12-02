import React, { Component } from "react";
import Vacancies from "./components/Vacancies/Vacancies";
import Filters from "./components/Filters/Filters";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import { findTownId } from "./utils/functions"
import "./App.css";

class App extends Component {
	state = {
		vacancies: [],
		loading: false,
		vacancyInfo: {},
		town: '',
		keyWord: '',
		salary:'',
		vacancyId: '',
		areas:[],
		townId:''
	};

	
	getVacancies = () => {
		const baseUrl = 'https://api.hh.ru/vacancies?';		 
		const areaUrl = this.state.townId ? `area=${this.state.townId}&` : ''
		const keyWordUrl = this.state.keyWord  ? `text=${this.state.keyWord}&` : ''
		const salaryUrl = this.state.salary ? `salary=${this.state.salary}&currency=RUR` : ''
		this.setState({loading: true})
		fetch(baseUrl + areaUrl + keyWordUrl + salaryUrl).then(response => {
			response.json().then(data => {
		
				this.setState({
					vacancies: data.items,
					loading: false,
					vacancyId: ''

				});
			});
		});
	}
	getVacancyId = id => this.setState({vacancyId: id})

	
	onInputChange = (e, field) => {
		this.setState({[field]: e.target.value})
		if (field === 'town') {
			this.setState({townId: findTownId(this.state.areas, e.target.value)})
		}
	}


	getAreas = () => {
		fetch('https://api.hh.ru/areas')
			.then(response => response.json())
			.then(response => this.setState({areas: response}))
	}

	onInputSearch = (e, field) => {
		if (e.key === 'Enter') {
			this.getVacancies()
		}
	}

	componentDidMount() {
		this.setState({loading: true})
		this.getVacancies()
		this.getAreas()
	}

	render() {
		const { vacancies, loading, vacancyInfo, vacancyId, town, keyWord, salary } = this.state;
	
		return (
			<div className="App">
				<Filters onInputSearch={this.onInputSearch} 
						 onInputChange={this.onInputChange} 
						 town={town} keyWord={keyWord} 
						 salary={salary} />

				{loading ? <h1>Поиск вакансий</h1> 
						 : <React.Fragment>
						 		<Vacancies vacancies={vacancies} getVacancyId = {this.getVacancyId} vacancyId = {vacancyId} />
						 		{this.state.vacancyId ? <DetailedInfo vacancyInfo={vacancies.filter(vac => vac.id === vacancyId)[0]} />
						 							  : null
						 		}
						 	</React.Fragment>
				}
				
			</div>
		);
	}
}

export default App;
