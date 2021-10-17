import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: config.apiHost2,
})


// trails
export const getTrails = (params) => instance.get('/trails' + params)
export const getHotTrails = () => instance.get('/trails/hot/5')
export const getTrailsCondition = () => axios.get(config.tfrHost)
export const postTrails = (data) => instance.post('/trails', data)

// articles
export const getArticles = () => instance.get('/articles')
export const getArticlesUnderTrail = (TrailId) =>
  instance.get('/trails/' + TrailId + '/articles')
export const postArticles = (data) => instance.post('/articles', data)

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)
export const getUser = (userID) => instance.get(`/users/${userID}`)

