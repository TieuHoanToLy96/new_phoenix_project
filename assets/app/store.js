import { applyMiddleware, createStore } from "redux"
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import { routerMiddleware } from "react-router-redux"
import thunkMiddleware from "redux-thunk"
import createHistory from "history/createBrowserHistory"

import reducer from "./reducers"

export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history)

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") return applyMiddleware(thunkMiddleware, myRouterMiddleware)
  // Enable additional logging in non-production environments.
  return applyMiddleware(thunkMiddleware, myRouterMiddleware, createLogger())
}

export const store = createStore(reducer, composeWithDevTools(getMiddleware()))
