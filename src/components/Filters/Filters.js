import React, { Component } from 'react';

import './Filters.css';

const Filters = ({ onInputSearch, onInputChange, salary, keyWord, town }) => {
  
    return (
      <div className="filters">
      	<input className="filter"
             value = {town}
      		   type="search"
      		   placeholder="город"
             onChange = {e => onInputChange(e, "town")}
      		   onKeyPress = {e => onInputSearch(e, "town")}
      		   />
      	<input className="filter"
             value = {keyWord}
      		   type="search"
      		   placeholder="ключевые слова"
             onChange = {e => onInputChange(e, "keyWord")}
      		   onKeyPress = {e => onInputSearch(e, "keyWord")}
      		   />
      	<input className="filter"
             value = {salary}
      		   type="number"
      		   placeholder="зарплата"
             onChange = {e => onInputChange(e, "salary")}
      		   onKeyPress = {e => onInputSearch(e, "salary")}
      		   />
        
      </div>
    );
  
}

export default Filters;
