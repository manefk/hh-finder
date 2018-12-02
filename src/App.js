import React, { Component } from "react";
import Vacancies from "./components/Vacancies/Vacancies";
import Filters from "./components/Filters/Filters";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import Moment from 'moment'
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
		townId:''
	};

	
	getVacancies = () => {
		const baseUrl = 'https://api.hh.ru/vacancies';
		if (this.state.townId) {
			const keyWordUrl = this.state.keyWord ? `$text=${this.state.keyWord}` : ''
		} else {
			const keyWordUrl = this.state.keyWord ? `?text=${this.state.keyWord}` : ''
		}
		const areaUrl = this.state.townId ? `?area=${this.state.townId}` : ''
		const keyWordUrl = this.state.keyWord ? `?text=${this.state.keyWord}` : ''
		const salaryUrl = this.state.salary ? `?salary=${this.state.salary}&currency=RUR` : ''
		this.setState({loading: true})
		console.log(this.state.town)
		fetch(baseUrl).then(response => {
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

	
	getAreas = townName => {
		fetch('https://api.hh.ru/areas')
			.then(response => response.json())
			.then(response =>  response[0].areas.forEach(region => {
				region.areas.forEach(town => {
					if(townName === town.name) {
						this.setState({townId: town.id})

					}
				})
			})).then(this.getVacancies);
		}
	componentDidMount() {
		this.setState({loading: true})
		this.getVacancies()
	}

	onTownSearch = e => {
		if(e.key === 'Enter'){
			this.setState({
				town: e.target.value
			}, () => this.getAreas(this.state.town))
		};
			
	}
	onSalarySearch = e => {
		if(e.key === 'Enter') {
			this.setState({salary: e.target.value}, this.getVacancies)
		}
	}

	onKeySearch = e => this.setState({keyWord: e.target.value}, this.getVacancies)



	render() {
		const { vacancies, loading, vacancyInfo, vacancyId } = this.state;
	
		return (
			<div className="App">
				<Filters onTownSearch={this.onTownSearch} onKeySearch={this.onKeySearch} onSalarySearch={this.onSalarySearch} />
				{loading ? <h1>Загрузка вакансий</h1> 
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
