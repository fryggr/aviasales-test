import React, { Component } from 'react';
import './index.scss'
import Checkbox from '../Checkbox'

class Filters extends Component {

  state = {
    allTransfers: {
      value: null,
      isChecked: false
    },
    withoutTransfer: {
      value: null,
      isChecked: false
    },
    oneTransfer: {
      value: 1,
      isChecked: true
    },
    twoTransfer: {
      value: 2,
      isChecked: true
    },
    threeTransfer: {
      value: null,
      isChecked: false
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
      isChecked: ""
    }

    if(value) {
      check.value = +target.value;
      check.isChecked = true
    } else {
      check.value = null;
      check.isChecked = false
    }

    if(this.state.allTransfers.isChecked && !value) {
      this.setState({ allTransfers: { value: null, isChecked: false } })
    }

    if(name === "allTransfers" && value) {
      this.setState({
        withoutTransfer: { value: 0, isChecked: true},
        allTransfers: { value: "all", isChecked: true },
        oneTransfer: { value: 1, isChecked: true},
        twoTransfer: { value: 2, isChecked: true},
        threeTransfer: { value: 3, isChecked: true}
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
    let { withoutTransfer, oneTransfer, twoTransfer, threeTransfer } = this.state

    const filterTickets =
      tickets.filter(ticket =>
        ticket.stops === withoutTransfer.value ||
        ticket.stops === oneTransfer.value ||
        ticket.stops === twoTransfer.value ||
        ticket.stops === threeTransfer.value)

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

      if (value.value === number && value.isChecked === true) {
        this.setState({
          [name]: { value: number, isChecked: true}
        }, () => this.filterTickets())
      }
      else if (name !== "currency") {
        this.setState({
          [name]: { value: null, isChecked: false}
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
              checked={this.state.allTransfers.isChecked}
              onChange={this.handleInputChange(null)}>
              Все
            </Checkbox>
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="0"
              id="withoutTransfer"
              checked={this.state.withoutTransfer.isChecked}
              onChange={this.handleInputChange(null)}
              onClickOnly={this.handleInputChange(0)}>
              Без пересадок
            </Checkbox>
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="1"
              id="oneTransfer"
              checked={this.state.oneTransfer.isChecked}
              onChange={this.handleInputChange(null)}
              onClickOnly={this.handleInputChange(1)}>
              1 пересадка
            </Checkbox>
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="2"
              id="twoTransfer"
              checked={this.state.twoTransfer.isChecked}
              onChange={this.handleInputChange(null)}
              onClickOnly={this.handleInputChange(2)}>
              2 пересадки
            </Checkbox>
            <Checkbox
              type="checkbox"
              className="Transfer__input"
              name="transfer"
              value="3"
              id="threeTransfer"
              checked={this.state.threeTransfer.isChecked}
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
