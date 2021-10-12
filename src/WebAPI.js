import axios from 'axios'
import config from './config'

// User相關的 api
const userRequest = axios.create({
  baseURL: `${config.apiHost}/user`,
})
// 文章相關的 api
const articleRequest = axios.create({
  baseURL: `${config.apiHost}/trails`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    //Authorization: `Bearer ${token}`,
  },
})

// 文章相關的 api
export const apiArticle = (articleId) => articleRequest.get(`/${articleId}`)
export const apiMessages = (articleId) =>
  articleRequest.get(`/${articleId}/comments`)
export const apiMessagesPost = (articleId, authorId, content) =>
  articleRequest.post(`/${articleId}/comments`, {
    author_id: authorId,
    content,
  })
export const apiMessagesPatch = (articleId, messageId, content) =>
  articleRequest.patch(`/${articleId}/comments/${messageId}`, {
    content,
  })
export const apiMessagesDelete = (articleId, messageId) =>
  articleRequest.delete(`/${articleId}/comments/${messageId}`)
