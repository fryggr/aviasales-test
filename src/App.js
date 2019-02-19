import React, { Component } from 'react';
import Filters from './components/Filters'
import FlightSearch from './components/FlightSearch'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
				<div className="container">
					<div className="row">
						<Filters />
            <FlightSearch />
					</div>
				</div>
      </div>
    );
  }
}

export default App;
