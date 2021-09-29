import React from 'react'
import styled from 'styled-components'
import { useState, Fragment } from 'react'
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
    font-size: ${FONT.md};
    padding: 20px;
    line-height: 30px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: wrap;
  }
`

const ArticleTitle = styled.h1`
  display: none;

  ${MEDIA_QUERY.md} {
    padding: 20px;
    font-size: 36px;
  }
`

const ArticleTags = styled.div`
  display: none;

  ${MEDIA_QUERY.md} {
    line-height: 5px;
    margin: 10px;
    padding: 10px;
    font-size: ${FONT.xs};
    width: 50px;
    height: 15px;
    border-radius: ${RADIUS.s};
    background-color: ${COLOR.yellow_dark};
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

// 共用心得

const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 35px auto 0px auto;
  padding-bottom: 20px;
  border-bottom: ${COLOR.beige} 1px solid;

  ${MEDIA_QUERY.md} {
    width: 100%;
    border-bottom: ${COLOR.beige} 1px solid;
  }
`
const ArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ArticlesImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${RADIUS.lg};
  align-self: center;

  ${MEDIA_QUERY.md} {
    width: 130px;
    height: 130px;
    margin-right: 13px;
  }

  ${MEDIA_QUERY.lg} {
    width: 160px;
    height: 160px;
    margin-right: 13px;
  }
`
const UserAvatar = styled(avatar)`
  width: 30px;
  height: 30px;

  ${MEDIA_QUERY.md} {
    width: 45px;
    height: 45px;
    margin-right: 13px;
  }
`
const ArticlesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${MEDIA_QUERY.md} {
  }
`
const ArticlesTag = styled.span`
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};
  font-size: ${FONT.xs};
  margin: 5px 3px;
  padding: 4px;

  ${MEDIA_QUERY.md} {
    padding: 6px 15px;
    margin-right: 10px;
  }

  ${MEDIA_QUERY.lg} {
    &:first-child {
      margin-left: 30px;
    }
    padding: 6px 15px;
    margin-right: 17px;
  }
`
const ArticlesContent = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
  font-size: ${FONT.s};
  max-height: 3em;
  line-height: 1.5em;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`
const ArticlesTitle = styled.div`
  margin-bottom: 5px;
  font-weight: bold;

  ${MEDIA_QUERY.md} {
    line-height: 1.5em;
    font-size: ${FONT.md};
  }

  ${MEDIA_QUERY.lg} {
    line-height: 1.5em;
    font-size: ${FONT.lg};
  }
`

const ArticlesInfoContainer = styled.div`
  margin-left: 10px;
`
const ArticlesUser = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY.md} {
    margin-top: 9px;
  }
`
const ArticlesDate = styled.div`
  font-size: 11px;
`

const UserName = styled.div`
  margin-bottom: 5px;
`

const UserInfo = styled.div`
  font-size: 11px;
  padding-top: 2px;
  margin-left: 5px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
    padding-top: 10px;
  }
`

const ReadMore = styled.button`
  display: none;

  ${MEDIA_QUERY.md} {
    display: inline;
    color: ${COLOR.gray};
    cursor: pointer;
  }
`

const ArticlesInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${MEDIA_QUERY.md} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
const TitleAndTags = styled.div`
  ${MEDIA_QUERY.lg} {
    display: flex;
  }
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
                {index === current && (
                  <>
                    <SlideImage src={slide.image} alt='' />
                    <ArticleInfoContainer>
                      <ArticleTitle>{slide.title}</ArticleTitle>
                      {slide.tags.map((tag) => {
                        ;<ArticleTags>{tag}</ArticleTags>
                      })}
                      <ArticleContent>{slide.content}</ArticleContent>
                    </ArticleInfoContainer>
                  </>
                )}
              </>
            )
          })}
        </ImageContainer>
      </Slider>
      <ArticlesContainer>
        <ArticlesImg src='https://i.imgur.com/w2Y6y4z.jpg' />
        <ArticlesInfoContainer>
          <TitleAndTags>
            <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
            <ArticlesTags>
              <ArticlesTag>一日</ArticlesTag>
              <ArticlesTag>賞花</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
            </ArticlesTags>
          </TitleAndTags>
          <ArticlesContent>
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
          </ArticlesContent>
          <ArticlesInfo>
            <ArticlesUser>
              <UserAvatar />
              <UserInfo>
                <UserName>水怪貓貓</UserName>
                <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
              </UserInfo>
            </ArticlesUser>
            <ReadMore>閱讀全文</ReadMore>
          </ArticlesInfo>
        </ArticlesInfoContainer>
      </ArticlesContainer>
      <ArticlesContainer>
        <ArticlesImg src='https://i.imgur.com/w2Y6y4z.jpg' />
        <ArticlesInfoContainer>
          <TitleAndTags>
            <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
            <ArticlesTags>
              <ArticlesTag>一日</ArticlesTag>
              <ArticlesTag>賞花</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
            </ArticlesTags>
          </TitleAndTags>
          <ArticlesContent>
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
          </ArticlesContent>
          <ArticlesInfo>
            <ArticlesUser>
              <UserAvatar />
              <UserInfo>
                <UserName>水怪貓貓</UserName>
                <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
              </UserInfo>
            </ArticlesUser>
            <ReadMore>閱讀全文</ReadMore>
          </ArticlesInfo>
        </ArticlesInfoContainer>
      </ArticlesContainer>
      <ArticlesContainer>
        <ArticlesImg src='https://i.imgur.com/w2Y6y4z.jpg' />
        <ArticlesInfoContainer>
          <TitleAndTags>
            <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
            <ArticlesTags>
              <ArticlesTag>一日</ArticlesTag>
              <ArticlesTag>賞花</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
              <ArticlesTag>有水源</ArticlesTag>
            </ArticlesTags>
          </TitleAndTags>
          <ArticlesContent>
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好...
          </ArticlesContent>
          <ArticlesInfo>
            <ArticlesUser>
              <UserAvatar />
              <UserInfo>
                <UserName>水怪貓貓</UserName>
                <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
              </UserInfo>
            </ArticlesUser>
            <ReadMore>閱讀全文</ReadMore>
          </ArticlesInfo>
        </ArticlesInfoContainer>
      </ArticlesContainer>
    </Wrapper>
  )
}

export default AllArticlesPage
