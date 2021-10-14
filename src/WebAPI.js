import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: `${config.apiHost}`,
})

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)
export const getUser = (userID) => instance.get(`/users/${userID}`)

// trails
export const getTrails = (params) => instance.get('/trails' + params)
export const getHotTrails = () => instance.get('/trails/featured')
export const postTrails = (data) => instance.post('/trails', data)

// articles
export const getArticles = () => instance.get('/articles')
export const postArticles = (data) => instance.post('/articles', data)
