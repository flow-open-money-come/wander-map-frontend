import React from 'react'
import styled from 'styled-components'
import { Link, useLocation, useHistory } from "react-router-dom"


const NavBarContainer = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
  width: 90%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0 auto;
  background-color: #7f9e23;
`;


function NavBar() {

  return (
    <NavBarContainer>
      歡迎來到 Wander Map
    </NavBarContainer>
  )
}

export default NavBar;
