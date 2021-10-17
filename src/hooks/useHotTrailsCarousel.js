import { useState, useEffect } from 'react'
import { getHotTrails } from '../WebAPI'

export default function useHotTrailsCarousel() {
  const [hotTrialInfos, setHotTrailInfos] = useState([{}])
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handelCarousel = () => {
    if (currentImgIndex < hotTrialInfos.length - 1) {
      return setCurrentImgIndex(currentImgIndex + 1)
    }
    setCurrentImgIndex(0)
  }

  useEffect(() => {
    getHotTrails()
      .then((res) => {
        if (res.data.success) {
          setHotTrailInfos(
            res.data.data.map((trailData) => {
              return [
                trailData.title,
                trailData.trail_id,
                trailData.cover_picture_url,
              ]
            })
          )
        }
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (hotTrialInfos.length !== 0) setTimeout(handelCarousel, 3000)
  })

  return {
    hotTrialInfos,
    currentImgIndex,
  }
}
