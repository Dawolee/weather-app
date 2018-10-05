import React, { Component } from 'react'
import {
  FormControl,
  HelpBlock,
  FormGroup,
  Form,
  Button,
  ButtonGroup
} from 'react-bootstrap'

//imported helper function to make API call
import { HelperFunctionAPI } from './index'

export default class SearchBar extends Component {
  state = {
    value: '',
    type: 'zip',
    countryCode: ''
  }

  //checks which form was changed and updates the appropriate state
  handleChange = e => {
    if (e.target.id === 'search-type') {
      this.setState({ value: e.target.value })
    } else {
      this.setState({ countryCode: e.target.value })
    }
  }

  handleSubmit = e => {
    let { value, type, countryCode } = this.state
    let { grabData, toggleView } = this.props
    //prevents the page from refreshing after submitting form
    e.preventDefault()
    let url = 'http://api.openweathermap.org/data/2.5/forecast?'

    //setting up url to pass up to parent and to allow toggle searching by either imperial or metric units
    url += type === 'zip' ? 'zip=' + value : 'q=' + value
    url += countryCode === '' ? ',us' : ',' + countryCode
    //to convert spaces and whitespace into valid url
    url = encodeURI(url)
    //uses the helper function and passes in the callback function to update parent's state
    HelperFunctionAPI(url, grabData, 'Farenheit', toggleView)
  }

  //checks state type and reverses it
  handleTypeToggle = e => {
    this.setState({ type: e.target.value })
  }

  render() {
    let { countryCode, value, type } = this.state
    let { error } = this.props
    //if error was sent from parent, render out error message
    return (
      <Form
        autoComplete="off"
        horizontal
        className="searchbar"
        onSubmit={this.handleSubmit}
      >
        <h3 className="searchbar__header">Search By</h3>
        <ButtonGroup>
          <Button bsStyle="info" value="zip" onClick={this.handleTypeToggle}>
            Zipcode
          </Button>
          <Button
            bsStyle="success"
            value="city"
            onClick={this.handleTypeToggle}
          >
            City Name
          </Button>
        </ButtonGroup>
        <FormGroup controlId="search-type">
          <FormControl
            placeholder={type === 'zip' ? 'Enter Zip code' : 'Enter City Name'}
            value={value}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="country-code">
          <FormControl
            placeholder="Enter Country Code"
            value={countryCode}
            onChange={this.handleChange}
          />
          <HelpBlock className="helpblock">Default is US</HelpBlock>
        </FormGroup>
        <Button className="submit-btn btn-primary" type="submit">
          Get Weather!
        </Button>
        {error && <h4 className="error-msg">Error: {error}</h4>}
      </Form>
    )
  }
}
