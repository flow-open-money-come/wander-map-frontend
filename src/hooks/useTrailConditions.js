import { useState, useEffect } from 'react'
import { getTrailsCondition } from '../WebAPI'
import swal from 'sweetalert'

export default function useTrailConditions() {
  const [trailConditions, setTrailConditions] = useState([{}])
  useEffect(() => {
    getTrailsCondition()
      .then((res) => {
        let trailConditionsObj = Object.assign(
          {},
          ...res.data.map((data) => {
            return {
              [data.TR_CNAME]: [data.TR_TYP, data.TITLE],
            }
          })
        )
        setTrailConditions(trailConditionsObj)
      })
      .catch(() => {
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
  }, [])

  return {
    trailConditions,
  }
}
