import React, { Component } from 'react';

import './Filters.css';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
      	<input className="filter-town"
      		   type="search"
      		   placeholder="поиск по городу"
      		   onKeyPress = {this.props.onTownSearch}
      		   />
      	<input className="filter-keys"
      		   type="search"
      		   placeholder="поиск по ключевым словам"
      		   onChange = {this.props.onKeySearch}
      		   />
      	<input className="filter-salary"
      		   type="search"
      		   placeholder="поиск по зарплате"
      		   onChange = {this.props.onExperienceSearch}
      		   />
        
      </div>
    );
  }
}

export default Filters;
