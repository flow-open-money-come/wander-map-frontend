import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as ArticleManageIcon } from '../../icons/user/user_article_manage.svg'
import { ReactComponent as TodosIcon } from '../../icons/user/user_todos.svg'
import { ReactComponent as LikeArticlesIcon } from '../../icons/user/user_like_article.svg'
import { ReactComponent as CollectTrailsIcon } from '../../icons/user/user_collect_trail.svg'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'

import TrailCard from '../trailSystem/TrailCard'

const Tabs = styled.div`
  display: flex;
  align-items: center;
`
const UsersManagementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  ${MEDIA_QUERY.lg} {
    width: 70%;
  }
`
const ArticlesTab = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: ${FONT.s};
  border-radius: ${RADIUS.s} ${RADIUS.s} 0 0;
  border: 2px solid ${COLOR.green};
  border-bottom: none;
  color: black;
  background: white;
  svg {
    width: 20px;
    margin: 0 2px;
  }
  rect {
    stroke: none;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    width: 200px;
    height: 50px;
    margin-right: 20px;
    font-size: ${FONT.lg};
    svg {
      width: 40px;
      margin: 0 2px;
    }

    &:hover {
      cursor: pointer;
      background: ${COLOR.green};
      color: ${COLOR.white};
      path {
        fill: white;
        stroke: white;
      }
      rect {
        fill: ${COLOR.green};
      }
    }
  }
`
const TodosTab = styled(ArticlesTab)``
const CollectTab = styled(ArticlesTab)`
  color: white;
  background: ${COLOR.green};
  rect {
    fill: ${COLOR.green};
  }
  path {
    fill: white;
    stroke: white;
  }
`
const LikeTab = styled(ArticlesTab)``

const TabTitle = styled.div`
  display: none;
  ${MEDIA_QUERY.md} {
    display: block;
  }
`
const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
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
const AllTrialPageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`
const AllTrailPageTitleWrapper = styled.div`
  font-size: ${FONT.lg};
  font-weight: bold;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`

const FilteredTrailsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  ${MEDIA_QUERY.lg} {
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

export default function UserCollect({ setTab, recycle, setRecycle }) {
  const FeaturedTrailInfo = {
    林美石磐步道:
      'https://images.unsplash.com/photo-1581339538525-978298a19203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    枕頭山步道:
      'https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    加里山登山步道:
      'https://images.unsplash.com/photo-1558734918-dfc4fe470147?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
  }
  const FeaturedTrailLength = Object.keys(FeaturedTrailInfo).length
  const [currentImgIndex, setCurrentImageIndex] = useState(0)

  const handelCarousel = () => {
    if (currentImgIndex < FeaturedTrailLength - 1) {
      return setCurrentImageIndex(currentImgIndex + 1)
    }
    setCurrentImageIndex(0)
  }
  useEffect(() => {
    setTimeout(handelCarousel, 5000)
  })

  const trailInfo = {
    title: '林美石磐步道',
    location: '宜蘭縣礁溪鄉',
    cover_picture_url:
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1806&q=80',
    required_time: '一天',
    season: '四季皆宜',
  }
  return (
    <UsersManagementContainer>
      <Tabs>
        <ArticlesTab
          onClick={() => {
            setTab('Articles')
          }}
        >
          <ArticleManageIcon />
          <TabTitle>文章管理</TabTitle>
        </ArticlesTab>
        <TodosTab
          onClick={() => {
            setTab('Todos')
          }}
        >
          <TodosIcon />
          <TabTitle>裝備清單</TabTitle>
        </TodosTab>
        <CollectTab
          onClick={() => {
            setTab('Collect')
          }}
        >
          <CollectTrailsIcon />
          <TabTitle>收藏步道</TabTitle>
        </CollectTab>
        <LikeTab
          onClick={() => {
            setTab('Like')
          }}
        >
          <LikeArticlesIcon />
          <TabTitle>按讚心得</TabTitle>
        </LikeTab>
      </Tabs>
      <Block>
        <SearchBar>
          <SearchIcon />
          <SearchField></SearchField>
        </SearchBar>
        <AllTrialPageWrapper>
          <FilteredTrailsWrapper>
            <TrailCard trailInfo={trailInfo} />
            <TrailCard trailInfo={trailInfo} />
            <TrailCard trailInfo={trailInfo} />
            <TrailCard trailInfo={trailInfo} />
          </FilteredTrailsWrapper>
        </AllTrialPageWrapper>
      </Block>
    </UsersManagementContainer>
  )
}