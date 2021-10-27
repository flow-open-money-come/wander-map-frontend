import axios from 'axios'
import swal from 'sweetalert'
import config from './config'
import { getAuthToken } from './utils'
import { setAuthToken } from './utils'

const instance = axios.create({
  baseURL: config.apiHost2,
})

instance.interceptors.request.use((config) => {
  config.withCredentials = true
  config.headers.Authorization = `Bearer ${getAuthToken()}`
  return config
})

// jwt 2.0
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      const refreshTokenUrl = '/users/refresh'
      if (error.config.url !== refreshTokenUrl) {
        const originalRequest = error.config
        return refreshAccessToken()
          .then((res) => {
            setAuthToken(res.data.data.token)
            originalRequest.headers.Authorization =
              'Bearer ' + res.data.data.token
            return axios(originalRequest)
          })
          .catch(() => {
            setAuthToken('')
            swal('作業逾期', '請重新登入', 'error')
          })
      }
    }
    return Promise.reject(error)
  }
)

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)
export const getAllUsers = (params) => instance.get(`/users${params}`)
export const refreshAccessToken = () => instance.get('/users/refresh')
export const userLogout = () => instance.get('/users/logout')

export const patchUserRole = (userID, role) =>
  instance.patch(`/users/${userID}`, { role: role })

export const getUserInfo = (userID) => instance.get(`/users/${userID}`)
export const patchUserInfo = (userID, data) =>
  instance.patch(`/users/${userID}`, data)
export const getUserArticles = (userID, params) =>
  instance.get(`/users/${userID}/articles/${params}`)
export const getUserCollect = (userID) =>
  instance.get(`/users/${userID}/collected-trails`)
export const getUserLiked = (userID) =>
  instance.get(`/users/${userID}/liked-articles`)

//todo
export const getUserTodos = (userID) => instance.get(`/users/${userID}/todos`)
export const postUserTodos = (userID, data) =>
  instance.post(`/users/${userID}/todos`, data)
export const patchUserTodos = (userID, todoID, data) =>
  instance.patch(`/users/${userID}/todos/${todoID}`, data)
export const deleteUserTodos = (userID, todoID) =>
  instance.delete(`/users/${userID}/todos/${todoID}`)

//使用者收藏步道
export const collectTrail = (userID, trailID) =>
  instance.post(`/users/${userID}/collected-trails`, { trail_id: trailID })
export const cancelCollected = (userID, trailID) =>
  instance.delete(`/users/${userID}/collected-trails/${trailID}`)

//使用者按讚步道
export const postArticleLike = (userID, articleID) =>
  instance.post(`users/${userID}/liked-articles`, {
    article_id: articleID,
  })
export const removeArticleLike = (userID, articleID) =>
  instance.delete(`users/${userID}/liked-articles/${articleID}`)

// trails
// get 相關
export const getTrails = (params) => instance.get(`/trails/${params}`)
export const getHotTrails = () => instance.get('/trails/hot/5')
export const getTrailsCondition = () => axios.get(config.tfrHost)

// 刪除復原相關
export const deleteTrail = (trailID) => instance.delete(`/trails/${trailID}`)
export const getDeletedTrail = (params) =>
  instance.get(`/trails/deleted/${params}`)
export const recoverTrail = (trailID) =>
  instance.patch(`/trails/deleted/${trailID}`)

// 新增編輯相關
export const postTrails = (data) => instance.post('/trails', data)
export const patchTrail = (trailID, data) =>
  instance.patch(`/trails/${trailID}`, data)

// 步道評論CRUD
export const getComments = (articleID) =>
  instance.get(`/trails/${articleID}/comments`)
export const postComment = (articleID, authorID, content) =>
  instance.post(`/trails/${articleID}/comments`, {
    author_id: authorID,
    content,
  })
export const patchComment = (articleID, messageID, content) =>
  instance.patch(`/trails/${articleID}/comments/${messageID}`, {
    content,
  })
export const deleteComment = (articleID, messageID) =>
  instance.delete(`/trails/${articleID}/comments/${messageID}`)

// articles
// get 相關
export const getArticles = (params) => instance.get(`/articles/${params}`)
export const getTrailArticles = (trailID, params) =>
  instance.get(`/trails/${trailID}/articles/${params}`)

// 刪除復原相關
export const deleteArticle = (articleID) =>
  instance.delete(`/articles/${articleID}`)
export const getDeletedArticle = (params) =>
  instance.get(`/articles/deleted${params}`)
export const recoverArticle = (articleID) =>
  instance.patch(`/articles/deleted/${articleID}`)

// 新增編輯相關
export const postArticles = (data) => instance.post('/articles', data)
export const patchArticle = (articleID, data) =>
  instance.patch(`/articles/${articleID}`, data)

// 心得評論CRUD
export const getMessages = (articleID) =>
  instance.get(`/articles/${articleID}/messages`)
export const postMessage = (articleID, authorID, content) =>
  instance.post(`/articles/${articleID}/messages`, {
    author_id: authorID,
    content,
  })
export const patchMessage = (articleID, messageID, content) =>
  instance.patch(`/articles/${articleID}/messages/${messageID}`, {
    content,
  })
export const deleteMessage = (articleID, messageID) =>
  instance.delete(`/articles/${articleID}/messages/${messageID}`)

// 其他 IMGUR WEATHER 等等
export const getWeatherInfo = (country, town) =>
  axios.get(
    config.weatherHost + `${country}?Authorization=${process.env.REACT_APP_WEATHER_TOKEN}&locationName=${town}&elementName=T,Wx,PoP12h`
  )

export const postImgur = (imageData) =>
  axios({
    method: 'post',
    url: config.imgurHost,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_IMGUR_TOKEN}`,
    },
    data: imageData,
  })
