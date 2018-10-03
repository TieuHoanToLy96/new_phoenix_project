import { Provider } from "react-redux"
import React, { Component } from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import { ConnectedRouter } from "react-router-redux"
import { renderRoutes } from "react-router-config"

import { store, history } from "./store"
import routes from "./routes"
class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        < BrowserRouter history={history}>
          {renderRoutes(routes)}
        </BrowserRouter>
      </Provider>

    )
  }
}

ReactDOM.render(<Root />, document.getElementById("react-app"))