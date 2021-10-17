import styled from 'styled-components'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ReactComponent as ForumSvg } from '../../icons/forum.svg'
import { ReactComponent as TrailSvg } from '../../icons/trails.svg'
import { COLOR, FONT, EFFECT, RADIUS } from '../../constants/style'
import { NavBarButton } from './Button'
import useToggle from '../../hooks/useToggle'
import { AuthContext } from '../../context'
import { setAuthToken } from '../../utils'

const NavBarContainer = styled.div`
  width: 100%;
  height: 60px;
  border-top: 12px solid ${COLOR.green};
  background-color: ${COLOR.white};
  box-shadow: ${EFFECT.shadow_light};
  position: sticky;
  top: 0;
  z-index: 5;
`
const NavBarWrapper = styled.div`
  width: 90%;
  height: 48px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  min-width: 120px;
  min-height: 52px;
  height: 52px;
  background: url(https://i.imgur.com/782yeHS.png) center/cover;
  margin-top: 3px;
`

const NavBarLink = styled(Link)`
  color: ${COLOR.white};
  font-size: ${FONT.md};
  width: 120px;
  height: 48px;
  border-radius: 0 0 ${RADIUS.s} ${RADIUS.s};
  background-color: ${COLOR.green};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  box-shadow: ${EFFECT.shadow_light};
  ${(props) =>
    (props.$button || props.$noBackground) &&
    `
      color: ${COLOR.green};
      background-color: transparent;
      box-shadow: none;
    `}
  @media screen and (max-width: 768px) {
    background-color: transparent;
    color: ${COLOR.black};
    justify-content: space-between;
    box-shadow: none;
    ${(props) =>
      props.$button &&
      `
        display: block;
        color: ${COLOR.green};
        ${NavBarButton}
    `}
  }
`
const NavBarLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
    padding-left: 30px;
    align-items: baseline;
  }
`
const DefaultAvatar = styled(Link)`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background: url(https://i.imgur.com/r50z0vv.png) center/cover;
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`

const NavBarText = styled.div`
  min-width: 60px;
  font-size: ${FONT.md};
  color: ${COLOR.green};
  margin-left: 15px;
  text-align: right;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    ${NavBarButton}
  }
`
const NavBarHamburger = styled.div`
  position: relative;
  width: 25px;
  height: 15px;
  cursor: pointer;
  display: none;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLOR.green};
    transition: ${EFFECT.transition};
    ${(props) =>
      props.$isActive &&
      ` 
      top: 50%;
      transform: translateY(-50%);
      transform: rotate(45deg);`};
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLOR.green};
    transition: ${EFFECT.transition};
    ${(props) =>
      props.$isActive &&
      `
      top: 50%;
      transform: translateY(-50%);
      transform: rotate(-45deg);`};
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const NavBarHamburgerLine = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: ${COLOR.green};
  top: 50%;
  transform: translateY(-50%);
  ${(props) =>
    props.$isActive &&
    `
      display:none`};
`

const NavBarMobile = styled.div`
  @media screen and (max-width: 768px) {
    width: 275px;
    height: 0;
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    transition: ${EFFECT.transition};
    ${(props) => props.$isActive && `height: 530px;`}
  }
`
const Divider = styled.div`
  width: 80%;
  height: 2px;
  background-color: ${COLOR.beige};
  display: none;
  margin: 20px 0;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const Forum = styled(ForumSvg)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`
const Trail = styled(TrailSvg)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`

function NavBar() {
  const [HamburgerToggleClick, setHamburgerToggleClick] = useToggle(false)
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const history = useHistory()
  const location = useLocation()

  const handleLogOut = () => {
    if (location.pathname !== '/') history.push('/')
    setAuthToken('')
    setUserInfo(null)
  }

  return (
    <>
      <NavBarContainer>
        <NavBarWrapper>
          <Logo to='/' />
          <NavBarMobile $isActive={HamburgerToggleClick}>
            <NavBarLinkWrapper>
              <NavBarLink to='/articles'>
                <Forum />
                進入論壇
              </NavBarLink>
              <NavBarLink to='/trails'>
                <Trail />
                全部步道
              </NavBarLink>
              {userInfo && (
                <NavBarLink to={`/backstage/${userInfo.user_id}`} $noBackground>
                  <DefaultAvatar to={`/backstage/${userInfo.user_id}`} />
                  {userInfo.nickname}
                </NavBarLink>
              )}
              <Divider />
              {userInfo && <NavBarText onClick={handleLogOut}>登出</NavBarText>}
              {!userInfo && (
                <NavBarLink $button to='/register'>
                  會員註冊 / 登入
                </NavBarLink>
              )}
            </NavBarLinkWrapper>
          </NavBarMobile>
          <NavBarHamburger
            $isActive={HamburgerToggleClick}
            onClick={setHamburgerToggleClick}
          >
            <NavBarHamburgerLine
              $isActive={HamburgerToggleClick}
              onClick={setHamburgerToggleClick}
            />
          </NavBarHamburger>
        </NavBarWrapper>
      </NavBarContainer>
    </>
  )
}

export default NavBar
