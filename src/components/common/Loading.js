import React from 'react'
import styled from 'styled-components'
import { ReactComponent as mount } from '../../../src/icons/mountain.svg'

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

const MountainLoader = styled(mount)`
  height: 60px;
  width: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.2);
    }
  }
`

export default function Loading() {
  return (
    <LoadingWrapper>
      <MountainLoader />
    </LoadingWrapper>
  )
}
