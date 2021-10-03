import styled from 'styled-components'
import { COLOR, EFFECT, RADIUS } from '../../constants/style'
import { ReactComponent as PinSvg } from '../../icons/pin.svg'
import useToggle from '../../hooks/useToggle'

const Marker = styled(PinSvg)`
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
`
const InfoWindow = styled.div`
  width: 180px;
  height: 150px;
  background-color: ${COLOR.white};
  border-radius: ${RADIUS.md};
  box-shadow: ${EFFECT.shadow_light};
  position: relative;
  transform: translate(-50%, -50%);
  top: -130px;
  overflow: hidden;
  display: none;
  ${(props) =>
    props.$isOpen &&
    `
    display:block;
  `}
`
const TrailImg = styled.img`
  width: 200px;
  height: 100px;
`
const TrailName = styled.div`
  font-size: 18px;
  padding: 10px;
`

export default function LocationMarker({ trailInfo }) {
  const [isInfoWindowOpen, setInfoWindowToggleClick] = useToggle(false)
  return (
    <>
      <Marker onClick={setInfoWindowToggleClick}></Marker>
      <InfoWindow $isOpen={isInfoWindowOpen}>
        <TrailImg src={trailInfo.trailImageUrl} />
        <TrailName>{trailInfo.trailTitle}</TrailName>
      </InfoWindow>
    </>
  )
}
