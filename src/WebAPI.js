import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: `${config.apiHost1}`,
})

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)
export const getAllUsers = (adminToken, params) =>
  instance.get('/users' + params, { headers: { Authorization: `Bearer ${adminToken}` } })

// trails
export const getTrails = (params) => instance.get('/trails/' + params)
export const getHotTrails = () => instance.get('/trails/featured')
export const deleteTrail = (trailID) => instance.delete('/trails/' + trailID)
export const getDeletedTrail = (params) => instance.get('/trails/deleted' + params)
export const recoverTrail = (trailID) => instance.patch('/trails/deleted/' + trailID)


// articles
export const getArticles = (params) => instance.get('/articles/' + params)
export const deleteArticle = (adminToken, articleID) =>
  instance.delete('/articles/' + articleID, { headers: { Authorization: `Bearer ${adminToken}` } })
export const getDeletedArticle = (params) => instance.get('/articles/deleted' + params)
export const recoverArticle = (articleID) => instance.patch('/articles/deleted/' + articleID)

