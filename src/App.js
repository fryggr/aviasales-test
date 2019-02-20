import React, { Component } from 'react';
import Filters from './components/Filters'
import FlightSearch from './components/FlightSearch'
import './App.scss'
import tickets from './tickets.json'

class App extends Component {

  state = {
    tickets: tickets.tickets
  }

	getTickets = tickets => {
		this.setState({tickets: tickets})
	}

  render() {
    return (
      <div className="App">
				<div className="container">
					<div className="row">
						<Filters tickets={tickets.tickets} getTickets={this.getTickets}/>
            <FlightSearch tickets={this.state.tickets}/>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
