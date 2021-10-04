import styled from 'styled-components'
import { COLOR, EFFECT, RADIUS, FONT, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchSvg } from '../../icons/search.svg'
import { ReactComponent as CloseSvg } from '../../icons/close.svg'

const SearchBarWrapper = styled.div`
  width: 300px;
  z-index: 1;
  display: flex;
  align-items: center;
  border-radius: ${RADIUS.md};
  box-shadow: ${EFFECT.shadow_light};
  ${(props) => props.$horizontalAlign && `margin: 0 auto;`}
  ${(props) => props.$noBorderRadius && `border-radius:0;`}
  ${(props) =>
    props.$widthFilter &&
    `
    min-width: 100%;
    box-shadow: none;
  `}
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

  ${(props) =>
    props.$fontAndWidthFilter &&
    `
    ${MEDIA_QUERY.md} {
      font-size: ${FONT.md};
      width: 100%;
    }
  `}
`

export default function SearchBar({
  placeholder,
  horizontalAlign,
  noBorderRadius,
  fontAndWidthFilter,
  widthFilter,
}) {
  return (
    <>
      <SearchBarWrapper
        $horizontalAlign={horizontalAlign}
        $noBorderRadius={noBorderRadius}
        $widthFilter={widthFilter}
      >
        <SearchBarInput
          placeholder={placeholder}
          $noBorderRadius={noBorderRadius}
          $fontAndWidthFilter={fontAndWidthFilter}
        />
        <CloseIconWrapper>
          <CloseIcon />
        </CloseIconWrapper>
        <SearchIconWrapper $noBorderRadius={noBorderRadius}>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchBarWrapper>
    </>
  )
}
