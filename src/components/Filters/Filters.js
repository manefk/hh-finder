import React, { Component } from 'react';

import './Filters.css';

const Filters = ({ onTownSearch, onSalarySearch, onInputSearch }) => {
  
    return (
      <div className="filters">
      	<input className="filter"
      		   type="search"
      		   placeholder="город"
      		   onKeyPress = {e => onInputSearch(e, "town")}
      		   />
      	<input className="filter"
      		   type="search"
      		   placeholder="ключевые слова"
      		   onKeyPress = {e => onInputSearch(e, "keyWord")}
      		   />
      	<input className="filter"
      		   type="search"
      		   placeholder="зарплата"
      		   onKeyPress = {e => onInputSearch(e, "salary")}
      		   />
        
      </div>
    );
  
}

export default Filters;
