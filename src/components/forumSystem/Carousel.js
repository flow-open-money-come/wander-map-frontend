import React from 'react'
import styled from 'styled-components'
import { useState, useContext } from 'react'
import { ReactComponent as Right_Arrow } from '../../icons/arrow_right.svg'
import { ReactComponent as Left_Arrow } from '../../icons/arrow_left.svg'
import { ReactComponent as Thumb } from '../../icons/thumb_up.svg'
import { FONT, COLOR, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import ReactHtmlParser from 'react-html-parser'

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${RADIUS.lg};

  ${MEDIA_QUERY.lg} {
    width: 300px;
    height: 300px;
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

const LeftArrow = styled(Left_Arrow)`
  position: absolute;
  top: 43%;
  left: -15px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  ${MEDIA_QUERY.lg} {
    top: 50%;
    left: -20px;
  }
`

const RightArrow = styled(Right_Arrow)`
  position: absolute;
  top: 43%;
  right: -15px;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
  ${MEDIA_QUERY.lg} {
    top: 50%;
    right: -20px;
  }
`

const ArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${MEDIA_QUERY.lg} {
    width: 72%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`

const ArticleTitle = styled.h1`
  font-size: ${FONT.lg};
  display: flex;
  position: absolute;
  width: 60%;
  padding: 10px;
  border-radius: ${RADIUS.md};
  justify-content: center;
  transform: translate(5%, -300%);
  background-color: rgba(0, 0, 0, 0.4);
  color: ${COLOR.white};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.logo};
  }

  ${MEDIA_QUERY.lg} {
    color: ${COLOR.black};
    position: static;
    justify-content: flex-start;
    transform: translate(0, 0);
    background-color: transparent;
    padding: 10px 10px 8px 0;
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
  width: 40px;
  height: 40px;
  padding-left: 10px;
`

const ArticleTitleAndLikes = styled.div`
  padding: 10px 10px 10px 0;
  ${MEDIA_QUERY.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const ArticleContent = styled.div`
  display: none;

  ${MEDIA_QUERY.lg} {
    display: block;
    padding: 10px 10px 10px 0;
    line-height: 2rem;
    overflow: hidden;
    height: 108px;
    font-size: ${FONT.md};
  }
`

const ArticleTags = styled.div`
  width: 80%;
  position: absolute;
  display: flex;
  border-radius: ${RADIUS.md};
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

  ${(props) =>
    props.noTag &&
    `
    display: none;  
  `}

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.xs};
    padding: 6px 14px;
  }
`

const ArticleInfo = styled.div`
  display: none;
  &:hover {
    opacity: 0.8;
  }

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
const ArticleUser = styled(Link)`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  color: ${COLOR.black};

  ${MEDIA_QUERY.md} {
    margin-top: 9px;
  }
`
const ArticleDate = styled.div`
  font-size: ${FONT.xs};
`

const UserAvatar = styled.img`
  border: 1px solid ${COLOR.gray_light};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
`

const SlideLink = styled(Link)`
  color: ${COLOR.black};
  width: 100%;
  height: 100%;
  margin: 10px;

  ${MEDIA_QUERY.lg} {
    display: flex;
    border-radius: ${RADIUS.lg};
    background: ${COLOR.white};
    width: 90%;
    height: 300px;
    margin: 20px;
    box-shadow: ${EFFECT.shadow_light};
  }
`

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const { userInfo } = useContext(AuthContext)

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
      {slides.map((slide, index) => (
        <>
          {index === current && (
            <SlideLink
              key={slide.article_id}
              to={`/articles/${slide.article_id}`}
            >
              <SlideImage src={slide.cover_picture_url} />
              <ArticleInfoContainer>
                <ArticleTitleAndLikes>
                  <ArticleTitle>{slide.title}</ArticleTitle>
                  <ArticleLikes>
                    {slide.count}
                    <ThumbUp />
                  </ArticleLikes>
                </ArticleTitleAndLikes>
                <ArticleTags>
                  {!slide.tag_names ? (
                    <ArticleTag noTag></ArticleTag>
                  ) : (
                    slide.tag_names.split(',').map((tag) => {
                      return <ArticleTag>{tag}</ArticleTag>
                    })
                  )}
                </ArticleTags>
                <ArticleContent>
                  {ReactHtmlParser(slide.content)}
                </ArticleContent>
                <ArticleInfo>
                  <ArticleUser
                    to={
                      userInfo && userInfo.user_id === slide.author_id
                        ? userInfo.role === 'admin'
                          ? `/admin`
                          : `/backstage/${slide.author_id}`
                        : `/user/${slide.author_id}`
                    }
                  >
                    <UserAvatar src={slide.icon_url} />
                    <UserInfo>
                      <UserName>{slide.nickname}</UserName>
                      <ArticleDate>
                        {new Date(
                          new Date(slide.created_at).getTime() + 8 * 3600 * 1000
                        ).toLocaleString('ja')}
                      </ArticleDate>
                    </UserInfo>
                  </ArticleUser>
                </ArticleInfo>
              </ArticleInfoContainer>
            </SlideLink>
          )}
        </>
      ))}
    </Slider>
  )
}
