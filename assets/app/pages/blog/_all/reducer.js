import update from "immutability-helper"
const initState = {
  blogList: []
}
export default (state = initState, action) => {
  switch(action.type){
    case "BLOG::FETCH_BLOG_LIST_SUCCESS":
      return update(state, {
        blogList: {$set: ["dfsf"]}
      })
    default: return state
  }
}