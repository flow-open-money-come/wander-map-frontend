import axios from 'axios'
import config from './config'
import { getAuthToken } from './utils'

const instance = axios.create({
  baseURL: config.apiHost2
})

instance.interceptors.request.use((config) => {
  config.withCredentials = true
  config.headers.Authorization = `Bearer ${getAuthToken()}`
  return config
})

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) => instance.post('/users/register', payload)
export const getAllUsers = (params) => instance.get('/users' + params)
export const refreshAccessToken = () => instance.get('/users/refresh')
export const userLogout = () => instance.get('/users/logout')

export const getUserCollectedTrails = (userID) => instance.get(`/users/${userID}/collected-trails`)
export const collectTrail = (userID, trailID) =>
  instance.post(`/users/${userID}/collected-trails`, { trail_id: trailID })
export const cancelCollected = (userID, trailID) =>
  instance.delete(`/users/${userID}/collected-trails/${trailID}`)

export const changeUserRole = (userID, role) => instance.patch('/users/' + userID, { role: role })

// trails
// get 相關
export const getTrails = (params) => instance.get('/trails/' + params)
export const getHotTrails = () => instance.get('/trails/hot/5')
export const getTrailsCondition = () => axios.get(config.tfrHost)

// 刪除復原相關
export const deleteTrail = (trailID) => instance.delete('/trails/' + trailID)
export const getDeletedTrail = (params) => instance.get('/trails/deleted' + params)
export const recoverTrail = (trailID) => instance.patch('/trails/deleted/' + trailID)

// 新增編輯相關
export const postTrails = (data) => instance.post('/trails', data)

// 步道評論CRUD
export const getComments = (articleId) => instance.get(`/trails/${articleId}/comments`)
export const postComment = (articleId, authorId, content) =>
  instance.post(`/trails/${articleId}/comments`, {
    author_id: authorId,
    content
  })
export const patchComment = (articleId, messageId, content) =>
  instance.patch(`/trails/${articleId}/comments/${messageId}`, {
    content
  })
export const deleteComment = (articleId, messageId) =>
  instance.delete(`/trails/${articleId}/comments/${messageId}`)

// articles
// get 相關
export const getArticles = (params) => instance.get('/articles/' + params)
export const apiArticles = () => instance.get('/articles')
export const apiArticle = (articleId) => instance.get(`/articles/${articleId}`)
export const apiArticlesHot = () => instance.get('/articles/hot')
export const getTrailArticles = (trailID, params) =>
  instance.get('/trails/' + trailID + '/articles' + params)
export const getArticlesUnderTrail = (TrailId) => instance.get('/trails/' + TrailId + '/articles')

// 刪除復原相關
export const deleteArticle = (articleID) => instance.delete('/articles/' + articleID)
export const getDeletedArticle = (params) => instance.get('/articles/deleted' + params)
export const recoverArticle = (articleID) => instance.patch('/articles/deleted/' + articleID)

// 新增編輯相關
export const postArticles = (data) => instance.post('/articles', data)

// 心得評論CRUD
export const getMessages = (articleId) => instance.get(`/articles/${articleId}/messages`)
export const postMessage = (articleId, authorId, content) =>
  instance.post(`/articles/${articleId}/messages`, {
    author_id: authorId,
    content
  })
export const patchMessage = (articleId, messageId, content) =>
  instance.patch(`/articles/${articleId}/messages/${messageId}`, {
    content
  })
export const deleteMessage = (articleId, messageId) =>
  instance.delete(`/articles/${articleId}/messages/${messageId}`)

// 心得按讚關聯
export const apiArticleGetLike = (userId) => instance.get(`users/${userId}/liked-articles`)
export const apiArticlePostLike = (userId, articleId) =>
  instance.post(`users/${userId}/liked-articles`, {
    article_id: articleId
  })
export const apiArticleRemoveLike = (userId, articleId) =>
  instance.delete(`users/${userId}/liked-articles/${articleId}`)

// 不確定這支的分類
export const apiArticlesOptions = (limit, tags, offset, search) => {
  let url = `/articles?`
  if (limit) {
    url += `limit=${limit}&`
  }
  if (tags && Array.isArray(tags) && tags.length > 0) {
    tags.map((tag) => (url += `tag=${tag}&`))
  }
  if (offset) {
    url += `offset=${offset}&`
  }
  if (search) {
    url += `search=${search}&`
  }
  return instance.get(url)
}

// 其他 IMGUR WEATHER 等等
export const getWeatherInfo = (country, town) =>
  axios.get(
    config.weatherHost,
    `${country}?Authorization=${process.env.REACT_APP_WEATHER_TOKEN}&locationName=${town}&elementName=T,Wx,PoP12h`
  )
