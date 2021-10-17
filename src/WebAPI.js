import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: config.apiHost2,
})

// trails
export const getTrails = (params) => instance.get('/trails' + params)
export const getHotTrails = () => instance.get('/trails/hot/5')
export const getTrailsCondition = () => axios.get(config.tfrHost)

// articles
export const getArticles = () => instance.get('/articles')
export const getArticlesUnderTrail = (TrailId) =>
  instance.get('/trails/' + TrailId + '/articles')

// 文章相關的 api
export const apiArticlesHot = () => articleRequest.get('/articles/hot')
export const apiArticles = () => articleRequest.get('/articles')
export const apiArticle = () => articleRequest.get('/articles/:articleId')
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
  return articleRequest.get(url)
}
// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)
