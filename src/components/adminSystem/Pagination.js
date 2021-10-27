import React from 'react'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 20px auto;
  ${MEDIA_QUERY.md} {
    width: 300px;
  }
`
const PageRedirect = styled.a`
  text-decoration: none;
  color: #7f9e23;
  font-size: ${FONT.s};
  margin: 0 5px;
  &:hover {
    cursor: pointer;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
`
const PageNumber = styled.div``

function Pagination({ page, setPage, totalPages }) {
  const handleChangePage = (page) => {
    setPage(page)
    window.scrollTo(0, 160)
  }

  return (
    <PaginationWrapper>
      <PageRedirect
        onClick={() => {
          handleChangePage(1)
        }}
      >
        {page !== 1 && '頁首'}
      </PageRedirect>
      <PageRedirect
        onClick={() => {
          handleChangePage(page - 1)
        }}
      >
        {page !== 1 && '上一頁'}
      </PageRedirect>
      <PageNumber>
        {page} / {totalPages}
      </PageNumber>
      <PageRedirect
        onClick={() => {
          handleChangePage(page + 1)
        }}
      >
        {page !== totalPages && '下一頁'}
      </PageRedirect>
      <PageRedirect
        onClick={() => {
          handleChangePage(totalPages)
        }}
      >
        {page !== totalPages && '頁尾'}
      </PageRedirect>
    </PaginationWrapper>
  )
}

export default Pagination
