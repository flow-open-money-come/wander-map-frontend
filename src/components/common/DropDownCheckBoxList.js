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
    max-width: 100px;
  }
`
const DropDownCheckBoxTitle = styled.div`
  min-width: 70px;
  height: 42px;
  font-size: ${FONT.xs};
  color: ${COLOR.gray};
  background-color: ${COLOR.white};
  border-bottom: none;
  padding: 20px 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${EFFECT.shadow_light};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
`
const DropDownCheckBoxes = styled.div`
  height: 0;
  border-top: 0.5px solid ${COLOR.gray_light};
  background-color: ${COLOR.white};
  display: flex;
  flex-direction: column;
  transition: ${EFFECT.transition};
  overflow: hidden;
  box-shadow: none;
  ${(props) =>
    props.$isActive &&
    `
    height: 130px;
    overflow-y: scroll;
    box-shadow: ${EFFECT.shadow_light};
    `}
`
const DropDownCheckBoxInput = styled.input`
  width: 10px;
  height: 10px;
  margin-right: 8px;
  background-color: ${COLOR.white};
  display: block;
  ${MEDIA_QUERY.md} {
    width: 15px;
    height: 15px;
  }
`
const DropDownCheckBoxWrapper = styled.label`
  font-size: 10px;
  color: ${COLOR.gray};
  border-bottom: 0.5px solid ${COLOR.gray_light};
  display: flex;
  padding: 10px 0px 10px 10px;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
    padding: 10px;
  }
`
const ArrowDown = styled(ArrowDownSvg)`
  ${(props) => props.$isActive && `display:none`}
`
const ArrowUp = styled(ArrowUpSvg)`
  display: none;
  ${(props) => props.$isActive && `display:block`}
`

function DropDownCheckBox({ option, filter }) {
  return (
    <>
      <DropDownCheckBoxWrapper filter={filter}>
        <DropDownCheckBoxInput type='checkbox' name={option} filter={filter} />
        {option}
      </DropDownCheckBoxWrapper>
    </>
  )
}
export default function DropDownCheckBoxList({
  title,
  options,
  onClick,
  filter,
}) {
  const [arrowToggleClick, setArrowToggleClick] = useToggle(false)

  return (
    <>
      <div onClick={onClick}>
        <DropDownCheckBoxTitle>
          <TitleText>{title}</TitleText>
          <ArrowDown
            $isActive={arrowToggleClick}
            onClick={setArrowToggleClick}
          />
          <ArrowUp $isActive={arrowToggleClick} onClick={setArrowToggleClick} />
        </DropDownCheckBoxTitle>
        <DropDownCheckBoxes $isActive={arrowToggleClick}>
          {options.map((option, index) => {
            return (
              <DropDownCheckBox
                key={index}
                option={option}
                filter={filter}
              ></DropDownCheckBox>
            )
          })}
        </DropDownCheckBoxes>
      </div>
    </>
  )
}
