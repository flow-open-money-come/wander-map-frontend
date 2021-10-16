import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: `${config.apiHost1}`,
})

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)

// trails
export const getTrails = (params) => instance.get('/trails/' + params)
export const getHotTrails = () => instance.get('/trails/featured')
export const getTrailArticles = (trailID, params) =>
  instance.get('/trails/' + trailID + '/articles' + params)


// articles
export const getArticles = () => instance.get('/articles')
