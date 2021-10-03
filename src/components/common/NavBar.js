import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as LogoSvg } from '../../icons/logo_with_name.svg'
import { ReactComponent as DefaultAvatarSvg } from '../../icons/default_avatar.svg'
import { Link, useLocation } from 'react-router-dom'
import { ReactComponent as ArrowUpSvg } from '../../icons/arrow_up.svg'
import { ReactComponent as ArrowDownSvg } from '../../icons/arrow_down.svg'
import { ReactComponent as ForumSvg } from '../../icons/forum.svg'
import { ReactComponent as TrailSvg } from '../../icons/trails.svg'
import { ReactComponent as UserSvg } from '../../icons/user.svg'
import { COLOR, FONT, EFFECT } from '../../constants/style'
import { NavBarButton } from './Button'

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
const Logo = styled(LogoSvg)`
  min-width: 120px;
  min-height: 48px;
  width: 120px;
  height: 48px;
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
const UserInfoWrapperMobile = styled.div`
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

const DefaultAvatar = styled(DefaultAvatarSvg)`
  min-width: 45px;
  min-height: 45px;
  margin-left: 35px;
`
const NavBarTextLink = styled.div`
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
const NavBarHambergur = styled.div`
  position: relative;
  width: 25px;
  height: 15px;
  cursor: pointer;
  display: none;
  z-index: 3;
  &::before {
    content: '';
    top: 0;
    position: absolute;
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
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${COLOR.green};
    transition: 0.5s;
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

const NavBarHambergurLine = styled.div`
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
    background-color: rgba(255, 255, 255, 0.9);
    width: 275px;
    height: 0;
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
  background-color: #f0eeeb;
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
  const location = useLocation()
  const [hambergurToggleClick, setHambergurToggleClick] = useState(false)
  const [arrowToggleClick, setArrowToggleClick] = useState(false)
  const handleToggleClick = (e) => {
    e.target.getAttribute('name') === 'hambergur'
      ? setHambergurToggleClick(!hambergurToggleClick)
      : setArrowToggleClick(!arrowToggleClick)
  }
  return (
    <>
      <NavBarContainer>
        <NavBarWrapper>
          <Logo />
          <NavBarMobile $isActive={hambergurToggleClick}>
            <NavBarLinkWrapper>
              <NavBarLink
                to='/articles'
                $active={'/articles' === location.pathname}
              >
                <Forum />
                進入論壇
              </NavBarLink>

              <NavBarLink
                to='/trails'
                $active={'/trails' === location.pathname}
              >
                <Trail />
                全部步道
              </NavBarLink>
              <UserInfoWeb>
                <DefaultAvatar />
                <NavBarTextLink>水怪貓貓</NavBarTextLink>
              </UserInfoWeb>
              <UserInfoWrapperMobile>
                <UserInfoMobile>
                  <NavBarLink
                    to='/backstage/userId'
                    $active={'/backstage/userId' === location.pathname}
                  >
                    <User />
                    我的主頁
                  </NavBarLink>
                  <ArrowDown
                    name='arrow'
                    $isActive={arrowToggleClick}
                    onClick={(e) => {
                      handleToggleClick(e)
                    }}
                  />
                  <ArrowUp
                    name='arrow'
                    $isActive={arrowToggleClick}
                    onClick={(e) => {
                      handleToggleClick(e)
                    }}
                  />
                </UserInfoMobile>
                <UserInfoListMobile $isActive={arrowToggleClick}>
                  <NavBarLink>新增文章</NavBarLink>
                  <NavBarLink>管理文章</NavBarLink>
                  <NavBarLink>待辦事項</NavBarLink>
                </UserInfoListMobile>
              </UserInfoWrapperMobile>
              <Divider />
              <NavBarTextLink>登出</NavBarTextLink>
              <NavBarLink $button>會員註冊 / 登入</NavBarLink>
            </NavBarLinkWrapper>
          </NavBarMobile>
          <NavBarHambergur
            name='hambergur'
            $isActive={hambergurToggleClick}
            onClick={(e) => {
              handleToggleClick(e)
            }}
          >
            <NavBarHambergurLine
              name='hambergur'
              $isActive={hambergurToggleClick}
              onClick={(e) => {
                handleToggleClick(e)
              }}
            />
          </NavBarHambergur>
        </NavBarWrapper>
      </NavBarContainer>
    </>
  )
}

export default NavBar
