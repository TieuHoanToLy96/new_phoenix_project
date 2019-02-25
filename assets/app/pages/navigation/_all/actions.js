import { sendPost } from "utils/request.js"
import Notification from "components/Notification"

export const createNavigation = navigation => {
  return {
    type: "NAVIGATION::CREATE_NAVIGATION",
    payload: navigation
  }
}

export const changeNameNavigation = name => {
  return {
    type: "NAVIGATION::CHANGE_NAME_NAVIGATION",
    payload: name
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

export const setEditNavigation = navigation => {
  return {
    type: "NAVIGATION::SET_EDIT_NAVIGATION",
    payload: navigation
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

export const getNavigations = () => {
  return dispatch => {
    const url = `/api/admin/navigations/get_all`
    return sendPost(url, {})
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          dispatch({
            type: "NAVIGATION::GET_NAVIGATIONS_SUCCESS",
            payload: res.data.navigations
          })
        } else {
          Notification.error("Get navigation fail")
        }
      })
      .catch(error => {
        Notification.errorStrict(error, "Get fail", " by beotron")
      })
  }
}

export const updateNavigation = (navigation, id, spec) => {
  return dispatch => {
    const url = `/api/admin/navigations/update`
    return sendPost(url, { params: navigation, id: id })
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          Notification.success("Update navigation success")
          switch (spec) {
            case "update":
              dispatch({
                type: "NAVIGATION::UPDATE_NAVIGATIONS_SUCCESS",
                payload: res.data.navigation
              })
              break
            case "delete":
              dispatch({
                type: "NAVIGATION::DELETE_NAVIGATIONS_SUCCESS",
                payload: res.data.navigation
              })
              break
          }

        } else {
          Notification.error("Update navigation fail")
        }
      })
      .catch(error => {
        Notification.errorStrict(error, "Get fail", " by beotron")
      })
  }
}

export const getNavigation = id => {
  return dispatch => {
    const url = `/api/admin/navigations/get_navigation?id=${id}`
    return sendPost(url, {})
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          dispatch({
            type: "NAVIGATION::GET_NAVIGATION_SUCCESS",
            payload: res.data.navigation
          })
        } else {
          Notification.error("Get navigation fail")
        }
      })
      .catch(error => {
        Notification.errorStrict(error, "Get fail", " by beotron")
      })
  }
}

export const setObjectEdit = (nodeInfo) => {
  return {
    type: "NAVIGATION::SET_NODE_INFO",
    payload: nodeInfo
  }
}

export const setFieldEdit = field => {
  return {
    type: "NAVIGATION::SET_FIELD_EDIT",
    payload: field
  }
}

export const setInputField = (field, data) => {
  return {
    type: "NAVIGATION::SET_INPUT_FIELD",
    payload: { field, data }
  }
}
