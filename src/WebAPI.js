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

// 文章相關的 api
export const apiArticle = (articleId) => articleRequest.get(`/${articleId}`)
export const apiMessages = (articleId) =>
  articleRequest.get(`/${articleId}/messages`)
export const apiMessagesPost = (articleId, authorId, content) =>
  articleRequest.post(`/${articleId}/messages`, {
    author_id: authorId,
    content,
  })
export const apiMessagesPatch = (articleId, messageId, content) =>
  articleRequest.patch(`/${articleId}/messages/${messageId}`, {
    content,
  })
export const apiMessagesDelete = (articleId, messageId) =>
  articleRequest.delete(`/${articleId}/messages/${messageId}`)

export const apiArticleLike = (userId) =>
  articleRequest.post(`users/${userId}/liked-articles`)
export const apiArticleRemoveLike = (userId, articleId) =>
  articleRequest.delete(`users/${userId}/liked-articles/${articleId}`)
