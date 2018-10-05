import React from 'react'
import renderer from 'react-test-renderer'
import { configure, shallow } from 'enzyme'
import { Weather, SearchBar } from './components'
import Adapter from 'enzyme-adapter-react-16'
const assert = require('assert')
const fetch = require('node-fetch')

configure({ adapter: new Adapter() })

describe('Weather App Tests', function() {
  describe('API calls', function() {
    // it('should return a list of weather data', async () => {
    //   let weatherData = await fetch(
    //     'http://api.openweathermap.org/data/2.5/forecast?zip=10465&APPID=a4aaf9e2c3889a342be449d98c9f64d3'
    //   )
    //     .then(res => {
    //       return res.json()
    //     })
    //     .then(res => {
    //       return res.list
    //     })
    //   assert.equal(weatherData.length, 40)
    // })
  })
  describe('App component testing', function() {
    it('renders welcome message', function() {
      const component = renderer.create(<Weather />).toJSON()
      console.log(component.children)
      // console.log(component.props)
      // assert.equal(component.state, 40)
    })
  })
})
