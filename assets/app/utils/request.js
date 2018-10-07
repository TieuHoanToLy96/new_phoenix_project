import axios from "axios"

// export const sendGet = (url, params, _token) => {
//   let token

//   if (!_token) token = localStorage.getItem("jwt")
//   else token = _token

//   return new Promise((resolve, reject) => {
//     if (token) return resolve(axios({
//       method: "get",
//       url,
//       params,
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }))
//     else return reject({ internal_error: "Thiếu access token!" })
//   });
// }

// export const sendPost = (url, params, data, _token) => {
//   let token

//   if (!_token) token = localStorage.getItem("jwt")
//   else token = _token

//   return new Promise((resolve, reject) => {
//     if (token) return resolve(axios({
//       method: "post",
//       url,
//       data: data,
//       params,
//       // baseURL: "localhost:8060",
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     }))
//     else return reject({ internal_error: "Thiếu access token!" })
//   });
// }

export const sendGet = (url, params) => {
  console.log("sendGet", params)
  return axios({
    method: "get",
    url: url,
    data: params
  })
}

export const sendPost = (url, params) => {
  return axios({
    method: "post",
    url: url,
    data: params
  })
}
