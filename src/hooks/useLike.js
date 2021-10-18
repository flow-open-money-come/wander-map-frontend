import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context'
import { postArticleLike, removeArticleLike } from '../WebAPI'

export default function useLike() {
  const [thumb, setThumb] = useState(false)
  const { id } = useParams()
  const { userInfo } = useContext(AuthContext)

  const handleClickLike = () => {
    const postLike = async () => {
      try {
        let res = await postArticleLike(userInfo.user_id, id)
        if (res.status === 200) {
          setThumb(true)
          console.log('likelikelike')
        }
      } catch (err) {
        console.log(err)
      }
    }
    const removeLike = async () => {
      try {
        let res = await removeArticleLike(userInfo.user_id, id)
        if (res.status === 200) {
          setThumb(false)
        }
      } catch (err) {
        console.log(err)
      }
    }
    if (thumb) {
      removeLike()
    } else if (!thumb) {
      postLike()
    }
  }
  return {
    thumb,
    setThumb,
    handleClickLike,
  }
}
