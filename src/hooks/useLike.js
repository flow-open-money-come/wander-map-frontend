import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context'
import { postArticleLike, removeArticleLike } from '../WebAPI'

export default function useLike() {
  const [thumb, setThumb] = useState(false)
  const { id } = useParams()
  const { userInfo } = useContext(AuthContext)
  const [count, setCount] = useState(null)

  const handleClickLike = () => {
    setThumb(!thumb)
    thumb ? setCount(count - 1) : setCount(count + 1)

    const postLike = async () => {
      try {
        let res = await postArticleLike(userInfo.user_id, id)
        if (res.status !== 200) {
          alert('按讚失敗')
        }
      } catch (err) {
        console.log(err)
      }
    }
    const removeLike = async () => {
      try {
        let res = await removeArticleLike(userInfo.user_id, id)
        if (res.status !== 200) {
          alert('取消按讚失敗')
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (thumb) {
      removeLike()
    } else {
      postLike()
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
