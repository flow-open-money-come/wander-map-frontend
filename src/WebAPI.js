import axios from 'axios'
import config from './config'

// User相關的 api
const userRequest = axios.create({
  baseURL: `${config.apiHost}/user`,
})
// 文章相關的 api
const articleRequest = axios.create({
  baseURL: `${config.apiHost}/articles`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    //Authorization: `Bearer ${token}`,
  },
})

// User 相關的 api
export const apiUserLogin = (data) => userRequest.post('/signIn', data)
export const apiUserLogout = (data) => userRequest.post('/signOut', data)
export const apiUserSignUp = (data) => userRequest.post('/signUp', data)

// 文章相關的 api
export const apiArticle = (articleId) => articleRequest.get(`/${articleId}`)
export const apiMessages = (articleId) =>
  articleRequest.get(`/${articleId}/messages`)
export const apiMessagesPost = (articleId, content) =>
  articleRequest.post(`/${articleId}/messages`, {
    content,
  })
export const apiMessagesPatch = (articleId, messageId) =>
  articleRequest.patch(`/${articleId}/messages/${messageId}`)
export const apiMessagesDelete = (articleId, messageId) =>
  articleRequest.delete(`/${articleId}/messages/${messageId}`)
