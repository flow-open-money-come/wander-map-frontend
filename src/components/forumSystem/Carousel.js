import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { ReactComponent as Right_Arrow } from '../../icons/arrow_right.svg'
import { ReactComponent as Left_Arrow } from '../../icons/arrow_left.svg'
import { ReactComponent as Thumb } from '../../icons/thumb_up.svg'
import { FONT, COLOR, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

// Carousel

const SlideImage = styled.img`
  width: 400px;
  height: 250px;
  border-radius: ${RADIUS.lg};

  ${MEDIA_QUERY.md} {
    width: 100%;
    height: 100%;
  }

  ${MEDIA_QUERY.lg} {
    width: 300px;
    height: auto;
    margin-right: 21px;
    object-fit: cover;
  }
`

const Slider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;

  ${MEDIA_QUERY.lg} {
    display: flex;
    border-radius: ${RADIUS.lg};
    background: ${COLOR.white};
    width: 1173px;
    height: auto;
    margin: 20px;
    box-shadow: ${EFFECT.shadow_light};
  }
`

const LeftArrow = styled(Left_Arrow)`
  position: absolute;
  top: 50%;
  left: -20px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
`

const RightArrow = styled(Right_Arrow)`
  position: absolute;
  top: 50%;
  right: -20px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
`
// 幻燈片文章內容

const ArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${MEDIA_QUERY.lg} {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const ArticleTitle = styled.h1`
  display: flex;
  position: absolute;
  width: 60%;
  padding: 5px;
  border-radius: ${RADIUS.md};
  justify-content: center;
  transform: translate(5%, -300%);
  background: ${COLOR.beige};
  opacity: 0.6;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }

  ${MEDIA_QUERY.lg} {
    position: static;
    justify-content: flex-start;
    transform: translate(0, 0);
    background: 0;
    opacity: 1;
    padding: 10px 10px 8px 0;
    font-size: ${FONT.xl};
  }
`

const ArticleLikes = styled.span`
  display: none;

  ${MEDIA_QUERY.lg} {
    align-items: flex-end;
    display: flex;
    margin-right: 7px;
    color: ${COLOR.green};
    font-size: ${FONT.xl};
  }
`

const ThumbUp = styled(Thumb)`
  width: 30px;
  height: 30px;

  ${MEDIA_QUERY.lg} {
    width: 45px;
    height: 45px;
  }
`

const ArticleTitleAndLikes = styled.div`
  ${MEDIA_QUERY.md} {
    display: flex;
    justify-content: space-between;
  }
`

const ArticleContent = styled.div`
  display: none;

  ${MEDIA_QUERY.lg} {
    width: 100%;
    display: block;
    padding: 10px 10px 10px 0;
    line-height: 2rem;
    overflow: hidden;
    height: 108px;
    font-size: ${FONT.md};
  }
`

const ArticleTags = styled.div`
  position: absolute;
  display: flex;
  border-radius: ${RADIUS.md};
  justify-content: center;
  transform: translate(3%, -150%);
  flex-wrap: wrap;
  max-height: 2rem;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  ${MEDIA_QUERY.md} {
    transform: translate(3%, -200%);
  }

  ${MEDIA_QUERY.lg} {
    position: static;
    max-height: 60px;
    transform: translate(0);
  }
`

const ArticleTag = styled.div`
  display: flex;
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};
  font-size: ${FONT.xs};
  margin: 4px 3px;
  color: #ffffff;
  padding: 6px 10px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.xs};
    padding: 6px 14px;
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

const ArticleInfo = styled.div`
  display: none;

  ${MEDIA_QUERY.lg} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 20px 11px 0;
  }
`

const UserName = styled.div`
  margin-bottom: 5px;
`

const UserInfo = styled.div`
  ${MEDIA_QUERY.md} {
    padding-top: 2px;
    margin-left: 5px;
    font-size: ${FONT.s};
    padding-top: 10px;
  }
`
const ArticleUser = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY.md} {
    margin-top: 9px;
  }
`
const ArticleDate = styled.div`
  font-size: ${FONT.xs};
`

const UserAvatar = styled.img`
  width: 45px;
  height: 45px;
`

export default function Carousel({ slides }) {
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
    <Slider>
      <LeftArrow onClick={prevSlide}></LeftArrow>
      <RightArrow onClick={nextSlide}></RightArrow>
      <ImageContainer>
        {slides.map((slide, index) => {
          return (
            <>
              {index === current && (
                <>
                  <SlideImage src={slide.image} />
                  <ArticleInfoContainer>
                    <ArticleTitleAndLikes>
                      <ArticleTitle>{slide.title}</ArticleTitle>
                      <ArticleLikes>
                        {slide.likes}
                        <ThumbUp />
                      </ArticleLikes>
                    </ArticleTitleAndLikes>
                    <ArticleTags>
                      {slide.tags.map((tag) => {
                        return <ArticleTag>{tag}</ArticleTag>
                      })}
                    </ArticleTags>
                    <ArticleContent>{slide.content}</ArticleContent>
                    <ArticleInfo>
                      <ArticleUser>
                        <UserAvatar src={slide.userAvatar} />
                        <UserInfo>
                          <UserName>{slide.username}</UserName>
                          <ArticleDate>{slide.date}</ArticleDate>
                        </UserInfo>
                      </ArticleUser>
                      <ReadMore>閱讀全文</ReadMore>
                    </ArticleInfo>
                  </ArticleInfoContainer>
                </>
              )}
            </>
          )
        })}
      </ImageContainer>
    </Slider>
  )
}
