import axios from 'axios'
import config from './config'
import { getAuthToken } from './utils'

const instance = axios.create({
  baseURL: config.apiHost,
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
export const getAllUsers = (adminToken, params) =>
  instance.get('/users' + params, { headers: { Authorization: `Bearer ${adminToken}` } })

// trails
export const getTrails = (params) => instance.get('/trails/' + params)
export const getTrailArticles = (trailID, params) =>
  instance.get('/trails/' + trailID + '/articles' + params)
export const getHotTrails = () => instance.get('/trails/hot/5')
export const deleteTrail = (trailID) => instance.delete('/trails/' + trailID)
export const getDeletedTrail = (params) => instance.get('/trails/deleted' + params)
export const recoverTrail = (trailID) => instance.patch('/trails/deleted/' + trailID)
export const getTrailsCondition = () => axios.get(config.tfrHost)
export const postTrails = (data) => instance.post('/trails', data)


// articles
export const getArticles = (params) => instance.get('/articles/' + params)
export const deleteArticle = (adminToken, articleID) =>
  instance.delete('/articles/' + articleID, { headers: { Authorization: `Bearer ${adminToken}` } })
export const getDeletedArticle = (params) => instance.get('/articles/deleted' + params)
export const recoverArticle = (articleID) => instance.patch('/articles/deleted/' + articleID)

// export const getArticles = () => instance.get('/articles')

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

export const apiArticleGetLike = (userId) =>
  instance.get(`users/${userId}/liked-articles`)
export const apiArticlePostLike = (userId, articleId) =>
  instance.post(`users/${userId}/liked-articles`, {
    article_id: articleId,
  })
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
export const getArticlesUnderTrail = (TrailId) =>
  instance.get('/trails/' + TrailId + '/articles')
export const postArticles = (data) => instance.post('/articles', data)

// 文章相關的 api
export const apiArticlesHot = () => instance.get('/articles/hot')
export const apiArticles = () => instance.get('/articles')

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
  return instance.get(url)
}

