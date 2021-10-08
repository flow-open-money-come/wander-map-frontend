import styled from 'styled-components'
import { COLOR, FONT, EFFECT, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as ArrowUpSvg } from '../../icons/arrow_up_s.svg'
import { ReactComponent as ArrowDownSvg } from '../../icons/arrow_down_s.svg'
import useToggle from '../../hooks/useToggle'
import { getTrails } from '../../WebAPI'
import { useState, useEffect } from 'react'

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
    height: 145px;
    overflow: scroll;
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
  padding: 10px;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
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
        <DropDownCheckBoxInput type='checkbox' name={option} />
        {option}
      </DropDownCheckBoxWrapper>
    </>
  )
}
export default function DropDownCheckBoxList({ title, options }) {
  const [arrowToggleClick, setArrowToggleClick] = useToggle(false)
  const [checkedOptions, setCheckedOptions] = useState([])
  const [params, setParams] = useState('')
  let paramArray = []

  const handleLocationFilter = (e) => {
    let targetOption = e.target.name
    if (checkedOptions.indexOf(targetOption) >= 0) {
      return setCheckedOptions(
        checkedOptions.filter((option) => option !== targetOption)
      )
    }

    setCheckedOptions([...checkedOptions, targetOption])
    //不會馬上改到 checkedOptions

    checkedOptions.forEach((option) => {
      paramArray.push(`location=${option}`)
    })
    if (paramArray.length !== 0) {
      setParams('?' + paramArray.join('&'))
    }
  }

  useEffect(() => {
    getTrails(params).then((res) => {
      console.log(res.data)
    })
  }, [params])

  return (
    <>
      <div>
        <DropDownCheckBoxTitle
          onClick={() => {
            console.log(params)
          }}
        >
          <TitleText>{title}</TitleText>
          <ArrowDown
            $isActive={arrowToggleClick}
            onClick={setArrowToggleClick}
          />
          <ArrowUp $isActive={arrowToggleClick} onClick={setArrowToggleClick} />
        </DropDownCheckBoxTitle>
        <DropDownCheckBoxes
          $isActive={arrowToggleClick}
          onChange={(e) => {
            handleLocationFilter(e)
          }}
        >
          {options.map((option) => {
            return <DropDownCheckBox option={option}></DropDownCheckBox>
          })}
        </DropDownCheckBoxes>
      </div>
    </>
  )
}
