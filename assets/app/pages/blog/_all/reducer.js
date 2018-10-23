import update from "immutability-helper"
const initState = {
  blogList: [],
  editPost: {},
  total_entries: 0,
  isLoadingList: false, 
  isLoaded: false
}
export default (state = initState, action) => {
  switch (action.type) {
    case "BLOG::FETCH_BLOG_LIST":
      return update(state, {
        isLoadingList: {$set: false}
      })
    case "BLOG::FETCH_BLOG_LIST_FAIL":
      return update(state, {
        isLoadingList: {$set: fasle}
      })
    case "BLOG::FETCH_BLOG_LIST_SUCCESS":
      return update(state, {
        isLoaded: {$set: true},
        isLoadingList: {$set: false},
        blogList: { $set: action.payload.blog_list },
        total_entries: { $set: action.payload.total_entries }
      })
    case "BLOG::CREATE_BLOG_POST_SUCCESS": {
      return update(state, {
        blogList: { $push: [action.payload] }
      })
    }
    case "BLOG::CHANGE_INPUT_FIELD": {
      const { field, value } = action.payload
      return update(state, {
        editPost: {
          [field]: { $set: value }
        }
      })
    }
    case "BLOG::SET_EDIT_BLOG": {
      return update(state, {
        editPost: { $set: action.payload }
      })
    }
    case "BLOG::GET_EDIT_BLOG_SUCCESS": {
      return update(state, {
        editPost: { $set: action.payload }
      })
    }
    case "BLOG::UPDATE_BLOG_POST_SUCCESS": {
      return update(state, {
        
        editPost: { $set: action.payload }
      })
    }
    default: return state
  }
}