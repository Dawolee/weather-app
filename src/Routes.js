import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { Weather } from './components'

/* was planning on making routes to edit individual events but decided to do
everything on one view */

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Weather toggleView={this.props.toggleView} />}
        />

        {/* was making routes for single day view but decided against it*/}
        {/* <Route exact path="/day/:id" component={Daily} /> */}
      </Switch>
    )
  }
}

export default withRouter(Routes)
