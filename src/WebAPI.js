import axios from 'axios'
import config from './config'
import { getAuthToken } from './utils'

const instance = axios.create({
  baseURL: config.apiHost,
})

instance.interceptors.request.use((config) => {
  config.withCredentials = true
  config.headers.Authorization = `Bearer ${getAuthToken()}`
  return config
})

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)
export const getAllUsers = (params) => instance.get(`/users${params}`)
export const refreshAccessToken = () => instance.get('/users/refresh')
export const userLogout = () => instance.get('/users/logout')

export const changeUserRole = (userID, role) =>
  instance.patch(`/users/${userID}`, { role: role })

export const getUserInfo = (userID) => instance.get(`/users/${userID}`)
export const patchUserInfo = (userID, data) =>
  instance.patch(`/users/${userID}`, data)
export const getUserArticles = (userID) =>
  instance.get(`/users/${userID}/articles`)
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
export const getUserCollectedTrails = (userID) =>
  instance.get(`/users/${userID}/collected-trails`)
export const collectTrail = (userID, trailID) =>
  instance.post(`/users/${userID}/collected-trails`, { trail_id: trailID })
export const cancelCollected = (userID, trailID) =>
  instance.delete(`/users/${userID}/collected-trails/${trailID}`)

//使用者按讚步道
export const getArticleLike = (userId) =>
  instance.get(`users/${userId}/liked-articles`)
export const postArticleLike = (userId, articleId) =>
  instance.post(`users/${userId}/liked-articles`, {
    article_id: articleId,
  })
export const removeArticleLike = (userId, articleId) =>
  instance.delete(`users/${userId}/liked-articles/${articleId}`)

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
export const getComments = (articleId) =>
  instance.get(`/trails/${articleId}/comments`)
export const postComment = (articleId, authorId, content) =>
  instance.post(`/trails/${articleId}/comments`, {
    author_id: authorId,
    content,
  })
export const patchComment = (articleId, messageId, content) =>
  instance.patch(`/trails/${articleId}/comments/${messageId}`, {
    content,
  })
export const deleteComment = (articleId, messageId) =>
  instance.delete(`/trails/${articleId}/comments/${messageId}`)

// articles
// get 相關
export const getArticles = (params) => instance.get(`/articles${params}`)
export const getTrailArticles = (trailID, params) =>
  instance.get(`/trails/${trailID}/articles/${params}`)
export const getArticlesUnderTrail = (TrailId) =>
  instance.get(`/trails/${TrailId}/articles`)

// 刪除復原相關
export const deleteArticle = (articleID) =>
  instance.delete(`/articles/${articleID}`)
export const getDeletedArticle = (params) =>
  instance.get(`/articles/deleted${params}`)
export const recoverArticle = (articleID) =>
  instance.patch(`/articles/deleted/${articleID}`)

// 新增編輯相關
export const postArticles = (data) => instance.post('/articles', data)
export const postRelateTrail = (articleID) =>
  instance.patch(`/articles/${articleID}/relate-trail`)
export const patchArticle = (articleID, data) =>
  instance.patch(`/articles/${articleID}`, data)

// 心得評論CRUD
export const getMessages = (articleId) =>
  instance.get(`/articles/${articleId}/messages`)
export const postMessage = (articleId, authorId, content) =>
  instance.post(`/articles/${articleId}/messages`, {
    author_id: authorId,
    content,
  })
export const patchMessage = (articleId, messageId, content) =>
  instance.patch(`/articles/${articleId}/messages/${messageId}`, {
    content,
  })
export const deleteMessage = (articleId, messageId) =>
  instance.delete(`/articles/${articleId}/messages/${messageId}`)

// 其他 IMGUR WEATHER 等等
export const getWeatherInfo = (country, town) =>
  axios.get(
    config.weatherHost,
    `${country}?Authorization=${process.env.REACT_APP_WEATHER_TOKEN}&locationName=${town}&elementName=T,Wx,PoP12h`
  )
