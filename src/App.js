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

    const currencies = [
      {
        value: 65.86,
				mark: "$",
        name: "usd"
      },
      {
        value: 74.33,
				mark: "€",
        name: "eur"
      },
      {
        value: 1,
				mark: "₽",
        name: "rub"
      }
    ]

    currencies.forEach(item => {
      if(item.name === currency) this.setState({ currency: { name: item.mark, value: item.value} })
    })
	}

  render() {
    const { isLoading, error } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ?
          (<div className="App">
    				<div className="container">
              <div className="App__icon mx-auto"></div>
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
