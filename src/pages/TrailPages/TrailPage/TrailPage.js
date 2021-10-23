import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import {
  COLOR,
  FONT,
  EFFECT,
  RADIUS,
  MEDIA_QUERY,
} from '../../../constants/style'
import { useParams } from 'react-router-dom'
import { ReactComponent as CollectIcon } from '../../../icons/trails/collect.svg'
import TrailInfo from '../../../components/trailSystem/TrailInfo'
import Weather from '../../../components/trailSystem/Weather'
import TrailMap from '../../../components/trailSystem/TrailMap'
import TrailRoute from '../../../components/trailSystem/TrailRoute'
import TrailArticles from '../../../components/trailSystem/TrailArticles'
import TrailReviews from '../../../components/trailSystem/TrailReviews'
import { getTrails, getTrailArticles, getUserCollect } from '../../../WebAPI'
import { useHistory } from 'react-router-dom'
import { AuthContext, LoadingContext } from '../../../context'
import useLike from '../../../hooks/useLike'
import SmallRegionLoading from '../../../components/common/SmallRegionLoading'
import swal from 'sweetalert'

const TrailPageContainer = styled.div`
  width: 80%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const HeadFlex = styled.div`
  position: relative;
  ${MEDIA_QUERY.lg} {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Cover = styled.img`
  width: 100%;
  height: 60%;
  min-width: 320px;
  min-height: 160px;
  border-radius: ${RADIUS.lg} ${RADIUS.lg} 0 0;
  margin-bottom: 10px;
  object-fit: cover;
  ${MEDIA_QUERY.lg} {
    width: 45%;
    height: 400px;
    border-radius: ${RADIUS.lg} 0 ${RADIUS.lg} 0;
  }
`

const TitleAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 50%;
    margin-left: 10px;
    height: 400px;
  }
`

const Title = styled.div`
  width: fit-content;
  max-width: 80%;
  padding: 10px 20px;
  background: ${COLOR.white};
  font-size: ${FONT.md};
  margin-bottom: 15px;
  border-radius: ${RADIUS.md};
  box-shadow: ${EFFECT.shadow_light};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    margin-bottom: 20px;
    min-height: 15%;
  }
`

const CollectBlock = styled.div`
  font-size: ${FONT.lg};
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: ${RADIUS.md};
  padding: 10px;
  color: ${COLOR.white};
  svg {
    margin: 0 2px;
    width: 15px;
    height: 15px;
    fill: ${(props) => (props.thumb ? `${COLOR.green}` : ``)};
  }
  path {
    stroke: ${(props) => (props.thumb ? `${COLOR.green}` : `${COLOR.white}`)};
  }
  &:hover {
    cursor: pointer;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
    svg {
      margin: 0 5px;
      width: 25px;
      height: 25px;
    }
  }
`

const Desc = styled.div`
  font-size: ${FONT.s};
  line-height: ${FONT.lg};
  text-align: justify;
  margin-bottom: 30px;
  height: 100px;
  overflow: auto;
  ${MEDIA_QUERY.lg} {
    font-size: 16px;
    line-height: ${FONT.xl};
    height: 70%;
    letter-spacing: 2px;
  }
`

const InfoAndWeather = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA_QUERY.lg} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
  }
`

function TrailPage() {
  const { id } = useParams()
  const [trailInfo, setTrailInfo] = useState('')
  const [articles, setArticles] = useState(null)
  const { userInfo } = useContext(AuthContext)
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const [loadingCollect, setLoadingCollect] = useState(false)
  const history = useHistory()
  const { thumb, setThumb, handleClickLike } = useLike()

  useEffect(() => {
    setIsLoading(true)
    getTrails(id)
      .then((res) => {
        res.data.data[0]
          ? setTrailInfo(res.data.data[0])
          : history.push(`/trails`)
        setLoadingCollect(true)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
    getTrailArticles(id, '?limit=3')
      .then((res) => setArticles(res.data.data))
      .catch((error) => {
        console.error(error)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
    })
  }, [id, history, setIsLoading])

  useEffect(() => {
    if (userInfo) {
      getUserCollect(userInfo.user_id)
        .then((res) =>
          res.data.data.trails.forEach((trail) => {
            if (trail.trail_id == id) setThumb(true)
          })
        )
        .catch((error) => {
          console.error(error)
          swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
        })
    }
  }, [userInfo, id, setThumb, loadingCollect])

  return (
    <>
      {isLoading ? (
        <SmallRegionLoading isFullScreen/>
      ) : (
        <TrailPageContainer>
          <HeadFlex>
            <Cover src={trailInfo && trailInfo.cover_picture_url} />
            <TitleAndDesc>
              <Title>{trailInfo && trailInfo.title}</Title>
              <Desc>{trailInfo && trailInfo.description}</Desc>
            </TitleAndDesc>
            {userInfo && (
              <CollectBlock thumb={thumb} userInfo={userInfo} onClick={userInfo && handleClickLike}>
                <CollectIcon />
              </CollectBlock>
            )}
          </HeadFlex>
          <InfoAndWeather>
            <TrailInfo trailInfo={trailInfo} />
            <Weather location={trailInfo && trailInfo.location} />
          </InfoAndWeather>
          <TrailMap coordinate={trailInfo && trailInfo.coordinate} />
          {trailInfo && trailInfo.map_picture_url && (
            <TrailRoute routePic={trailInfo && trailInfo.map_picture_url} />
          )}
          {articles && articles.length !== 0 && <TrailArticles articles={articles} />}
          <TrailReviews />
        </TrailPageContainer>
      )}
    </>
  )
}

export default TrailPage
