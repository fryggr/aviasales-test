import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
				<div className="container">
					<div className="row">
						<div className="col-3 Filters">
							<div className="Filters__currency">
								<h3 class></h3>
							</div>
						</div>
						<div className="col-9 Tickets">
							<div className="Tickets__item"></div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
