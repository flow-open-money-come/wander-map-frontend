import React, { useState, useEffect } from 'react'
import { getUserCollect } from '../../WebAPI'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as EmptyIcon } from '../../icons/user/user_empty_collect.svg'
import TrailCard from '../trailSystem/TrailCard'

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`
const SearchBar = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: ${RADIUS.s};
  width: 95%;
  height: 25px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  padding-left: 3px;
  ${MEDIA_QUERY.lg} {
    margin: 30px auto;
    height: 45px;
    svg {
      width: 30px;
      height: 30px;
      margin: 0 5px;
    }
  }
`
const SearchField = styled.input`
  width: calc(100% - 20px);
  border: none;
  outline: none;
  ${MEDIA_QUERY.lg} {
    width: calc(100% - 30px);
    font-size: ${FONT.lg};
  }
`

const TrailsWrapper = styled.div`
  margin: 0px auto;
  width: 95%;
  ${MEDIA_QUERY.lg} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`
const EmptyInfo = styled.div`
  margin: 80px auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0.8;
  svg {
    width: 130px;
    height: 130px;
    margin: 0 20px;
  }
`
const EmptyMsg = styled.div`
  font-size: ${FONT.md};
  font-weight: bold;
  color: ${COLOR.gray};
`

export default function UserCollect() {
  const [userCollectData, setUserCollectData] = useState({
    trails: [
      {
        title: '',
        location: '',
        cover_picture_url: '',
        required_time: '',
        season: '',
      },
    ],
  })
  const { userID } = useParams()

  useEffect(() => {
    getUserCollect(userID)
      .then((res) => {
        setUserCollectData(res.data.data)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  return (
    <Block>
      <SearchBar style={{ display: 'none' }}>
        <SearchIcon />
        <SearchField></SearchField>
      </SearchBar>
      <TrailsWrapper>
        {userCollectData.trails.length !== 0 ? (
          userCollectData.trails.map((trailInfo) => (
            <TrailCard trailInfo={trailInfo} />
          ))
        ) : (
          <EmptyInfo>
            <EmptyIcon />
            <EmptyMsg>
              還沒有收藏喔～
              <br />
              快去看看有那些步道吧
            </EmptyMsg>
          </EmptyInfo>
        )}
      </TrailsWrapper>
    </Block>
  )
}
