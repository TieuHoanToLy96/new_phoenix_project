import { sendGet, sendPost } from "utils/request.js"
import Notification from "components/Notification"

export const fetchBlogList = (entries, page) => {
  return dispatch => {
    const url = `/api/admin/blogs/get_all?entries=${entries}&page=${page}`
    
    return sendGet(url, null)
    .then(res => {
      if(res.status == 200 && res.data.success == true){
        dispatch({
          type: "BLOG::FETCH_BLOG_LIST_SUCCESS",
          payload: res.data.blog_list
        })
        Notification.success(res.data.message || "Get blog list success")
      }else {
        dispatch({
          type: "BLOG::FETCH_BLOG_LIST_FAIL"
        })
        Notification.error(res.data.message || "Get blog list fail")
      }
    })
    .catch(error => {
      Notification.errorStrict(error, "Get fail" ," by beotron")
    })
  }
}

export const createBlogPost = (data) => {
  return dispatch => {
    const url = "/api/admin/blogs/create_blog"
    return sendPost(url, { blog_params: data })
      .then(res => {
        if (res.status == 200 && res.data.success == true) {
          dispatch({
            type: "BLOG::CREATE_BLOG_POST_SUCCESS",
            payload: res.data.new_blog
          })
          Notification.success(res.data.message || "Create blog post success")
        }
        else {
          dispatch({
            type: "BLOG::CREATE_BLOG_POST_FAIL"
          })
          Notification.error(res.data.message || "Create blog post fail")
        }
      }
      )
      .catch(error => {
        Notification.errorStrict(error, "create fail" ," by beotron")
      })
  }
}

export const changeInputField = (field, value) => {
  return{
    type: "BLOG::CHANGE_INPUT_FIELD", 
    payload: {field: field, value: value}
  }
}