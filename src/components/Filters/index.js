import React, { Component } from 'react';
import './index.scss'

class Filters extends Component {

  state = {
    allTransfers: {
      value: null,
      bool: false
    },
    withoutTransfer: {
      value: null,
      bool: false
    },
    transfer1: {
      value: 1,
      bool: true
    },
    transfer2: {
      value: 2,
      bool: true
    },
    transfer3: {
      value: null,
      bool: false
    }
  }

  componentDidMount() {
    this.filterTickets()
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    let check = {
      value: "",
      bool: ""
    }

    if(value) {
      check.value = +target.value;
      check.bool = true
    } else {
      check.value = null;
      check.bool = false
    }

    if(this.state.allTransfers.bool && !value) {
      this.setState({ allTransfers: { value: null, bool: false } })
    }

    if(name === "allTransfers" && value) {
      this.setState({
        withoutTransfer: { value: 0, bool: true},
        allTransfers: { value: "all", bool: true },
        transfer1: { value: 1, bool: true},
        transfer2: { value: 2, bool: true},
        transfer3: { value: 3, bool: true}
      }, () => this.filterTickets())
    }
    else {
      this.setState({
        [name]: check
      }, () => this.filterTickets());
    }
  }

  filterTickets = () => {
    const { tickets, getTickets } = this.props
    let { withoutTransfer, transfer1, transfer2, transfer3 } = this.state

    const filterTickets = tickets.filter(ticket => ticket.stops === withoutTransfer.value || ticket.stops === transfer1.value || ticket.stops === transfer2.value || ticket.stops === transfer3.value)

		getTickets(filterTickets)
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
              checked={this.state.allTransfers.bool}
              onChange={this.handleInputChange} />
            <label htmlFor="allTransfers">Все</label>
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="0"
              id="withoutTransfer"
              checked={this.state.withoutTransfer.bool}
              onChange={this.handleInputChange}
               />
            <label htmlFor="withoutTransfer">Без пересадок</label>
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="1"
              id="transfer1"
              checked={this.state.transfer1.bool}
              onChange={this.handleInputChange}
               />
            <label htmlFor="transfer1">1 пересадка</label>
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="2"
              id="transfer2"
              checked={this.state.transfer2.bool}
              onChange={this.handleInputChange}
               />
             <label htmlFor="transfer2">2 пересадки</label>
            <input
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="3"
              id="transfer3"
              checked={this.state.transfer3.bool}
              onChange={this.handleInputChange} />
            <label htmlFor="transfer3">3 пересадки</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
