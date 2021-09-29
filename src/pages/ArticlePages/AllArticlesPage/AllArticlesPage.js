import React from 'react'
import styled from 'styled-components'
import ArticleList from '../../../components/forumSystem/Article'
import Carousel from '../../../components/forumSystem/Carousel'
import { ReactComponent as Hot } from '../../../icons/hot.svg'
import { ReactComponent as Search } from '../../../icons/search.svg'
import {
  FONT,
  COLOR,
  EFFECT,
  RADIUS,
  MEDIA_QUERY,
} from '../../../constants/style'

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY.md} {
    width: 90%;
    display: flex;
    font-size: ${FONT.md};
  }
`

const Title = styled.span`
  font-size: ${FONT.md};

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xll};
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

  ${MEDIA_QUERY.md} {
    margin: 30px 0 20px 0;
  }

  ${MEDIA_QUERY.lg} {
    margin: 72px 0 41px 0;
  }
`

const FilterContainer = styled.div`
  padding-top: 30px;
  border-top: 1px solid ${COLOR.beige};
  margin-bottom: 10px;

  ${MEDIA_QUERY.md} {
    padding-top: 23px;
    margin-top: 9px;
  }
`

const Filter = styled.div`
  padding: 10px;
  width: 100%;
  background-color: ${COLOR.white};
  border-radius: ${RADIUS.lg};
  box-shadow: ${EFFECT.shadow_light};

  ${MEDIA_QUERY.md} {
    max-width: 1032px;
    margin: 0 auto;
  }
`

const UpperPart = styled.div`
  display: flex;
`

const SearchInput = styled.input`
  padding-left: 10px;
  width: 90%;
  border: 0;
  border-bottom: 1px solid ${COLOR.beige};
  background-color: ${COLOR.white};
  color: ${COLOR.gray};
`

const SearchIcon = styled.button`
  background-image: url('https://i.imgur.com/XG5YxVh.png');
  background-size: contain;
  border-bottom: 1px solid ${COLOR.beige};
  width: 30px;
  height: 30px;
`

const FilterTags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const FilterCheckbox = styled.input`
  display: none;
`

const FilterTag = styled.label`
  cursor: pointer;
  padding: 12px;
  border-bottom: 1px solid ${COLOR.beige};

  ${(props) =>
    props.isChecked === true &&
    `
    border: 1px ${COLOR.gray} solid;
    background: ${COLOR.beige};
    box-shadow: ${EFFECT.shadow_dark};
    `}
`

const BottomButton = styled.button`
  border-radius: ${RADIUS.lg};
  font-size: ${FONT.xs};
  border: 1px ${COLOR.green} solid;
  border-width: medium;
  box-shadow: ${EFFECT.shadow_dark};
  margin: 25px auto;
  padding: 5px 44px;
  cursor: pointer;

  &:hover {
    background: ${COLOR.green};
    color: #ffffff;
  }

  ${MEDIA_QUERY.md} {
    margin: 100px auto;
    font-size: ${FONT.lg};
    padding: 12px 100px;
  }

  ${MEDIA_QUERY.lg} {
    margin: 123px auto;
    font-size: ${FONT.xl};
    padding: 18px 131px;
  }
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

  const tags = [
    { name: '一日', isChecked: false },
    { name: '多日', isChecked: true },
    { name: '海景', isChecked: true },
    { name: '夜景', isChecked: true },
    { name: '山景', isChecked: false },
    { name: '城市景色', isChecked: true },
    { name: '賞花', isChecked: false },
    { name: '稀有動植物', isChecked: true },
    { name: '有水源', isChecked: false },
    { name: '危險地形', isChecked: true },
    { name: '需專業裝備', isChecked: false },
    { name: '登山小白體驗', isChecked: true },
    { name: '專業老手分享', isChecked: true },
    { name: 'GPX', isChecked: true },
    { name: '一日', isChecked: true },
  ]

  return (
    <Wrapper>
      <TitleGroup>
        <HotICon />
        <Title>熱門文章</Title>
      </TitleGroup>
      <Carousel slides={slides} />
      <FilterContainer>
        <Filter>
          <UpperPart>
            <SearchInput placeholder='關鍵字...' />
            <SearchIcon />
          </UpperPart>
          <FilterTags>
            {tags.map((tag) => {
              return (
                <FilterTag isChecked={tag.isChecked} htmlFor='tags'>
                  {tag.name}
                  <FilterCheckbox id='tags' type='checkbox' />
                </FilterTag>
              )
            })}
          </FilterTags>
        </Filter>
      </FilterContainer>
      <ArticleList
        src={'https://i.imgur.com/w2Y6y4z.jpg'}
        title={'礁溪林美石磐涼爽一日遊'}
        user={'水怪貓貓'}
        tags={['有水源', '賞花', '危險地形']}
        date={'2021.9.7 / 20:20:22'}
        content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
      />
      <ArticleList
        src={'https://i.imgur.com/w2Y6y4z.jpg'}
        title={'礁溪林美石磐涼爽一日遊'}
        user={'水怪貓貓'}
        tags={['有水源', '賞花', '危險地形']}
        date={'2021.9.7 / 20:20:22'}
        content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
      />
      <ArticleList
        src={'https://i.imgur.com/w2Y6y4z.jpg'}
        title={'礁溪林美石磐涼爽一日遊'}
        user={'水怪貓貓'}
        tags={['有水源', '賞花', '危險地形']}
        date={'2021.9.7 / 20:20:22'}
        content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
      />
      <BottomButton>看更多</BottomButton>
    </Wrapper>
  )
}

export default AllArticlesPage
