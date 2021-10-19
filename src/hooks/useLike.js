import { useState, useContext } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { AuthContext } from '../context'
import { apiArticlePostLike, apiArticleRemoveLike, collectTrail, cancelCollected } from '../WebAPI'

export default function useLike() {
  const [thumb, setThumb] = useState(false)
  const { id } = useParams()
  const isArticlePage = useRouteMatch('/articles')
  const { userInfo } = useContext(AuthContext)
  const [count, setCount] = useState(null)

  const handleClickLike = () => {
    setThumb(!thumb)
    thumb ? setCount(count - 1) : setCount(count + 1)

    const postLike = async (isArticlePage) => {
      try {
        let res = await (isArticlePage
          ? apiArticlePostLike(userInfo.user_id, id)
          : collectTrail(userInfo.user_id, id))
        if (res.status !== 200) {
          alert('按讚失敗')
        }
      } catch (err) {
        console.log(err)
      }
    }
    const removeLike = async (isArticlePage) => {
      try {
        let res = await (isArticlePage
          ? apiArticleRemoveLike(userInfo.user_id, id)
          : cancelCollected(userInfo.user_id, id))
        if (res.status !== 200) {
          alert('取消按讚失敗')
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (thumb) {
      removeLike(isArticlePage)
    } else {
      postLike(isArticlePage)
    }
  }
  return {
    thumb,
    setThumb,
    handleClickLike,
    count,
    setCount
  }
}