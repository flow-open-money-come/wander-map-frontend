import React, { useState } from 'react'
import styled from 'styled-components'
import ArticleList from '../../../components/forumSystem/Article'
import Carousel from '../../../components/forumSystem/Carousel'
import ForumFilter from '../../../components/forumSystem/Filter'
import { ReactComponent as Hot } from '../../../icons/hot.svg'
import { FONT, MEDIA_QUERY } from '../../../constants/style'
import { NavBarButton } from '../../../components/common/Button'

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY.md} {
    width: 90%;
    font-size: ${FONT.md};
  }
`

const Title = styled.span`
  font-size: ${FONT.lg};

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`

const HotICon = styled(Hot)`
  width: 29px;
  height: 29px;
  padding-top: 10px;
  transform: translate(4px, 2px);

  ${MEDIA_QUERY.md} {
    width: 40px;
    height: 40px;
    transform: translate(4px, 6px);
  }

  ${MEDIA_QUERY.lg} {
    width: 50px;
    height: 50px;
  }
`

const TitleGroup = styled.div`
  margin: 0 auto;
`

const BottomButton = styled.button`
  ${NavBarButton}
  font-size: ${FONT.md};
  margin: 50px 0px 100px 50%;
  transform: translate(-50%);
`
const ArticleListWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

function AllArticlesPage() {
  const slides = [
    {
      image:
        'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/05/21/draft/7910911.jpg&s=Y&x=0&y=0&sw=1200&sh=801&exp=3600',
      title: '林美石磐涼爽一日遊',
      content: `林美石磐步道有著低海拔亞熱帶溪谷的景色，
        步道沿舊水圳整建，現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，散發陣陣芬多精，
        ，而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、...`,
      tags: [
        '一日',
        '有水源',
        '登山小白體驗',
        '登山小白體驗',
        '登山小白體驗',
        '登山小白體驗',
        '登山小白體驗',
        '登山小白體驗',
        '登山小白體驗',
        '登山小白體驗',
        '登山小白體驗',
      ],
      username: '水怪貓貓',
      date: '2021.9.7 / 20:20:22',
      userAvatar: 'https://i.imgur.com/eGREu6v.png',
      likes: 100,
    },
    {
      image: 'https://i.imgur.com/w2Y6y4z.jpg',
      title: '中級山魔幻森林一日遊',
      content: `帶你一窺中級山的神秘森林，步道沿舊水圳整建，林美石磐步道有著低海拔亞熱帶溪谷的景色，
        步道沿舊水圳整建，現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，散發陣陣芬多精，
        走在其中清爽無比，非常適合闔家一起健行。...`,
      tags: ['一日', '有水源', '危險地形'],
      username: '水怪貓貓',
      date: '2021.9.7 / 20:20:22',
      userAvatar: 'https://i.imgur.com/eGREu6v.png',
      likes: 120,
    },
    {
      image: 'https://i.imgur.com/iG8fKuf.jpg',
      title: '塚呂馬布池一日遊',
      content: `漫步在塚呂馬布池畔，步道沿舊水圳整建，林美石磐步道有著低海拔亞熱帶溪谷的景色，
        步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村
        ，而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、...`,
      tags: ['一日', '有水源', '專業裝備'],
      username: '水怪貓貓',
      date: '2021.9.7 / 20:20:22',
      userAvatar: 'https://i.imgur.com/eGREu6v.png',
      likes: 300,
    },
  ]

  const [tags, setTags] = useState([
    { tag_id: 1, tag_name: '一日', isChecked: false },
    { tag_id: 2, tag_name: '多日', isChecked: false },
    { tag_id: 3, tag_name: '海景', isChecked: false },
    { tag_id: 4, tag_name: '夜景', isChecked: false },
    { tag_id: 5, tag_name: '山景', isChecked: false },
    { tag_id: 6, tag_name: '城市景色', isChecked: false },
    { tag_id: 7, tag_name: '賞花', isChecked: false },
    { tag_id: 8, tag_name: '稀有動植物', isChecked: false },
    { tag_id: 9, tag_name: '有水源', isChecked: false },
    { tag_id: 10, tag_name: '危險地形', isChecked: false },
    { tag_id: 11, tag_name: '需專業裝備', isChecked: false },
    { tag_id: 12, tag_name: '登山小白體驗', isChecked: false },
    { tag_id: 13, tag_name: '專業老手分享', isChecked: false },
    { tag_id: 14, tag_name: 'GPX', isChecked: false },
  ])

  return (
    <Wrapper>
      <TitleGroup>
        <HotICon />
        <Title>熱門文章</Title>
      </TitleGroup>
      <Carousel slides={slides} />
      <ForumFilter tags={tags} setTags={setTags} />
      <ArticleListWrapper>
        <ArticleList
          articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
          title={'礁溪林美石磐涼爽一日遊'}
          user={'水怪貓貓'}
          tags={['有水源', '賞花', '危險地形']}
          date={'2021.9.7 / 20:20:22'}
          content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
          avatarImgSrc={'https://i.imgur.com/YGh2ZNl.png'}
        />
        <ArticleList
          articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
          title={'礁溪林美石磐涼爽一日遊'}
          user={'水怪貓貓'}
          tags={['有水源', '賞花', '危險地形']}
          date={'2021.9.7 / 20:20:22'}
          content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
          avatarImgSrc={'https://i.imgur.com/YGh2ZNl.png'}
        />
        <ArticleList
          articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
          title={'礁溪林美石磐涼爽一日遊'}
          user={'水怪貓貓'}
          tags={['有水源', '賞花', '危險地形']}
          date={'2021.9.7 / 20:20:22'}
          content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
          avatarImgSrc={'https://i.imgur.com/YGh2ZNl.png'}
        />
        <BottomButton>看更多</BottomButton>
      </ArticleListWrapper>
    </Wrapper>
  )
}

export default AllArticlesPage
