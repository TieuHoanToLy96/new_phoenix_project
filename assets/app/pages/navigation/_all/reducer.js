import update from "immutability-helper"
export const field = { POSTS: 2, CUSTOM_LINKS: 3, CATEGORY: 4, NULL: 0 }
import { findIndex } from "lodash"

const initState = {
  navigations: [],
  editNavigation: {
    name: "",
    treeData: []
  }
}

export default (state = initState, action) => {
  switch (action.type) {
    case "NAVIGATION::CHANGE_NAME_NAVIGATION": {
      return update(state, {
        editNavigation: {
          name: { $set: action.payload }
        }
      })
    }
    case "NAVIGATION::SET_EDIT_NAVIGATION":
      return update(state, {
        editNavigation: { $set: action.payload }
      })
    case "NAVIGATION::CREATE_NAVIGATION":
      return update(state, {
        // navigations: { $push: [action.payload] },
        editNavigation: { $set: action.payload }
      })
    case "NAVIGATION::ADD_NODE_TO_TREE_DATA":
      return update(state, {
        editNavigation: {
          treeData: { $push: action.payload }
        }
      })
    case "NAVIGATION::SET_TREE_DATA":
      return update(state, {
        editNavigation: {
          treeData: { $set: action.payload }
        }
      })

    case "NAVIGATION::GET_NAVIGATIONS_SUCCESS":
      return update(state, {
        navigations: { $set: action.payload }
      })

    case "NAVIGATION::UPDATE_NAVIGATIONS_SUCCESS":
      let idx = findIndex(state.navigations, el => el.id == action.payload.id)
      if (idx != -1)
        return update(state, {
          navigations: {
            [idx]: { $set: action.payload }
          }
        })
      return state

    case "NAVIGATION::GET_NAVIGATION_SUCCESS":
      let navigation = {
        name: action.payload.name,
        treeData: action.payload.settings
      }
      return update(state, {
        editNavigation: { $set: navigation }
      })
    case "NAVIGATION::DELETE_NAVIGATIONS_SUCCESS":
      let index = findIndex(state.navigations, el => el.id == action.payload.id)
      if (index != -1)
        return update(state, {
          navigations: { $splice: [[index, 1]] }
        })
      return state

    default:
      return state
  }
}