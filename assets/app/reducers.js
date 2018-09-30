import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import blogReducer from "./pages/blog/_all/reducer"
export default combineReducers({
  router: routerReducer,
  blog: blogReducer
})