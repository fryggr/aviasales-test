import React, { Component } from 'react'
import './index.scss'

class FlightSearch extends Component {
  render() {
    return (
      <div className="col-9 FlightSearch">
        <div className="FlightSearch__item">
          <div className="row h-100 m-0">
            <div className="col-4 FlightSearch__price">
              <button className="button">Купить <br/> за 22 245 ​₽</button>
            </div>
            <div className="col-8 FlightSearch__info">
              <div className="FlightSearch__time row mb-2">
                <div className="col-4 FlightSearch__destination-time text-left">09:25</div>
                <div className="col-4 FlightSearch__transfer">
                  <div className="FlightSearch__transfer-title">1 ПЕРЕСАДКА</div>
                  <div className="FlightSearch__transfer-icon mx-auto"></div>
                </div>
                <div className="col-4 FlightSearch__destination-time text-right">11:45</div>
              </div>
              <div className="FlightSearch__destination row">
                <div className="col-4 text-left">
                  <div className="FlightSearch__destination-point">VVO, Владивосток</div>
                  <div className="FlightSearch__destination-date">9 окт 2018, Пт</div>
                </div>
                <div className="col-4"></div>
              <div className="col-4 text-right">
                  <div className="FlightSearch__destination-point">Тель-Авив, TLV</div>
                  <div className="FlightSearch__destination-date">10 окт 2018, Пт</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FlightSearch
