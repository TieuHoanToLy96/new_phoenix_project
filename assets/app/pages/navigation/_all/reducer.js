import update from "immutability-helper"
export const field = { POSTS: 2, CUSTOM_LINKS: 3, CATEGORY: 4, NULL: 0 }

const initState = {
  treeData: [],
  navigations: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case "NAVIGATION::CREATE_NAVIGATION":
      return update(state, {
        navigations: { $push: [action.payload] }
      })
    case "NAVIGATION::ADD_NODE_TO_TREE_DATA":
      return update(state, {
        treeData: { $push: action.payload }
      })
    case "NAVIGATION::SET_TREE_DATA":
      return update(state, {
        treeData: { $set: action.payload }
      })
    default:
      return state
  }
}