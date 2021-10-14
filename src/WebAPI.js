import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: `${config.apiHost1}`,
})

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)
export const getAllUsers = (adminToken) =>
  instance.get('/users', { headers: { Authorization: `Bearer ${adminToken}` } })

  // instance.interceptors.request.use((config) => {
  //   // allow cookie on cross origin request
  //   config.withCredentials = true
  //   config.headers.Authorization = `Bearer ${adminToken}`
  //   return config
  // })

// trails
export const getTrails = (params) => instance.get('/trails/' + params)
export const getHotTrails = () => instance.get('/trails/featured')
export const deleteTrail = (trailID) => instance.delete('/trails/' + trailID)

// articles
export const getArticles = (params) => instance.get('/articles/' + params)
export const deleteArticle = (articleID) => instance.delete('/articles/' + articleID)

