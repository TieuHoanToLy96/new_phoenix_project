import { sendGet, sendPost } from "utils/request.js"
import Notification from "components/Notification"

export const fetchCategoryList = (page, entries) => {
  return dispatch => {
    const url = `/api/admin/categories/get_all?entries=${entries}&page=${page}`

    return sendPost(url, null)
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          console.log(res.data)
          dispatch({
            type: "CATEGORY::FETCH_CATEGORY_LIST_SUCCESS",
            payload: res.data
          })
        } else {
          dispatch({
            type: "CATEGORY::FETCH_CATEGORY_LIST_FAIL"
          })
          Notification.error(res.data.message || "Get category list fail")
        }
      })
      .catch(error => {
        Notification.errorStrict(error, "Get fail", " by beotron")
      })
  }
}

export const setEditCategory = category => {
  return {
    type: "CATEGORY::SET_EDIT_CATEGORY",
    payload: category
  }
}

export const changeInputField = (field, value) => {
  return {
    type: "CATEGORY::CHANGE_INPUT_FIELD",
    payload: { field: field, value: value }
  }
}

export const createCategory = params => {
  return dispatch => {
    const url = `/api/admin/categories/create_category`
    return sendPost(url, { params: params })
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          Notification.success(res.data.message || "Create category success")
          dispatch({
            type: "CATEGORY::CREATE_CATEGORY_SUCCESS",
            payload: res.data.category
          })
        } else {
          dispatch({
            type: "CATEGORY::CREATE_CATEGORY_FAIL"
          })
          Notification.error(res.data.message || "Create category  fail")
        }
      })
      .catch(error => {
        Notification.errorStrict(error, "create fail", " by beotron")
      })
  }
}

export const updateCategory = (params, id) => {
  return dispatch => {
    const url = `/api/admin/categories/update_category`
    return sendPost(url, { params: params })
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          Notification.success(res.data.message || "Update category success")
          dispatch({
            type: "CATEGORY::UPDATE_CATEGORY_SUCCESS",
            payload: res.data.update_category
          })
        } else {
          dispatch({
            type: "CATEGORY::UPDATE_CATEGORY_FAIL"
          })
          Notification.error(res.data.message || "Update category  fail")
        }
      })
      .catch(error => {
        Notification.errorStrict(error, "Update fail", " by beotron")
      })
  }
}

export const getEditCategory = id => {
  return dispatch => {
    const url = `/api/admin/categories/get_category?id=${id}`
    return sendPost(url, null).then(res => {
      if (res.status == 200 & res.data.success == true) {
        dispatch({
          type: "CATEGORY::GET_EDIT_CATEGORY_SUCCESS",
          payload: res.data.edit_category
        })
      } else {
        dispatch({
          type: "CATEGORY::GET_EDIT_CATEGORY_FAIL",
        })
      }
    })
      .catch(error => {
        Notification.errorStrict(error, "Get fail", " by beotron")
      })
  }
}