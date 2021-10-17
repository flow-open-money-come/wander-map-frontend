import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: `${config.apiHost}`,
})

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)
export const getUserInfo = (userID) => instance.get(`/users/${userID}`)
export const patchUserInfo = (userID, data) =>
  instance.patch(`/users/${userID}`, data)
export const getUserArticles = (userID) =>
  instance.get(`/users/${userID}/articles`)
export const getUserCollect = (userID) =>
  instance.get(`/users/${userID}/collected-trails`)
export const getUserLiked = (userID) =>
  instance.get(`/users/${userID}/liked-articles`)

// trails
export const getTrails = (trailID) => instance.get(`/trails/${trailID}`)
export const getHotTrails = () => instance.get('/trails/featured')
export const postTrails = (data) => instance.post('/trails', data)
export const patchTrail = (trailID, data) =>
  instance.patch(`/trails/${trailID}`, data)

// articles
export const getArticles = () => instance.get('/articles')
export const postArticles = (data) => instance.post('/articles', data)
export const patchArticle = (articleID, data) =>
  instance.patch(`/articles/${articleID}`, data)
