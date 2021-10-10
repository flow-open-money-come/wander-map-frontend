import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: `${config.apiHost}`,
})

// user
export const userLogin = (data) => instance.post('/login', data)
export const userRegister = (data) => instance.post('/register', data)

// trails
export const getTrails = (params) => instance.get('/trails' + params)
export const getHotTrails = () => instance.get('/trails/featured')

// articles
export const getArticles = () => instance.get('/articles')
