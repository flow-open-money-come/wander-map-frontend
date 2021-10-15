import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: config.apiHost2,
})

// user
export const userLogin = (data) => instance.post('/login', data)
export const userRegister = (data) => instance.post('/register', data)

// trails
export const getTrails = (params) => instance.get('/trails' + params)
export const getHotTrails = () => instance.get('/trails/hot/5')
export const getTrailsCondition = () => axios.get(config.tfrHost)

// articles
export const getArticles = () => instance.get('/articles')
export const getArticlesUnderTrail = (id) =>
  instance.get('/trails/' + id + '/articles')
