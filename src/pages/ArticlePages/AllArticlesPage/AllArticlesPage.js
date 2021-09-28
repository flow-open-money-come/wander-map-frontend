import React from 'react'
import styled from 'styled-components'
import { useState, Fragment } from 'react'
import { ReactComponent as Hot } from '../../../icons/hot.svg'
import { ReactComponent as Right_Arrow } from '../../../icons/arrow_right.svg'
import { ReactComponent as Left_Arrow } from '../../../icons/arrow_left.svg'
import { ReactComponent as avatar } from '../../../icons/default_avatar.svg'
import { FONT, COLOR, EFFECT, RADIUS } from '../../../constants/style'

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 90%;
    display: flex;
    font-size: ${FONT.md};
  }
`

const Title = styled.span`
  font-size: 48px;
  @media screen and (max-width: 500px) {
    font-size: ${FONT.md};
  }
`

const HotICon = styled(Hot)`
  width: 50px;
  height: 50px;
  transform: translate(4px, 6px);

  @media screen and (max-width: 500px) {
    width: 29px;
    height: 29px;
    padding-top: 10px;
    transform: translate(4px, 2px);
  }
`

const TitleGroup = styled.div`
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
`

const SlideImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: ${RADIUS.lg};

  @media screen and (max-width: 500px) {
    width: 400px;
    height: 250px;
  }
`

const Slider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftArrow = styled(Left_Arrow)`
  width: 49%;
  position: absolute;
  top: 50%;
  left: -100px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
  }
`

const RightArrow = styled(Right_Arrow)`
  width: 49%;
  position: absolute;
  top: 50%;
  right: -100px;
  font-size: 2rem;
  opacity: 0;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
  }
`

const ArticleContent = styled.div`
  font-size: ${FONT.md};
  padding: 20px;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const ArticleTitle = styled.h1`
  padding: 20px;
  font-size: 36px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const ArticleTags = styled.div`
  line-height: 5px;
  margin: 10px;
  padding: 10px;
  font-size: ${FONT.xs};
  width: 50px;
  height: 15px;
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};

  @media screen and (max-width: 500px) {
    display: none;
  }
`

const ImageContainer = styled.div`
  display: flex;
  border-radius: ${RADIUS.lg};
  background: ${COLOR.white};
  width: 872px;
  height: 300px;
  margin: 20px;
  box-shadow: ${EFFECT.shadow_light};

  @media screen and (max-width: 500px) {
    width: 400px;
    height: 250px;
    margin: 20px;
  }
`

// 共用心得

const ArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ArticlesContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 150px;
  display: flex;
  border-bottom: ${COLOR.beige} 1px solid;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

const ArticlesImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: ${RADIUS.lg};
`
const UserAvatar = styled(avatar)`
  width: 30px;
  height: 30px;
`

const ArticlesTags = styled.div`
  text-align: center;
  margin: 5px 0;
  padding: 5px;
  line-height: 8px;
  font-size: ${FONT.xs};
  width: 15%;
  height: 10%;
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};

  @media screen and (max-width: 500px) {
    width: 15%;
  }
`
const ArticlesContent = styled.div`
  width: 80%;
  max-height: 30px;
  font-size: ${FONT.s};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 10px 0;

  @media screen and (max-width: 500px) {
    width: 15%;
  }
`
const ArticlesTitle = styled.div``

const ArticlesInfoContainer = styled.div`
  margin-left: 10px;
`
const ArticlesUser = styled.div`
  margin-top: 5px;
  display: flex;
`
const Date = styled.div`
  font-size: 11px;
`

const UserName = styled.div``

const UserInfo = styled.div`
  font-size: 11px;
  padding-top: 5px;
  margin-left: 5px;
`

function AllArticlesPage() {
  const slides = [
    {
      image:
        'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2020/05/21/draft/7910911.jpg&s=Y&x=0&y=0&sw=1200&sh=801&exp=3600',
      title: '礁溪林美石磐涼爽一日遊',
      content: `林美石磐步道有著低海拔亞熱帶溪谷的景色，
        步道沿舊水圳整建，現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，散發陣陣芬多精，
        ，而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、...`,
      tags: ['一日', '有水源', '登山小白體驗'],
    },
    {
      image: 'https://i.imgur.com/w2Y6y4z.jpg',
      title: '中級山魔幻森林一日遊',
      content: `帶你一窺中級山的神秘森林，步道沿舊水圳整建，林美石磐步道有著低海拔亞熱帶溪谷的景色，
        步道沿舊水圳整建，現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，散發陣陣芬多精，
        走在其中清爽無比，非常適合闔家一起健行。...`,
      tags: ['一日', '有水源', '登山小白體驗'],
    },
    {
      image: 'https://i.imgur.com/iG8fKuf.jpg',
      title: '塚呂馬布池一日遊',
      content: `漫步在塚呂馬布池畔，步道沿舊水圳整建，林美石磐步道有著低海拔亞熱帶溪谷的景色，
        步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村
        ，而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、...`,
      tags: ['一日', '有水源', '登山小白體驗'],
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
                {index === current && <SlideImage src={slide.image} alt='' />}
                <ArticleInfoContainer>
                  {index === current && (
                    <ArticleTitle>{slide.title}</ArticleTitle>
                  )}
                  {index === current && (
                    <ArticleTags>{slide.tags[0]}</ArticleTags>
                  )}
                  {index === current && (
                    <ArticleContent>{slide.content}</ArticleContent>
                  )}
                </ArticleInfoContainer>
              </>
            )
          })}
        </ImageContainer>
      </Slider>
      <ArticlesContainer>
        <ArticlesImg src='https://i.imgur.com/w2Y6y4z.jpg' />
        <ArticlesInfoContainer>
          <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
          <ArticlesTags>一日</ArticlesTags>
          <ArticlesContent>
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
          </ArticlesContent>
          <ArticlesUser>
            <UserAvatar />
            <UserInfo>
              <UserName>水怪貓貓</UserName>
              <Date>2021.9.7 / 20:20:22</Date>
            </UserInfo>
          </ArticlesUser>
        </ArticlesInfoContainer>
      </ArticlesContainer>
    </Wrapper>
  )
}

export default AllArticlesPage
