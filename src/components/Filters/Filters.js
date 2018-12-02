import React, { Component } from 'react';

import './Filters.css';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
      	<input className="filter-town"
      		   type="search"
      		   placeholder="город"
      		   onKeyPress = {this.props.onTownSearch}
      		   />
      	<input className="filter-keys"
      		   type="search"
      		   placeholder="ключевые слова"
      		   onChange = {this.props.onKeySearch}
      		   />
      	<input className="filter-salary"
      		   type="search"
      		   placeholder="зарплата"
      		   onKeyPress = {this.props.onSalarySearch}
      		   />
        
      </div>
    );
  }
}

export default Filters;
