import React, { Component } from 'react';
import './index.scss'

class Filters extends Component {
  render() {
    return (
      <div className="col-3 Filters">
        <div className="Currency">
          <h3 className="Filters__title">ВАЛЮТА</h3>
          <div className="Currency__radio">
            <input type="radio" className="Currency__input" name="currency" value="rub" id="rub" checked/>
            <label htmlFor="rub">rub</label>
            <input type="radio" className="Currency__input" name="currency" value="usd" id="usd" />
            <label htmlFor="usd">usd</label>
            <input type="radio" className="Currency__input" name="currency" value="eur" id="eur" />
            <label htmlFor="eur">eur</label>
          </div>
        </div>
        <div className="Transfer">
          <h3 className="Filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
          <div className="Transfer__check">
            <input type="checkbox" className="Transfer__input" name="transfer" value="all-transfers" id="all-transfers" />
            <label htmlFor="all-transfers">Все</label>
            <input type="checkbox" className="Transfer__input" name="transfer" value="without-transfer" id="without-transfer" checked/>
            <label htmlFor="without-transfer">Без пересадок</label>
            <input type="checkbox" className="Transfer__input" name="transfer" value="1-transfer" id="1-transfer" checked/>
            <label htmlFor="1-transfer">1 пересадка</label>
            <input type="checkbox" className="Transfer__input" name="transfer" value="2-transfer" id="2-transfer" checked/>
            <label htmlFor="2-transfer">2 пересадки</label>
            <input type="checkbox" className="Transfer__input" name="transfer" value="3-transfer" id="3-transfer" />
            <label htmlFor="3-transfer">3 пересадки</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
