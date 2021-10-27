import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, RADIUS, FONT, MEDIA_QUERY } from '../../constants/style'
import Map from '../../components/common/Map'
import ArticleList from '../../components/forumSystem/Article'
import { ActiveTrailContext, LoadingContext } from '../../context'
import { useState, useEffect, useContext } from 'react'
import { getTrailArticles } from '../../WebAPI'
import SmallRegionLoading from '../../components/common/SmallRegionLoading'
import swal from 'sweetalert'

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
  height: 450px;
  border: 1px solid ${COLOR.beige};
  border-radius: ${RADIUS.md};
  overflow: hidden;
  z-index: 0;
  ${MEDIA_QUERY.lg} {
    width: 50%;
    height: 600px;
    border-radius: 0px ${RADIUS.md} ${RADIUS.md} 0px;
  }
`
const ArticleListWrapper = styled.div`
  width: 100%;
  margin: 20px auto 60px auto;
  border: none;
  ${MEDIA_QUERY.lg} {
    width: 49%;
    height: 600px;
    border: 1px solid ${COLOR.beige};
    border-radius: ${RADIUS.md} 0px 0px ${RADIUS.md};
    overflow-y: scroll;
    padding: 20px;
    margin-bottom: 20px;
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
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${MEDIA_QUERY.lg} {
    justify-content: space-between;
    padding-left: 10px;
  }
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
const NoMatchMsg = styled.div`
  font-size: ${FONT.md};
  font-weight: bold;
  margin: 0 auto;
  color: ${COLOR.gray};
`

function HomePage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const [activeTrailArticles, setActiveTrailArticles] = useState({
    activeTrailInfo: {
      trailId: '',
      trailTitle: '',
      trailLocation: '',
      center: { lat: '', lng: '' },
    },
    articles: [],
  })

  useEffect(() => {
    setIsLoading(true)
    getTrailArticles(1, '?limit=100')
      .then((res) => {
        if (res.data.success) {
          setActiveTrailArticles({
            activeTrailInfo: {
              trailId: 1,
              trailTitle: '蘇花古道：大南澳越嶺段',
              trailLocation: '宜蘭縣南澳鄉',
              center: {
                lat: 24.482340609862774,
                lng: 121.83785521632522,
              },
            },
            articles: res.data.data,
          })
          setIsLoading(false)
        }
      })
      .catch(() => {
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
        setIsLoading(false)
      })
  }, [setIsLoading])
  return (
    <>
      {isLoading ? (
        <SmallRegionLoading />
      ) : (
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
                  <TrialTitleName
                    to={`trails/${activeTrailArticles.activeTrailInfo.trailId}`}
                  >
                    {activeTrailArticles.activeTrailInfo.trailTitle}
                  </TrialTitleName>
                  <SubTitleWrapper>
                    <TrialTitleLocation>
                      {activeTrailArticles.activeTrailInfo.trailLocation}
                    </TrialTitleLocation>

                    <TrialArticleNumber>
                      {activeTrailArticles.articles.length} 篇心得
                    </TrialArticleNumber>
                  </SubTitleWrapper>
                </TrialTitleWrapper>
                <Divider />
                <TrialArticleWrapper>
                  {activeTrailArticles.articles.length !== 0 ? (
                    activeTrailArticles.articles.map((articleInfos) => (
                      <ArticleList
                        key={articleInfos.article_id}
                        articleImgSrc={articleInfos.cover_picture_url}
                        avatarImgSrc={articleInfos.icon_url}
                        title={articleInfos.title}
                        user={articleInfos.author_name}
                        tags={
                          articleInfos.tag_names &&
                          articleInfos.tag_names.split(',')
                        }
                        date={new Date(
                          new Date(articleInfos.created_at).getTime() +
                            8 * 3600 * 1000
                        ).toLocaleString('ja')}
                        content={articleInfos.content}
                        lessRwd={true}
                        articlePage={`/articles/${articleInfos.article_id}`}
                        authorId={articleInfos.author_id}
                      />
                    ))
                  ) : (
                    <NoMatchMsg>目前還沒有心得唷，快來分享吧！</NoMatchMsg>
                  )}
                </TrialArticleWrapper>
              </ArticleListWrapper>
            </HomePageWrapper>
          </HomepageContainer>
        </ActiveTrailContext.Provider>
      )}
    </>
  )
}

export default HomePage
