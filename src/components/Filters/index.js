import React, { Component } from 'react';
import './index.scss'

class Filters extends Component {

  state = {
    allTransfers: false,
    withoutTransfer: true,
    transfer1: true,
    transfer2: true,
    transfer3: false
  }

  handleInputChange = (event) => {
    const { tickets } = this.props
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    this.setState({
      [name]: value
    });

    const withoutTransfer = this.state.withoutTransfer ? 0 : null
    const transfer1 = this.state.transfer1 ? 1 : null
    const transfer2 = this.state.transfer2 ? 2 : null
    const transfer3 = this.state.transfer3 ? 3 : null

    const filter =
      tickets.filter(ticket => ticket.stops === withoutTransfer || ticket.stops === transfer1 || ticket.stops === transfer2 || ticket.stops === transfer3)
    console.log(filter);
  }

  render() {
    return (
      <div className="col-3 Filters">
        <div className="Currency">
          <h3 className="Filters__title">ВАЛЮТА</h3>
          <div className="Currency__radio">
            <input
              type="radio"
              className="Currency__input"
              name="currency"
              value="rub"
              id="rub"
              checked />
            <label htmlFor="rub">rub</label>
            <input
              type="radio"
              className="Currency__input"
              name="currency"
              value="usd"
              id="usd" />
            <label htmlFor="usd">usd</label>
            <input
              type="radio"
              className="Currency__input"
              name="currency"
              value="eur"
              id="eur" />
            <label htmlFor="eur">eur</label>
          </div>
        </div>
        <div className="Transfer">
          <h3 className="Filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
          <div className="Transfer__check">
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="all"
              id="allTransfers"
              checked={this.state.allTransfers}
              onChange={this.handleInputChange} />
            <label htmlFor="allTransfers">Все</label>
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="0"
              id="withoutTransfer"
              checked={this.state.withoutTransfer}
              onChange={this.handleInputChange}
               />
            <label htmlFor="withoutTransfer">Без пересадок</label>
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="1"
              id="transfer1"
              checked={this.state.transfer1}
              onChange={this.handleInputChange}
               />
            <label htmlFor="transfer1">1 пересадка</label>
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="2"
              id="transfer2"
              checked={this.state.transfer2}
              onChange={this.handleInputChange}
               />
             <label htmlFor="transfer2">2 пересадки</label>
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="3"
              id="transfer3"
              checked={this.state.transfer3}
              onChange={this.handleInputChange} />
            <label htmlFor="transfer3">3 пересадки</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
