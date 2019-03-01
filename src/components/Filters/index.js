import React, { Component } from 'react';
import './index.scss'
import Checkbox from '../Checkbox'

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
    },
		currency: "rub"
  }

  componentDidMount() {
    this.filterTickets()
  }

  handleInputChange = number => event => {
    number !== null ? this.transferOnly(number) : this.handleFilters(event)
  }

  handleFilters(event) {
    const target = event.target;
    const value = target.checked;
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

    const filterTickets =
      tickets.filter(ticket =>
        ticket.stops === withoutTransfer.value ||
        ticket.stops === transfer1.value ||
        ticket.stops === transfer2.value ||
        ticket.stops === transfer3.value)

		getTickets(filterTickets)
  }

  changeCurrency = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    }, ()=> this.props.getCurrency(this.state.currency));
  }

  transferOnly(number) {
    Object.entries(this.state).map(([name, value]) => {

      if (value.value === number && value.bool === true) {
        this.setState({
          [name]: { value: number, bool: true}
        }, () => this.filterTickets())
      }
      else if (name !== "currency") {
        this.setState({
          [name]: { value: null, bool: false}
        }, () => this.filterTickets())
      }
    })
  }

  render() {
    return (
      <div className="col-lg-3 col-xl-3 col-md-12 col-sm-12 col-12 mb-4 Filters">
        <div className="Currency">
          <h3 className="Filters__title">ВАЛЮТА</h3>
          <div className="Currency__radio">
            <input
              type="radio"
              className="Currency__input"
              name="currency"
              value="rub"
              id="rub"
              defaultChecked
              onChange={this.changeCurrency} />
            <label htmlFor="rub" className="Currency__label Currency__label_rub">rub</label>
            <input
              type="radio"
              className="Currency__input"
              name="currency"
              value="usd"
              id="usd"
              onChange={this.changeCurrency} />
            <label htmlFor="usd" className="Currency__label Currency__label_usd">usd</label>
            <input
              type="radio"
              className="Currency__input"
              name="currency"
              value="eur"
              id="eur"
              onChange={this.changeCurrency} />
            <label htmlFor="eur" className="Currency__label Currency__label_eur">eur</label>
          </div>
        </div>
        <div className="Transfer">
          <h3 className="Filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
          <div className="Transfer__check">
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="all"
              id="allTransfers"
              checked={this.state.allTransfers.bool}
              onChange={this.handleInputChange(null)}>
              Все
            </Checkbox>
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="0"
              id="withoutTransfer"
              checked={this.state.withoutTransfer.bool}
              onChange={this.handleInputChange(null)}
              onClickOnly={this.handleInputChange(0)}>
              Без пересадок
            </Checkbox>
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="1"
              id="transfer1"
              checked={this.state.transfer1.bool}
              onChange={this.handleInputChange(null)}
              onClickOnly={this.handleInputChange(1)}>
              1 пересадка
            </Checkbox>
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="2"
              id="transfer2"
              checked={this.state.transfer2.bool}
              onChange={this.handleInputChange(null)}
              onClickOnly={this.handleInputChange(2)}>
              2 пересадки
            </Checkbox>
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="3"
              id="transfer3"
              checked={this.state.transfer3.bool}
              onChange={this.handleInputChange(null)}
              onClickOnly={this.handleInputChange(3)}>
              3 пересадки
            </Checkbox>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
