import React from 'react'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  margin: 30px auto;
`
const PageRedirect = styled.a`
  text-decoration: none;
  color: #7f9e23;
  &:hover {
    cursor: pointer;
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
