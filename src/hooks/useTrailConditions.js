import { useState, useEffect } from 'react'
import { getTrailsCondition } from '../WebAPI'

export default function useTrailConditions() {
  const [trailConditions, setTrailConditions] = useState([{}])
  useEffect(() => {
    getTrailsCondition()
      .then((res) => {
        setTrailConditions(
          res.data.map((data) => {
            return {
              [parseInt(data.TRAILID)]: data.TR_TYP,
            }
          })
        )
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  return {
    trailConditions,
  }
}
