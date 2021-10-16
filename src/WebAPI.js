import axios from 'axios'
import config from './config'
import { getAuthToken } from './utils'

const instance = axios.create({
  baseURL: `${config.apiHost}`,
})

instance.interceptors.request.use((config) => {
  // allow cookie on cross origin request
  config.withCredentials = true
  config.headers.Authorization = `Bearer ${getAuthToken()}`
  return config
})

// user
export const userLogin = (payload) => instance.post('/users/login', payload)
export const userRegister = (payload) =>
  instance.post('/users/register', payload)

// trails
export const getTrails = (params) => instance.get('/trails' + params)
export const getHotTrails = () => instance.get('/trails/featured')

// articles
export const getArticles = () => instance.get('/articles')

export const apiArticle = (articleId) => instance.get(`/articles/${articleId}`)
export const apiMessages = (articleId) =>
  instance.get(`/articles/${articleId}/messages`)
export const apiMessagesPost = (articleId, authorId, content) =>
  instance.post(`/articles/${articleId}/messages`, {
    author_id: authorId,
    content,
  })
export const apiMessagesPatch = (articleId, messageId, content) =>
  instance.patch(`/articles/${articleId}/messages/${messageId}`, {
    content,
  })
export const apiMessagesDelete = (articleId, messageId) =>
  instance.delete(`/articles/${articleId}/messages/${messageId}`)

export const apiArticleLike = (userId) =>
  instance.post(`users/${userId}/liked-articles`)
export const apiArticleRemoveLike = (userId, articleId) =>
  instance.delete(`users/${userId}/liked-articles/${articleId}`)

//步道相關 api

export const apiComments = (articleId) =>
  instance.get(`/trails/${articleId}/comments`)
export const apiCommentsPost = (articleId, authorId, content) =>
  instance.post(`/trails/${articleId}/comments`, {
    author_id: authorId,
    content,
  })
export const apiCommentsPatch = (articleId, messageId, content) =>
  instance.patch(`/trails/${articleId}/comments/${messageId}`, {
    content,
  })
export const apiCommentsDelete = (articleId, messageId) =>
  instance.delete(`/trails/${articleId}/comments/${messageId}`)
