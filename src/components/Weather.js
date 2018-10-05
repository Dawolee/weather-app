import React, { Component } from 'react'
import { sunny, cloudy, rain } from '../images'
import { Daily, SearchBar, HelperFunctionAPI } from './index'
import { Button } from 'react-bootstrap'

export default class Weather extends Component {
  state = {
    days: [],
    type: 'Farenheit',
    currentDayId: 0,
    url: '',
    city: null,
    displayWeather: false,
    err: ''
  }
  // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.

  //function to grab API information from SearchBar child component
  grabDataAndUrl = (weatherData, url, city, display, err) => {
    this.setState({
      days: weatherData,
      url: url,
      city: city,
      displayWeather: display,
      err: err
    })
  }

  //depending on the type value, refetches new data in different format (imperial vs metric)
  handleToggle = () => {
    let { type, url } = this.state
    if (type === 'Farenheit') {
      HelperFunctionAPI(url, this.grabDataAndUrl, 'Celsius', null)
      this.setState({ type: 'Celsius' })
    } else {
      HelperFunctionAPI(url, this.grabDataAndUrl, 'Farenheit', null)
      this.setState({ type: 'Farenheit' })
    }
  }

  changeCurrentDay = id => {
    this.setState({ currentDayId: id })
  }

  toggleSearchBar = () => {
    //toggle displayWeather state to hide the data
    this.setState({ displayWeather: !this.state.displayWeather })
    //toggles parent view to switch to search style
    this.props.toggleView()
  }

  render() {
    let { days, currentDayId, city, displayWeather, type, err } = this.state
    //sends error over to searchbar child component if reponse was invalid
    return (
      <div className="weather-container">
        {!displayWeather && (
          <SearchBar
            grabData={this.grabDataAndUrl}
            error={err}
            toggleView={this.props.toggleView}
          />
        )}
        {displayWeather && (
          <div className="weather">
            {days.length > 0 && (
              <Button
                bsStyle="success"
                bsSize="small"
                onClick={this.handleToggle}
              >
                Toggle Celsius/Farenheit
              </Button>
            )}
            {city && (
              <h4 className="weather__city-details">
                Weather in {city.name}, {city.country}
              </h4>
            )}
            {/* loops through the week data and creates a display for each day */}
            <div className="weather__view">
              {days.map((day, index) => {
                //grabbing the weather main description and hard coding the image source based on three conditions
                let condition = day.weather[0].main
                let imgSrc = sunny

                if (condition === 'Rain') {
                  imgSrc = rain
                } else if (condition === 'Clouds') {
                  imgSrc = cloudy
                }

                return (
                  <div
                    key={index}
                    className={
                      index === currentDayId
                        ? 'weather-day selected'
                        : 'weather-day'
                    }
                    onClick={() => this.changeCurrentDay(index)}
                  >
                    {/* inspected the response JSON and manipulated the dt_txt to only grab the data I wanted */}
                    <div>
                      <div className="weather-day__date">
                        <p>{day.dt_txt.split(' ')[0].slice(5)}</p>
                      </div>
                      {type === 'Farenheit' ? (
                        <div className="weather-day__temp">
                          <p>
                            {day.main.temp}
                            &#8457;
                          </p>
                        </div>
                      ) : (
                        <div className="weather-day__temp">
                          <p>
                            {day.main.temp}
                            &#8451;
                          </p>
                        </div>
                      )}
                    </div>
                    <div>
                      <img
                        className="weather-img"
                        alt="weather-pic"
                        src={imgSrc}
                      />
                      <div className="weather-day__main">
                        <p>{condition}</p>
                      </div>
                    </div>
                    <div className="weather-day__hidden">
                      <div className="daily__description">
                        <p>Description: {day.weather[0].description}</p>
                      </div>
                      <div className="daily__humidity">
                        <p>Humidity: {day.main.humidity}%</p>
                      </div>

                      {/* depending on imperial vs metric, prints out miles/hour vs meter/sec */}
                      <div className="daily__humidity">
                        <p>
                          Wind Speed: {day.wind.speed}
                          {type === 'Farenheit' ? ' miles/hour' : ' meters/sec'}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
              {days[currentDayId] && (
                <Daily currentDay={days[currentDayId]} type={type} />
              )}
            </div>
            {/* passing in the index of the currently selected day to render out the correct details for selected date */}
            <div className="container-bottom">
              <Button bsStyle="info" onClick={this.toggleSearchBar}>
                Search Again
              </Button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
