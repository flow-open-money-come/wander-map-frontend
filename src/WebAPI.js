import axios from 'axios'
import config from './config'

// User相關的 api
const userRequest = axios.create({
  baseURL: `${config.apiHost}/user`,
})
// 文章相關的 api
const articleRequest = axios.create({
  baseURL: `${config.apiHost}/articles`,
})

// User 相關的 api
export const apiUserLogin = (data) => userRequest.post('/signIn', data)
export const apiUserLogout = (data) => userRequest.post('/signOut', data)
export const apiUserSignUp = (data) => userRequest.post('/signUp', data)

// 文章相關的 api
export const apiArticlesHot = () => articleRequest.get('/hot')
export const apiArticles = () => articleRequest.get('/')
export const apiArticle = () => articleRequest.get('/:id')
export const apiArticlesOptions = (limit, tags, offset, search) => {
  let url = `?`
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
