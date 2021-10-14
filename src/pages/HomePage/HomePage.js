import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, RADIUS, FONT, MEDIA_QUERY } from '../../constants/style'
import Map from '../../components/common/Map'
import ArticleList from '../../components/forumSystem/Article'
import { ActiveTrailContext } from '../../context'
import { useState, useEffect } from 'react'
import { getArticlesUnderTrail } from '../../WebAPI'
import { trailIdTitleMap } from '../../constants/paramsMap'

const HomepageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`

const HomePageWrapper = styled.div`
  margin: 20px 0px;
  ${MEDIA_QUERY.lg} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`
const MapWrapper = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid ${COLOR.beige};
  border-radius: ${RADIUS.md};
  overflow: hidden;
  z-index: 0;
  ${MEDIA_QUERY.lg} {
    width: 50%;
    border-radius: 0px ${RADIUS.md} ${RADIUS.md} 0px;
  }
`
const ArticleListWrapper = styled.div`
  width: 100%;
  height: 600px;
  margin: 20px auto;
  border: none;
  padding: 20px 20px 40px 20px;
  overflow: scroll;
  ${MEDIA_QUERY.lg} {
    width: 49%;
    border: 1px solid ${COLOR.beige};
    border-radius: ${RADIUS.md} 0px 0px ${RADIUS.md};
  }
`
const TrialTitleWrapper = styled.div`
  text-align: center;
  ${MEDIA_QUERY.lg} {
    text-align: start;
    border-left: 20px solid ${COLOR.brown};
    padding-left: 10px;
  }
`

const TrialTitleName = styled(Link)`
  font-size: ${FONT.lg};
  color: black;
  border-left: 20px solid ${COLOR.brown};
  padding-left: 10px;
  ${MEDIA_QUERY.lg} {
    border-left: none;
    font-size: ${FONT.logo};
  }
`
const TrialTitleLocation = styled.div`
  font-size: ${FONT.md};
`
const TrialArticleNumber = styled.div`
  font-size: ${FONT.s};
  color: ${COLOR.gray};
  margin-left: 20px;
`
const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  ${MEDIA_QUERY.lg} {
    justify-content: space-between;
    padding-left: 10px;
  }
`
const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
`
const TrialArticleWrapper = styled.div`
  width: 100%;
`
const Divider = styled.div`
  width: 95%;
  height: 2px;
  background-color: ${COLOR.white};
  margin: 20px auto;
`

function HomePage() {
  const [activeTrailArticles, setActiveTrailArticles] = useState([{}])

  useEffect(() => {
    getArticlesUnderTrail(1).then((res) => {
      setActiveTrailArticles(res.data.data)
    })
  }, [])
  return (
    <>
      <ActiveTrailContext.Provider
        value={{ activeTrailArticles, setActiveTrailArticles }}
      >
        <HomepageContainer>
          <HomePageWrapper>
            <MapWrapper>
              <Map />
            </MapWrapper>
            <ArticleListWrapper>
              <TrialTitleWrapper>
                <TrialTitleName to='trails/1'>
                  蘇花古道：大南澳越嶺段
                </TrialTitleName>
                <SubTitleWrapper>
                  <TrialTitleLocation>宜蘭縣南澳鄉</TrialTitleLocation>
                  <LinkWrapper>
                    <TrialArticleNumber>
                      {activeTrailArticles.length} 篇心得
                    </TrialArticleNumber>
                  </LinkWrapper>
                </SubTitleWrapper>
              </TrialTitleWrapper>
              <Divider />
              <TrialArticleWrapper>
                {activeTrailArticles.map((articleInfos) => (
                  <ArticleList
                    key={articleInfos.article_id}
                    articleImgSrc={articleInfos.cover_picture_url}
                    avatarImgSrc={'https://i.imgur.com/eGREu6v.png'}
                    title={articleInfos.title}
                    user={'水怪貓貓'}
                    tags={['有水源', '賞花', '危險地形']}
                    date={articleInfos.departure_time}
                    content={articleInfos.content}
                    lessRwd={true}
                  />
                ))}
              </TrialArticleWrapper>
            </ArticleListWrapper>
          </HomePageWrapper>
        </HomepageContainer>
      </ActiveTrailContext.Provider>
    </>
  )
}

export default HomePage
