import React, { Component } from 'react';
import Vacancies from "./components/Vacancies/Vacancies";
import Filters from "./components/Filters/Filters";
import DetailedInfo from "./components/DetailedInfo/DetailedInfo";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Vacancies/>
        <Filters/>
        <DetailedInfo/>
      </div>
    );
  }
}

export default App;
