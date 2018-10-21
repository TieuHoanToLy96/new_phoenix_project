import { sendGet, sendPost } from "utils/request.js"
import Notification from "components/Notification"

export const fetchCategoryList = (page, entries) => {
  return dispatch => {
    const url = `/api/admin/categories/get_all?entries=${entries}&page=${page}`
    return sendPost(url, nul)
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          console.log(res.data)
          dispatch({
            type: "CATEGORY::FETCH_CATEGORY_LIST_SUCCESS",
            payload: res.data
          })
        } else {
          dispatch({
            type: "BLOG::FETCH_CATEGORY_LIST_FAIL"
          })
          Notification.error(res.data.message || "Get category list fail")
        }
      })
      .catch(error => {
        Notification.errorStrict(error, "Get fail", " by beotron")
      })
  }
}