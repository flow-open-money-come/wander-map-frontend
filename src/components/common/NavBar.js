import styled from 'styled-components'
// import { ReactComponent as DefaultAvatarSvg } from '../../icons/default_avatar.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowUpSvg } from '../../icons/arrow_up.svg'
import { ReactComponent as ArrowDownSvg } from '../../icons/arrow_down.svg'
import { ReactComponent as ForumSvg } from '../../icons/forum.svg'
import { ReactComponent as TrailSvg } from '../../icons/trails.svg'
import { ReactComponent as UserSvg } from '../../icons/user.svg'
import { COLOR, FONT, EFFECT } from '../../constants/style'
import { NavBarButton } from './Button'
import useToggle from '../../hooks/useToggle'

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
  width: 120px;
  height: 48px;
  border-radius: 0 0 5px 5px;
  background-color: ${COLOR.green};
  text-align: center;
  line-height: 48px;
  color: ${COLOR.white};
  font-size: ${FONT.s};
  margin-left: 10px;
  box-shadow: ${EFFECT.shadow_light};
  ${(props) =>
    props.$button &&
    `
      min-width: 60px;
      font-size: ${FONT.s};
      color: ${COLOR.green};
      margin-left: 15px;
      text-align: right;
      transition: ${EFFECT.transition};
      background-color: transparent;
      box-shadow: none;
      &:hover {
        color: ${COLOR.green_light};
        cursor: pointer;
      }
    `}
  @media screen and (max-width: 768px) {
    background-color: transparent;
    color: black;
    display: flex;
    align-items: center;
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
const UserInfoWeb = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const UserInfoMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`
const UserInfoMobileWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: right;
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
  min-width: 45px;
  min-height: 45px;
  margin-left: 35px;
  background: url(https://i.imgur.com/r50z0vv.png) center/cover;
`

const NavBarText = styled.div`
  min-width: 60px;
  font-size: ${FONT.s};
  color: ${COLOR.green};
  margin-left: 15px;
  text-align: right;
  transition: ${EFFECT.transition};
  &:hover {
    color: ${COLOR.green_light};
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
  z-index: 3;
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
  margin: 20px 0 20px 0;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
const UserInfoListMobile = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 70px;
  height: 0;
  overflow: hidden;
  transition: ${EFFECT.transition};
  ${(props) => props.$isActive && `height: 150px`}
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
const User = styled(UserSvg)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 20px;
  }
`

const ArrowDown = styled(ArrowDownSvg)`
  ${(props) => props.$isActive && `display:none`}
`
const ArrowUp = styled(ArrowUpSvg)`
  display: none;
  ${(props) => props.$isActive && `display:block`}
`

function NavBar() {
  const [HamburgerToggleClick, setHamburgerToggleClick] = useToggle(false)
  const [arrowToggleClick, setArrowToggleClick] = useToggle(false)

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
              <UserInfoWeb>
                <DefaultAvatar to='/backstage/1' />
                <NavBarText>水怪貓貓</NavBarText>
              </UserInfoWeb>
              <UserInfoMobileWrapper>
                <UserInfoMobile>
                  <NavBarLink to='/backstage/userId'>
                    <User />
                    我的主頁
                  </NavBarLink>
                  <ArrowDown
                    $isActive={arrowToggleClick}
                    onClick={setArrowToggleClick}
                  />
                  <ArrowUp
                    $isActive={arrowToggleClick}
                    onClick={setArrowToggleClick}
                  />
                </UserInfoMobile>
                <UserInfoListMobile $isActive={arrowToggleClick}>
                  <NavBarLink>新增文章</NavBarLink>
                  <NavBarLink>管理文章</NavBarLink>
                  <NavBarLink>待辦事項</NavBarLink>
                </UserInfoListMobile>
              </UserInfoMobileWrapper>
              <Divider />
              <NavBarText>登出</NavBarText>
              <NavBarLink $button to='/register'>
                會員註冊 / 登入
              </NavBarLink>
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
