import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import guestReducer from "./guest/reducer"
import blogReducer from "./pages/blog/_all/reducer"
import categoryReducer from "pages/category/_all/reducer"
export default combineReducers({
  router: routerReducer,
  blog: blogReducer,
  guest: guestReducer, 
  category: categoryReducer
})