import update from "immutability-helper"
import { findIndex } from "lodash"
const initState = {
  categoryList: [],
  editCategory: {},
  total_entries: 0, 
  isLoaded: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case "CATEGORY::FETCH_CATEGORY_LIST_SUCCESS":
      return update(state, {
        isLoaded: {$set: true},
        categoryList: { $set: action.payload.categories }
      })
    case "CATEGORY::SET_EDIT_CATEGORY":
      return update(state, {
        editCategory: { $set: action.payload }
      })
    case "CATEGORY::CHANGE_INPUT_FIELD":
      const { field, value } = action.payload
      return update(state, {
        editCategory: {
          [field]: { $set: value }
        }
      })
    case "CATEGORY::CREATE_CATEGORY_SUCCESS":
      return update(state, {
        categoryList: { $push: [action.payload] }
      })
    case "CATEGORY::UPDATE_CATEGORY_SUCCESS":
      return update(state, {
        editCategory: {$set: action.payload}
      })
    case "CATEGORY::GET_EDIT_CATEGORY_SUCCESS": 
      return update(state, {
        editCategory: {$set: action.payload}
      })
    default:
      return state
  }
}