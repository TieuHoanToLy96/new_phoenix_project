import { sendPost } from "utils/request.js"
import Notification from "components/Notification"

export const createNavigation = navigation => {
  return {
    type: "NAVIGATION::CREATE_NAVIGATION",
    payload: navigation
  }
}

export const addNodeToTreeData = node => {
  return {
    type: "NAVIGATION::ADD_NODE_TO_TREE_DATA",
    payload: node
  }
}
export const setTreeData = treeData => {
  return {
    type: "NAVIGATION::SET_TREE_DATA",
    payload: treeData
  }
}

export const saveNavigation = params => {
  return dispatch => {
    const url = `/api/admin/navigations/create_navigation`

    return sendPost(url, { params: params })
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          Notification.success("Save navigation success")
          dispatch({
            type: "NAVIGATION::UPDATE_NAVIGATION_SUCCESS",
            payload: res.data.navigation
          })
        } else {
          Notification.error("Save navigation fail")
        }
      })
      .catch(error => {
        Notification.errorStrict(error, "Get fail", " by beotron")
      })
  }
}