import React from 'react'
import styled from 'styled-components'
import Comment from '../../../components/forumSystem/Comment'
import {
  FONT,
  COLOR,
  EFFECT,
  RADIUS,
  MEDIA_QUERY,
} from '../../../constants/style'
import { ReactComponent as Review } from '../../../icons/articles/review.svg'

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

const ArticleTitle = styled.span`
  font-weight: bold;
  display: flex;
  padding: 5px;
  font-size: ${FONT.md};

  ${MEDIA_QUERY.md} {
    flex: 0 1 auto;
    padding: 10px 10px 8px 0;
    font-size: ${FONT.xl};
  }

  ${MEDIA_QUERY.lg} {
    padding: 10px 10px 8px 0;
    font-size: ${FONT.xll};
  }
`

const ArticleLikes = styled.span`
  align-items: flex-end;
  display: flex;
  margin-right: 7px;
  color: ${COLOR.green};
  font-size: ${FONT.md};

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.logo};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xl};
  }
`

const ThumbUp = styled.button`
  background-image: url('https://i.imgur.com/hSHxTME.png');
  background-size: contain;
  width: 30px;
  height: 30px;
  cursor: pointer;

  ${MEDIA_QUERY.lg} {
    width: 45px;
    height: 45px;
  }
`

const ArticleTitleAndLikes = styled.div`
  display: flex;
  justify-content: space-between;
`

const ArticleTags = styled.div`
  display: flex;
  border-radius: ${RADIUS.md};
  flex-wrap: wrap;
`

const ArticleTag = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};
  font-size: 11px;
  margin: 5px 3px;
  color: #ffffff;
  padding: 6px 10px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
    padding: 6px 14px;
    flex: 0 1 auto;
  }
`

const CoverImg = styled.img`
  width: 100%;
  height: 40%;
  justify-content: center;
  margin: 20px 0;
  border-radius: ${RADIUS.lg};

  ${MEDIA_QUERY.md} {
    margin: 61px 0 44px 0;
  }
`

const UserName = styled.div`
  margin-bottom: 5px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
    padding-bottom: 5px;
  }
`

const UserInfo = styled.div`
  font-size: 11px;
  padding-top: 2px;
  margin-left: 5px;
  justify-content: center;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
    margin-top: 10px;
  }
`
const ArticleUser = styled.div`
  margin-top: 5px;
  display: flex;

  ${MEDIA_QUERY.md} {
    margin-top: 9px;
  }
`
const ArticleDate = styled.div`
  font-size: 11px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
`

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;

  ${MEDIA_QUERY.md} {
    width: 45px;
    height: 45px;
  }
`

const ArticleDepartureTime = styled.div`
  margin: 7px 0;
`
const ArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${COLOR.beige} 1px solid;
  box-shadow: ${EFFECT.shadow_light};
  width: 100$;
  margin: 21px 0 50px 0;
  padding: 20px;

  ${MEDIA_QUERY.lg} {
    margin-bottom: 78px;
  }
`
const ArticleLocation = styled.div`
  margin: 21px 0 7px 0;
`
const ArticleContent = styled.div`
  align-self: center;
  border-top: 1px solid ${COLOR.beige};
  margin: 15px;
  width: 100%;
  max-height: 60rem;
  font-size: ${FONT.s};
  padding: 10px;
  line-height: 3rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;

  ${MEDIA_QUERY.md} {
    max-height: 90rem;
    font-size: ${FONT.md};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`

const CommentTitle = styled.h1`
  font-size: ${FONT.md};
  margin-left: 5px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xl};
  }
`

const FlexGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
`

const Unfold = styled.button`
  margin-top: 10px;
  align-self: flex-end;
  cursor: pointer;
  color: ${COLOR.green};
  font-size: ${FONT.s};
  font-weight: bold;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`

const ReviewIcon = styled(Review)`
  width: 20px;
  height: 20px;

  ${MEDIA_QUERY} {
    width: 25px;
    height: 25px;
  }
  ${MEDIA_QUERY.lg} {
    width: 40px;
    height: 40px;
  }
`
const TitleAndTags = styled.div`
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY.lg} {
    flex-direction: row;
  }
`

