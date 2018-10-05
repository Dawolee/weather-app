import React, { Component } from 'react'
import './App.css'
import Routes from './Routes'

class App extends Component {
  state = {
    view: 'search'
  }

  toggleView = () => {
    this.state.view === 'search'
      ? this.setState({ view: 'data' })
      : this.setState({ view: 'search' })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>buildit Weather App</p>
        </header>
        <div
          className={
            this.state.view === 'search' ? 'container search' : 'container data'
          }
        >
          <Routes toggleView={this.toggleView} />
        </div>
      </div>
    )
  }
}

export default App
