import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS } from '../../constants/style'
import { ReactComponent as SearchSvg } from '../../icons/search.svg'
import { ReactComponent as CloseSvg } from '../../icons/close.svg'
import { memo } from 'react'

const SearchBarWrapper = styled.div`
  width: ${(props) => {
    return props.$width ? props.$width : '70%'
  }};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) => props.$horizontalAlign && `margin: 0 auto;`}
  border-radius: ${(props) => {
    return props.$noBorderRadius ? '0;' : `${RADIUS.md};`
  }};
  box-shadow: ${(props) => {
    return props.$noShadow ? 'none;' : `${EFFECT.shadow_light};`
  }};
`

const SearchIcon = styled(SearchSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const SearchIconWrapper = styled.div`
  min-width: 42px;
  min-height: 42px;
  width: 10%;
  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.white};
  position: relative;
  transition: ${EFFECT.transition};
  ${(props) =>
    !props.$noBorderRadius && `border-radius: 0 ${RADIUS.md} ${RADIUS.md} 0;`}
`
const CloseIcon = styled(CloseSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const CloseIconWrapper = styled.div`
  min-width: 42px;
  min-height: 42px;
  width: 10%;
  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.white};
  position: relative;
  transition: ${EFFECT.transition};
`
const SearchBarInput = styled.input`
  width: 80%;
  height: 30px;
  background-color: ${COLOR.white};
  padding: 20px;
  outline: none;
  border: 1px solid ${COLOR.white};
  transition: ${EFFECT.transition};
  ${(props) =>
    !props.$noBorderRadius && `border-radius: ${RADIUS.md} 0 0 ${RADIUS.md};`}
  &::placeholder {
    font-size: ${(props) => {
      return props.$fontSize ? props.$fontSize : `${FONT.s}`
    }};
  }
`

export default memo(function SearchBar({
  placeholder,
  horizontalAlign,
  noBorderRadius,
  width,
  fontSize,
  noShadow,
  handleKeyWordChange,
  handleSearchTrails,
  handleKeyWordDelete,
  inputValue,
}) {
  return (
    <>
      <SearchBarWrapper
        $horizontalAlign={horizontalAlign}
        $noBorderRadius={noBorderRadius}
        $noShadow={noShadow}
        $width={width}
      >
        <SearchBarInput
          placeholder={placeholder}
          $noBorderRadius={noBorderRadius}
          $fontSize={fontSize}
          onChange={handleKeyWordChange}
          value={inputValue}
        />
        <CloseIconWrapper onClick={handleKeyWordDelete}>
          <CloseIcon />
        </CloseIconWrapper>
        <SearchIconWrapper
          $noBorderRadius={noBorderRadius}
          onClick={handleSearchTrails}
        >
          <SearchIcon />
        </SearchIconWrapper>
      </SearchBarWrapper>
    </>
  )
})
