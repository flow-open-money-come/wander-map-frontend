import { COLOR, RADIUS, EFFECT } from '../../constants/style'

export const NavBarButton = `
  width: 200px;
  height: 30px;
  margin: 15px 0;
  line-height: 30px;
  text-align: center;
  border-radius: ${RADIUS.s};
  border: 1px solid ${COLOR.green};
  transition: ${EFFECT.transition};
  &:hover {
    cursor: pointer;
    color: ${COLOR.white};
    background-color: ${COLOR.green};
  }
`
