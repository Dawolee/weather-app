import React, { Component } from 'react'

export default class Daily extends Component {
  render() {
    let { currentDay, type } = this.props
    return (
      <div className="daily">
        <div className="daily__description">
          <p>Description: {currentDay.weather[0].description}</p>
        </div>
        <div className="daily__humidity">
          <p>Humidity: {currentDay.main.humidity}%</p>
        </div>

        {/* depending on imperial vs metric, prints out miles/hour vs meter/sec */}
        <div className="daily__humidity">
          <p>
            Wind Speed: {currentDay.wind.speed}
            {type === 'Farenheit' ? ' miles/hour' : ' meters/sec'}
          </p>
        </div>
      </div>
    )
  }
}
