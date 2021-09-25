import axios from 'axios'
import config from './config'

// User相關的 api
const userRequest = axios.create({
  baseURL: `${config.apiHost}/user`,
})
// 文章相關的 api
const articleRequest = axios.create({
  baseURL: `${config.apiHost}/article`,
})

// User 相關的 api
export const apiUserLogin = (data) => userRequest.post('/signIn', data)
export const apiUserLogout = (data) => userRequest.post('/signOut', data)
export const apiUserSignUp = (data) => userRequest.post('/signUp', data)

// 文章相關的 api
export const apiArticleItem = () => articleRequest.get('/ArticleItem')
export const apiArticleMsg = (data) => articleRequest.post('/ArticleMsg', data)
export const apiArticleLink = (data) =>
  articleRequest.post('/ArticleLink', data)
