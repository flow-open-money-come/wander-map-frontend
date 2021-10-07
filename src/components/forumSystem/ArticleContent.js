import React, { useState } from 'react'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY, EFFECT } from '../../constants/style'
import User from './User'

const ArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${COLOR.beige} 1px solid;
  box-shadow: ${EFFECT.shadow_light};
  width: 100%;
  margin: 21px 0 50px 0;
  padding: 10px 15px 15px 15px;

  ${MEDIA_QUERY.md} {
    margin-bottom: 78px;
    padding: 19px 35px 35px 35px;
  }
`

const ArticleDesc = styled.div`
  align-self: center;
  border-top: 1px solid ${COLOR.beige};
  margin: 15px 0;
  width: 100%;
  max-height: 40rem;
  font-size: ${FONT.s};
  line-height: 2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
  transition: ${EFFECT.transition};
  ${MEDIA_QUERY.md} {
    line-height: 3rem;
    font-size: ${FONT.md};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }

  ${(props) =>
    props.unfold &&
    `
    overflow: visible;
    max-height: fit-content;
  `}
`

const UnfoldButton = styled.button`
  margin-top: 10px;
  align-self: flex-end;
  cursor: pointer;
  color: ${COLOR.green};
  font-size: ${FONT.s};
  font-weight: bold;
  margin: 0 5px 13px 0;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`

export default function ArticleContent() {
  const [unfold, setUnfold] = useState(false)

  return (
    <ArticleContentContainer>
      <User />
      <ArticleDesc unfold={unfold}>
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
        是一條可以呼吸到大自然生動氣息的野趣步道。 哈囉哈囉哈囉
      </ArticleDesc>
      <UnfoldButton unfold={unfold} onClick={() => setUnfold(!unfold)}>
        {unfold ? '收合' : '展開全文'}
      </UnfoldButton>
    </ArticleContentContainer>
  )
}
