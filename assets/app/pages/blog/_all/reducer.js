import update from "immutability-helper"
const initState = {
  blogList: [], 
  editPost: {}
}
export default (state = initState, action) => {
  switch(action.type){
    case "BLOG::FETCH_BLOG_LIST_SUCCESS":
      return update(state, {
        blogList: {$set: action.payload}
      })
    case "BLOG::CREATE_BLOG_POST_SUCCESS":{
      return update(state, {
        blogList: {$push: [action.payload]}
      })
    }
    case "BLOG::CHANGE_INPUT_FIELD": {
      const {field, value} = action.payload
      return update(state, {
        editPost: {
          [field]: {$set: value}
        }
      })
    }
    default: return state
  }
}