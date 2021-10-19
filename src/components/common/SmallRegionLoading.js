import { memo } from 'react'
import styled from 'styled-components'
import { COLOR } from '../../constants/style'

const LoadingWrapper = styled.div`
  z-index: 10;
  display: inline-block;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  ${(props) =>
    props.$isFullScreen
      ? `position: absolute;
        top: 50%;
        left: 50%;`
      : `margin: 0 auto;`}

  & div {
    position: absolute;
    border: 4px solid ${COLOR.green_light};
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div:nth-child(2) {
    animation-delay: -0.7s;

    @keyframes ripple {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
  }
`

export default memo(function SmallRegionLoading({ isFullScreen }) {
  return (
    <LoadingWrapper $isFullScreen={isFullScreen}>
      <div></div>
      <div></div>
    </LoadingWrapper>
  )
})
