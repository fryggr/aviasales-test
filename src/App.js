import React, { Component } from 'react';
import Filters from './components/Filters'
import FlightSearch from './components/FlightSearch'
import './App.scss'

class App extends Component {

  state = {
    tickets: [],
    isLoading: true,
    error: null,
		currency: {
			name: "₽",
			value: 1
		}
  }

  componentDidMount() {
    this.loadTickets()
  }

  loadTickets(){
    fetch(`/search`)
      .then(response => response.json())
      .then(res => {
        this.initialTickets = res.tickets;
        this.setState({
          tickets: this.initialTickets,
          isLoading: false
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

	getTickets = tickets => {
		this.setState({tickets: tickets})
	}

	getCurrency = currency => {

    const usd = 65.86;
		const eur = 74.33;
		let name = "₽";
		let value = 1;

		switch (currency) {
			case "usd":
				value = usd;
				name = "$"
				break;
			case "eur":
				value = eur;
				name = "€"
				break;
			case "rub":
				value = 1;
				name = "₽";
		}

		this.setState({ currency: { name: name, value: value} })
	}

  render() {
    const { isLoading, error } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ?
          (<div className="App">
    				<div className="container">
    					<div className="row">
    						<Filters tickets={this.initialTickets} getTickets={this.getTickets} getCurrency={this.getCurrency}/>
                <FlightSearch tickets={this.state.tickets} currency={this.state.currency}/>
    					</div>
    				</div>
          </div>) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )
        }
      </React.Fragment>
    )
  }
}

export default App;
