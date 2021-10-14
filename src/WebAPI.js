import axios from 'axios'
import config from './config'

// 文章相關的 api
const articleRequest = axios.create({
  baseURL: `${config.apiHost}/trails`,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    //Authorization: `Bearer ${token}`,
  },
})

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

export const apiArticleLike = (userId) =>
  articleRequest.post(`users/${userId}/liked-articles`)
export const apiArticleRemoveLike = (userId, articleId) =>
  articleRequest.delete(`users/${userId}/liked-articles/${articleId}`)

// // 步道相關 api
// const articleRequest = axios.create({
//   baseURL: `${config.apiHost}/trails`,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     //Authorization: `Bearer ${token}`,
//   },
// })

// export const apiComments = (articleId) =>
//   articleRequest.get(`/${articleId}/comments`)
// export const apiCommentsPost = (articleId, authorId, content) =>
//   articleRequest.post(`/${articleId}/comments`, {
//     author_id: authorId,
//     content,
//   })
// export const apiCommentsPatch = (articleId, messageId, content) =>
//   articleRequest.patch(`/${articleId}/comments/${messageId}`, {
//     content,
//   })
// export const apiCommentsDelete = (articleId, messageId) =>
//   articleRequest.delete(`/${articleId}/comments/${messageId}`)