function ArticlePage() {
  return (
    <Wrapper>
      <CoverImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Dawu_Mt%2BHunag_Chung_Yu%E9%BB%83%E4%B8%AD%E4%BD%91%2B17755.jpg/2560px-Dawu_Mt%2BHunag_Chung_Yu%E9%BB%83%E4%B8%AD%E4%BD%91%2B17755.jpg' />
      <ArticleTitleAndLikes>
        <TitleAndTags>
          <ArticleTitle>林美石磐步道</ArticleTitle>
          <ArticleTags>
            <ArticleTag>一日</ArticleTag>
            <ArticleTag>有水源</ArticleTag>
            <ArticleTag>新手小白體驗</ArticleTag>
            <ArticleTag>一日</ArticleTag>
            <ArticleTag>一日</ArticleTag>
            <ArticleTag>有水源</ArticleTag>
            <ArticleTag>新手小白體驗</ArticleTag>
            <ArticleTag>一日</ArticleTag>
          </ArticleTags>
        </TitleAndTags>
        <ArticleLikes>
          <ThumbUp />
          222
        </ArticleLikes>
      </ArticleTitleAndLikes>
      <ArticleLocation>地點：宜蘭縣礁溪鄉 林美石磐步道</ArticleLocation>
      <ArticleDepartureTime>
        出發時間：2000.01.02 ~ 2000.01.03
      </ArticleDepartureTime>
      <ArticleContentContainer>
        <ArticleUser>
          <UserAvatar src='https://i.imgur.com/eGREu6v.png' />
          <UserInfo>
            <UserName>水貓怪怪</UserName>
            <ArticleDate>2021.9.7 / 20:20:22</ArticleDate>
          </UserInfo>
        </ArticleUser>
        <ArticleContent>
          林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好走、
          又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，散發陣陣芬多精，走在其中清爽無比，非常適合闔家一起健行。
          步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村，
          而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、大小不一的水潭與峽谷地形，
          景色秀麗，有「宜蘭的小太魯閣」之稱。當陽光透過樹葉射在步道上時，光影迷人，時有樹蛙及昆蟲在葉片上休息，是一條可以呼吸到大自然生動氣息的野趣步道。
          林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，
          散發陣陣芬多精，走在其中清爽無比，非常適合闔家一起健行。
          步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村，
          而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、大小不一的水潭與峽谷地形
          ，景色秀麗，有「宜蘭的小太魯閣」之稱。當陽光透過樹葉射在步道上時，光影迷人，時有樹蛙及昆蟲在葉片上休息，
          是一條可以呼吸到大自然生動氣息的野趣步道。
          林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好走、
          又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，散發陣陣芬多精，走在其中清爽無比，非常適合闔家一起健行。
          步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村，
          而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、大小不一的水潭與峽谷地形，
          景色秀麗，有「宜蘭的小太魯閣」之稱。當陽光透過樹葉射在步道上時，光影迷人，時有樹蛙及昆蟲在葉片上休息，是一條可以呼吸到大自然生動氣息的野趣步道。
          林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，
          散發陣陣芬多精，走在其中清爽無比，非常適合闔家一起健行。
          步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村，
          而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、大小不一的水潭與峽谷地形
          ，景色秀麗，有「宜蘭的小太魯閣」之稱。當陽光透過樹葉射在步道上時，光影迷人，時有樹蛙及昆蟲在葉片上休息，
          是一條可以呼吸到大自然生動氣息的野趣步道。
          林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好走、
          又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，散發陣陣芬多精，走在其中清爽無比，非常適合闔家一起健行。
          步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村，
          而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、大小不一的水潭與峽谷地形，
          景色秀麗，有「宜蘭的小太魯閣」之稱。當陽光透過樹葉射在步道上時，光影迷人，時有樹蛙及昆蟲在葉片上休息，是一條可以呼吸到大自然生動氣息的野趣步道。
          林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，潺潺流水，
          散發陣陣芬多精，走在其中清爽無比，非常適合闔家一起健行。
          步道名稱是由「林美」與「石磐」兩個名字組成，「林美」是指礁溪鄉林美村，
          而「石磐」指的是石磐瀑布，因此在這條步道中沿途常見溪流瀑布、大小不一的水潭與峽谷地形
          ，景色秀麗，有「宜蘭的小太魯閣」之稱。當陽光透過樹葉射在步道上時，光影迷人，時有樹蛙及昆蟲在葉片上休息，
          是一條可以呼吸到大自然生動氣息的野趣步道。
        </ArticleContent>
        <Unfold>展開全文</Unfold>
      </ArticleContentContainer>
      <FlexGroup>
        <ReviewIcon />
        <CommentTitle>討論區</CommentTitle>
      </FlexGroup>
      <Comment />
    </Wrapper>
  )
}

export default ArticlePage
