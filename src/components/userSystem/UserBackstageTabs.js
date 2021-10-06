import { useState, useRef } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as ArticleManageIcon } from '../../icons/user/user_article_manage.svg'
import { ReactComponent as TodosIcon } from '../../icons/user/user_todos.svg'
import { ReactComponent as LikeArticlesIcon } from '../../icons/user/user_like_article.svg'
import { ReactComponent as CollectTrailsIcon } from '../../icons/user/user_collect_trail.svg'

const Tabs = styled.div`
  display: flex
  align-items: center;
`

const unActiveTabColor = `
  color: ${COLOR.black}
  background: white
  rect{
    fill: white
    stroke: none
  }
  path{
    fill: ${COLOR.green}
    stroke: ${COLOR.green}
  }
  &:hover {
    cursor: pointer
    background: ${COLOR.green}
    color: ${COLOR.white}
    path {
      fill: white
      stroke: white
    }
    rect {
    fill: ${COLOR.green}
    }
  }
`
const activeTabColor = `
  color: white
  background: ${COLOR.green}
  rect {
    fill: ${COLOR.green}
  }
   path {
    fill: white
    stroke: white
  }
`

const ArticlesTab = styled.div`
  ${unActiveTabColor}
  width: 30%
  height: 30px
  display: flex
  justify-content: center
  align-items: center
  margin-right: 5px
  font-size: ${FONT.s}
  border-radius: ${RADIUS.s} ${RADIUS.s} 0 0
  border: 2px solid ${COLOR.green}
  border-bottom: none
  svg {
    width: 20px
    margin: 0 2px
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md}
  }
  ${MEDIA_QUERY.lg} {
    width: 200px
    height: 50px
    margin-right: 20px
    font-size: ${FONT.md}
    svg {
      width: 30px
      margin: 0 2px
    }
  }
  ${(props) => props.tab === 'Articles' && activeTabColor}
`
const TodosTab = styled(ArticlesTab)`
  ${unActiveTabColor}
  ${(props) => props.tab === 'Todos' && activeTabColor}
`
const CollectTab = styled(ArticlesTab)`
  ${unActiveTabColor}
  ${(props) => props.tab === 'Collect' && activeTabColor}
`
const LikeTab = styled(ArticlesTab)`
  ${unActiveTabColor}
  ${(props) => props.tab === 'Like' && activeTabColor}
`
const TabTitle = styled.div`
  display: none;
  ${MEDIA_QUERY.md} {
    display: block;
  }
`

export default function UserBackstageTabs() {
  const [tab, setTab] = useState('Articles')
  return (
    <Tabs>
      <ArticlesTab
        tab={tab}
        onClick={() => {
          setTab('Articles')
        }}
      >
        <ArticleManageIcon />
        <TabTitle>文章管理</TabTitle>
      </ArticlesTab>
      <TodosTab
        tab={tab}
        onClick={() => {
          setTab('Todos')
        }}
      >
        <TodosIcon />
        <TabTitle>裝備清單</TabTitle>
      </TodosTab>
      <CollectTab
        tab={tab}
        onClick={() => {
          setTab('Collect')
        }}
      >
        <CollectTrailsIcon />
        <TabTitle>收藏步道</TabTitle>
      </CollectTab>
      <LikeTab
        tab={tab}
        onClick={() => {
          setTab('Like')
        }}
      >
        <LikeArticlesIcon />
        <TabTitle>按讚心得</TabTitle>
      </LikeTab>
    </Tabs>
  )
}
