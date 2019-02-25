import React, { Component } from 'react'
import './index.scss'

class FlightSearch extends Component {

  render() {
    const { tickets, currency } = this.props
    return (
      <div className="col-lg-9 col-xl-9 col-md-10 col-sm-12 FlightSearch">
        {
            tickets.map(ticket => {
              return (
                  <div className="FlightSearch__item">
                    <div className="row h-100 m-0 flex-column-reverse flex-sm-column-reverse">
											<div className="col-4 col-sm-12 col-md-4">
												<div className="row">
													<div className="col-12 FlightSearch__airline"></div>
		                      <div className="col-12 FlightSearch__price">
		                        <button className="button">Купить <br/> за {parseInt(ticket.price/currency.value)} ​{currency.name}</button>
		                      </div>
												</div>
											</div>
                      <div className="col-8 col-sm-12 col-md-8 FlightSearch__info">
                        <div className="FlightSearch__time row mb-2">
                          <div className="col-4 FlightSearch__destination-time text-left">{ticket.arrival_time}</div>
                          <div className="col-4 FlightSearch__transfer">
                            <div className="FlightSearch__transfer-title">{ticket.stops} ПЕРЕСАДКА</div>
                            <div className="FlightSearch__transfer-icon mx-auto"></div>
                          </div>
                          <div className="col-4 FlightSearch__destination-time text-right">{ticket.departure_time}</div>
                        </div>
                        <div className="FlightSearch__destination row">
                          <div className="col-4 text-left">
                            <div className="FlightSearch__destination-point">{ticket.origin_name}, {ticket.origin}</div>
                            <div className="FlightSearch__destination-date">{ticket.arrival_date}</div>
                          </div>
                          <div className="col-4"></div>
                        <div className="col-4 text-right">
                            <div className="FlightSearch__destination-point">{ticket.destination_name}, {ticket.destination}</div>
                            <div className="FlightSearch__destination-date">{ticket.departure_date}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )
        })}
      </div>
    )
  }
}

export default FlightSearch
