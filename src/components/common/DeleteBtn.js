import styled from 'styled-components'
import { useState } from 'react'
import { COLOR } from '../../constants/style'

const DeleteBtnItem = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: 0.5s;
  z-index: 2;
  background-color: ${COLOR.gray_light};
  &:hover {
    background-color: ${COLOR.white};
  }
  &:after,
  &:before {
    z-index: 2;
    content: '';
    width: 70%;
    height: 1px;
    background: ${COLOR.green};
    position: absolute;
    top: 50%;
    left: 50%;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`
export default function DeleteBtn() {
  return (
    <>
      <DeleteBtnItem />
    </>
  )
}
