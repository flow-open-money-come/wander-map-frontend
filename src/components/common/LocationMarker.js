import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS } from '../../constants/style'
import { ReactComponent as PinSvg } from '../../icons/pin.svg'
import useToggle from '../../hooks/useToggle'

const Marker = styled(PinSvg)`
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
`
const InfoWindow = styled.div`
  width: 230px;
  height: 200px;
  background-color: ${COLOR.white};
  border-radius: ${RADIUS.md};
  box-shadow: ${EFFECT.shadow_light};
  position: relative;
  transform: translate(-50%, -50%);
  top: -160px;
  overflow: hidden;
  display: none;
  z-index: 1;
  ${(props) =>
    props.$isOpen &&
    `
    display:block;
  `}
`
const TrailImg = styled.img`
  width: 100%;
  height: 150px;
`
const TrailName = styled.div`
  font-size: ${FONT.md};
  font-weight: bold;
`
const TrailCondition = styled.div`
  font-size: ${FONT.xs};
  padding: 3px;
  border-radius: ${RADIUS.s};
  color: ${COLOR.white};
  background-color: ${COLOR.green};
  ${(props) =>
    props.$trailConditionTag === '部分封閉' &&
    `background-color: ${COLOR.blue};`}
  ${(props) =>
    props.$trailConditionTag === '暫停開放' &&
    `background-color: ${COLOR.pink};`}
  ${(props) =>
    props.$trailConditionTag === '注意' && `background-color: ${COLOR.yellow};`}
`
const TrailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default function LocationMarker({ trailInfo, trailConditionTag }) {
  const [isInfoWindowOpen, setInfoWindowToggleClick] = useToggle(false)

  return (
    <>
      <Marker onClick={setInfoWindowToggleClick}></Marker>
      <InfoWindow $isOpen={isInfoWindowOpen}>
        <TrailImg src={trailInfo.cover_picture_url} />
        <TrailInfoWrapper>
          <TrailName>{trailInfo.title}</TrailName>
          <TrailCondition $trailConditionTag={trailConditionTag}>
            {trailConditionTag}
          </TrailCondition>
        </TrailInfoWrapper>
      </InfoWindow>
    </>
  )
}
