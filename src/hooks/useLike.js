import { useState, useContext } from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import { AuthContext } from '../context'
import { postArticleLike, removeArticleLike, collectTrail, cancelCollected } from '../WebAPI'
import swal from 'sweetalert'

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
          ? postArticleLike(userInfo.user_id, id)
          : collectTrail(userInfo.user_id, id))
        if (res.status !== 200) {
          swal('Oh 不！', '按讚失敗！請稍候再試一次，或者聯繫我們。', 'error')
        }
      } catch (err) {
        console.log(err)
        swal('Oh 不！', '按讚失敗！請稍候再試一次，或者聯繫我們。', 'error')
      }
    }
    const removeLike = async (isArticlePage) => {
      try {
        let res = await (isArticlePage
          ? removeArticleLike(userInfo.user_id, id)
          : cancelCollected(userInfo.user_id, id))
        if (res.status !== 200) {
          swal('取消按讚失敗！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
        }
      } catch (err) {
        console.log(err)
        swal('Oh 不！', '取消按讚失敗！請稍候再試一次，或者聯繫我們。', 'error')
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
    setCount,
  }
}
