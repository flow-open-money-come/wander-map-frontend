import styled from 'styled-components'
import { COLOR, FONT, EFFECT, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as ArrowUpSvg } from '../../icons/arrow_up_s.svg'
import { ReactComponent as ArrowDownSvg } from '../../icons/arrow_down_s.svg'
import useToggle from '../../hooks/useToggle'

const TitleText = styled.div`
  margin-right: 5px;
  text-align: center;
  ${MEDIA_QUERY.md} {
    max-width: 50px;
  }
  ${MEDIA_QUERY.lg} {
    max-width: 60px;
  }
`
const DropDownCheckBoxTitle = styled.div`
  min-width: 70px;
  height: 25px;
  border: 1px solid ${COLOR.gray_light};
  border-bottom: none;
  padding: 20px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${FONT.xs};
  background-color: ${COLOR.white};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    padding: 25px 20px;
  }
`
const DropDownCheckBoxs = styled.div`
  display: flex;
  flex-direction: column;
  height: 0;
  transition: ${EFFECT.transition};
  border: 1px solid ${COLOR.gray_light};
  border-bottom: none;
  background-color: ${COLOR.white};
  overflow: hidden;
  box-shadow: ${EFFECT.shadow_light};
  ${(props) =>
    props.$isActive &&
    `
    height: 130px;
    overflow: scroll;
    border: 1px solid ${COLOR.gray_light};
    `}
`
const DropDownCheckBoxInput = styled.input`
  display: block;
  width: 10px;
  height: 10px;
  margin-right: 8px;
  background-color: ${COLOR.white};
  ${MEDIA_QUERY.md} {
    width: 15px;
    height: 15px;
  }
`
const DropDownCheckBoxWrapper = styled.label`
  display: flex;
  padding: 10px;
  font-size: 10px;
  color: ${COLOR.gray};
  border-bottom: 1px solid ${COLOR.gray_light};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`
const ArrowDown = styled(ArrowDownSvg)`
  ${(props) => props.$isActive && `display:none`}
`
const ArrowUp = styled(ArrowUpSvg)`
  display: none;
  ${(props) => props.$isActive && `display:block`}
`

function DropDownCheckBox({ option }) {
  return (
    <>
      <DropDownCheckBoxWrapper>
        <DropDownCheckBoxInput type='checkbox' />
        {option}
      </DropDownCheckBoxWrapper>
    </>
  )
}
export default function DropDownCheckBoxList({ title, options }) {
  const [arrowToggleClick, setArrowToggleClick] = useToggle(false)

  return (
    <>
      <div>
        <DropDownCheckBoxTitle>
          <TitleText>{title}</TitleText>
          <ArrowDown
            $isActive={arrowToggleClick}
            onClick={setArrowToggleClick}
          />
          <ArrowUp $isActive={arrowToggleClick} onClick={setArrowToggleClick} />
        </DropDownCheckBoxTitle>
        <DropDownCheckBoxs $isActive={arrowToggleClick}>
          {options.map((option) => {
            return <DropDownCheckBox option={option}></DropDownCheckBox>
          })}
        </DropDownCheckBoxs>
      </div>
    </>
  )
}
