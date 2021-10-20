import { useContext } from 'react'
import { useLocation, useHistory } from 'react-router'
import swal from 'sweetalert'
import { AuthContext } from '../context'
import { setAuthToken } from '../utils'
import { userLogout } from '../WebAPI'

export default function useLogout() {
  const location = useLocation()
  const history = useHistory()
  const { setUserInfo } = useContext(AuthContext)

  const handleLogOut = () => {
    swal({
      title: '確定登出嗎？',
      icon: 'warning',
      buttons: ['取消', '確定'],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        userLogout()
          .then((res) => {
            if (res.data.success) {
              setAuthToken('')
              setUserInfo(null)
              swal('登出成功！', {
                icon: 'success',
                button: '關閉',
              })
              if (location.pathname !== '/') return history.push('/')
            }
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
    })
  }

  return { handleLogOut }
}
