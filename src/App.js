import React, { Component } from 'react';
import Filters from './components/Filters'
import FlightSearch from './components/FlightSearch'
import './App.scss'

class App extends Component {

  state = {
    tickets: [],
    isLoading: true,
    error: null
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

  render() {
    const { isLoading, error } = this.state;
    return (
      <React.Fragment>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ?
          (<div className="App">
    				<div className="container">
    					<div className="row">
    						<Filters tickets={this.initialTickets} getTickets={this.getTickets}/>
                <FlightSearch tickets={this.state.tickets}/>
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
