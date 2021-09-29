import React from 'react'
import styled from 'styled-components'
import { useState, Fragment } from 'react'
import ArticleList from '../../../components/forumSystem/Article'
import { ReactComponent as Hot } from '../../../icons/hot.svg'
import { ReactComponent as Right_Arrow } from '../../../icons/arrow_right.svg'
import { ReactComponent as Left_Arrow } from '../../../icons/arrow_left.svg'
import { ReactComponent as avatar } from '../../../icons/default_avatar.svg'
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
// Carousel

const SlideImage = styled.img`
  width: 400px;
  height: 250px;
  border-radius: ${RADIUS.lg};

  ${MEDIA_QUERY.md} {
    width: 300px;
    height: 307px;
    object-fit: cover;
    margin-right: 21px;
  }
`

const Slider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftArrow = styled(Left_Arrow)`
  position: absolute;
  top: 50%;
  left: -20px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;

  ${MEDIA_QUERY.md} {
  }
`

const RightArrow = styled(Right_Arrow)`
  position: absolute;
  top: 50%;
  right: -20px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;

  ${MEDIA_QUERY.md} {
  }
`
// 幻燈片文章內容
const ArticleContent = styled.div`
  display: none;

  ${MEDIA_QUERY.md} {
    display: flex;
    font-size: ${FONT.md};
    padding: 10px 10px 10px 0;
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
    line-height: 2rem;
  }
`

const ArticleTitle = styled.h1`
  display: none;

  ${MEDIA_QUERY.md} {
    padding: 10px 10px 8px 0;
    display: flex;
    font-size: 36px;
  }
`

const ArticleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
`
// 待修改

const ArticleTag = styled.div`
  display: none;
  color: #ffffff;

  ${MEDIA_QUERY.md} {
    display: flex;
    border-radius: ${RADIUS.s};
    background-color: ${COLOR.yellow_dark};
    font-size: ${FONT.xs};
    margin: 5px 3px;
    padding: 6px 14px;

    &:first-child {
    }
  }

  ${MEDIA_QUERY.lg} {
    display: flex;
    border-radius: ${RADIUS.s};
    background-color: ${COLOR.yellow_dark};
    font-size: ${FONT.xs};
    margin: 5px 3px;
    padding: 6px 14px;

    &:first-child {
    }
  }
`

const ImageContainer = styled.div`
  width: 400px;
  height: 250px;
  margin: 20px;

  ${MEDIA_QUERY.md} {
    display: flex;
    border-radius: ${RADIUS.lg};
    background: ${COLOR.white};
    width: 1173px;
    height: 307px;
    margin: 20px;
    box-shadow: ${EFFECT.shadow_light};
  }
`
const ArticleInfoContainer = styled.div``

function AllArticlesPage() {
  const slides = [
    {
      image:
        'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/05/21/draft/7910911.jpg&s=Y&x=0&y=0&sw=1200&sh=801&exp=3600',
      title: '礁溪林美石磐涼爽一日遊',
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
        ,
        '登山小白體驗',
        ,
        '登山小白體驗',
        ,
        '登山小白體驗',
        ,
        '登山小白體驗',
        ,
        '登山小白體驗',
      ],
      name: '水怪貓貓',
    },
    {
      image: 'https://i.imgur.com/w2Y6y4z.jpg',
      title: '中級山魔幻森林一日遊',
      content: `帶你一窺中級山的神秘森林，步道沿舊水圳整建，林美石磐步道有著低海拔亞熱帶溪谷的景色，
        步道沿舊水圳整建，現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，散發陣陣芬多精，
        走在其中清爽無比，非常適合闔家一起健行。...`,
      tags: ['一日', '有水源', '危險地形'],
    },
    {
      image: 'https://i.imgur.com/iG8fKuf.jpg',
      title: '塚呂馬布池一日遊',
      content: `漫步在塚呂馬布池畔，步道沿舊水圳整建，林美石磐步道有著低海拔亞熱帶溪谷的景色，
        步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村
        ，而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、...`,
      tags: ['一日', '有水源', '專業裝備'],
    },
  ]
  const [current, setCurrent] = useState(0)
  const length = slides.length

  if (!Array.isArray(slides) || slides.length === 0) {
    return null
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <Wrapper>
      <TitleGroup>
        <HotICon />
        <Title>熱門文章</Title>
      </TitleGroup>
      <Slider>
        <LeftArrow onClick={prevSlide}>&lsaquo;</LeftArrow>
        <RightArrow onClick={nextSlide}>&rsaquo;</RightArrow>
        <ImageContainer>
          {slides.map((slide, index) => {
            return (
              <>
                {index === current && (
                  <>
                    <SlideImage src={slide.image} alt='' />
                    <ArticleInfoContainer>
                      <ArticleTitle>{slide.title}</ArticleTitle>
                      <ArticleTags>
                        {slide.tags.map((tag) => {
                          return <ArticleTag>{tag}</ArticleTag>
                        })}
                      </ArticleTags>
                      <ArticleContent>{slide.content}</ArticleContent>
                    </ArticleInfoContainer>
                  </>
                )}
              </>
            )
          })}
        </ImageContainer>
      </Slider>
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
    </Wrapper>
  )
}

export default AllArticlesPage
