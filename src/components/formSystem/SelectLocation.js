import React from 'react'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style'

const SelectGroup = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 500px;
  }
`

const Select = styled.select`
  height: 25px;
  width: 150px;
  text-align: center;
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 230px;
    font-size: ${FONT.md};
  }
`

export default function SelectLocation() {
  return (
    <SelectGroup>
      <Select>
        <option>請選擇</option>
        <option value='基隆市'>基隆市</option>
        <option value='臺北市'>臺北市</option>
        <option value='新北市'>新北市</option>
        <option value='新竹市'>新竹市</option>
        <option value='新竹縣'>新竹縣</option>
        <option value='桃園市'>桃園市</option>
        <option value='宜蘭縣'>宜蘭縣</option>
        <option value='苗栗縣'>苗栗縣</option>
        <option value='臺中市'>臺中市</option>
        <option value='彰化縣'>彰化縣</option>
        <option value='南投縣'>南投縣</option>
        <option value='嘉義市'>嘉義市</option>
        <option value='嘉義縣'>嘉義縣</option>
        <option value='雲林縣'>雲林縣</option>
        <option value='臺南市'>臺南市</option>
        <option value='高雄市'>高雄市</option>
        <option value='澎湖縣'>澎湖縣</option>
        <option value='屏東縣'>屏東縣</option>
        <option value='臺東縣'>臺東縣</option>
        <option value='花蓮縣'>花蓮縣</option>
        <option value='金門縣'>金門縣</option>
        <option value='連江縣'>連江縣</option>
      </Select>
      <Select>
        <option>請選擇</option>
        <option>北投區</option>
        <option>信義區</option>
        <option>大安區</option>
      </Select>
    </SelectGroup>
  )
}
