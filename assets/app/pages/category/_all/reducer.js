import update from "immutability-helper"
const initState = {
  categoryList: [],
  editCategory: {},
  total_entries: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case "CATEGORY::FETCH_CATEGORY_LIST_SUCCESS":
      return update(state, {
        categoryList: { $set: action.payload.categories }
      })
    default:
      return state
  }
}