import styled from 'styled-components'
import { COLOR, EFFECT, RADIUS } from '../../constants/style'
import { ReactComponent as SearchSvg } from '../../icons/search.svg'
import { ReactComponent as CloseSvg } from '../../icons/close.svg'

const SearchBarWrapper = styled.div`
  width: 70%;
  z-index: 1;
  display: flex;
  align-items: center;
  ${(props) => props.$horizontalAlign && `margin: 0 auto`}
`

const SearchIcon = styled(SearchSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const SearchIconWrapper = styled.div`
  width: 15%;
  height: 42px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0 ${RADIUS.md} ${RADIUS.md} 0;
  box-shadow: ${EFFECT.shadow_light};
  position: relative;
  transition: ${EFFECT.transition};
`
const CloseIcon = styled(CloseSvg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const CloseIconWrapper = styled.div`
  width: 15%;
  height: 42px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: ${EFFECT.shadow_light};
  position: relative;
  transition: ${EFFECT.transition};
`
const SearchBarInput = styled.input`
  width: 80%;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  outline: none;
  border: 1px solid ${COLOR.white};
  border-radius: ${RADIUS.md} 0 0 ${RADIUS.md};
  padding: 20px;
  box-shadow: ${EFFECT.shadow_light};
  transition: ${EFFECT.transition};
  &:focus ~ ${SearchIconWrapper}, &:focus ~ ${CloseIconWrapper} {
    background-color: white;
  }
  &:focus {
    background-color: white;
  }
`

export default function SearchBar({ placeholder, horizontalAlign }) {
  return (
    <>
      <SearchBarWrapper $horizontalAlign={horizontalAlign}>
        <SearchBarInput placeholder={placeholder} />
        <CloseIconWrapper>
          <CloseIcon />
        </CloseIconWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchBarWrapper>
    </>
  )
}
