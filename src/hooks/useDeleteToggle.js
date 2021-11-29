import { useContext } from 'react'
import { deleteTrail, recoverTrail, deleteArticle, recoverArticle } from '../WebAPI'
import { AuthContext } from '../context'
import swal from 'sweetalert'

export default function useDeleteToggle() {
  const { userInfo } = useContext(AuthContext)

  const handleDelete = (ID, Title, setList, list, isArticles) => {
    if (!userInfo || userInfo.role !== 'admin') return

    swal({
      title: '確定刪除嗎？',
      icon: 'warning',
      buttons: ['取消', '確定'],
      dangerMode: true
    }).then((willDo) => {
      if (willDo) {
        (isArticles ? deleteArticle(ID) : deleteTrail(ID))
          .then((res) => {
            if (res.data.success) {
              isArticles
                ? setList(list.filter((article) => article.article_id !== ID))
                : setList(list.filter((trail) => trail.trail_id !== ID))
              swal(`已刪除文章 ${Title}`, {
                icon: 'success',
                button: '關閉'
              })
            }
          })
          .catch((err) => {
            console.log(err.response)
            swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
          })
      }
    })
  }

  const handleRecover = (ID, Title, setList, list, isArticles) => {
    if (!userInfo || userInfo.role !== 'admin') return
    ;(isArticles ? recoverArticle(ID) : recoverTrail(ID))
    .then((res) => {
      swal(`恢復文章`, `${Title}`, 'success')
      isArticles
        ? setList(list.filter((article) => article.article_id !== ID))
        : setList(list.filter((trail) => trail.trail_id !== ID))
    }) 
  }

  return {
    useDeleteToggle,
    handleDelete,
    handleRecover
  }
}
