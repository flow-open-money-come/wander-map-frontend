import React, { useState, useEffect } from 'react'
import { getUserArticles, deleteArticle } from '../../WebAPI'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'
import { ReactComponent as EditIcon } from '../../icons/user/user_article_manage_edit.svg'
import { ReactComponent as PostIcon } from '../../icons/user/user_post.svg'
import SmallRegionLoading from '../common/SmallRegionLoading'
import swal from 'sweetalert'

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`

const PostLink = styled.div`
  text-align: right;
  transition: ${EFFECT.transition};
  border-bottom: 1px solid ${COLOR.beige};
  position: sticky;
  top: 0;
  background-color: ${COLOR.white};
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${COLOR.gray};
  svg {
    width: 30px;
    height: 30px;
    margin: 20px;
    transition: ${EFFECT.transition};
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      transform-origin: (15px, 0);
    }
  }
`
const TrailsTable = styled.table`
  margin: 10px auto;
  width: 90%;
  display: block;
  ${MEDIA_QUERY.lg} {
    height: 400px;
  }
`
const TableContent = styled.tr`
  text-align: center;
  font-size: ${FONT.s};
  border-bottom: 1px solid #f0eeeb;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
`
const CoverTd = styled.td`
  display: inline;
  text-align: start;
`
const TrailImg = styled.img`
  margin: 20px 5px;
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${RADIUS.lg};
  background-color: #eee;
`
const TrailsTd = styled.td`
  width: 70%;
  text-align: start;
  padding: 10px;
  vertical-align: middle;
  font-size: ${FONT.md};
  ${MEDIA_QUERY.md} {
    width: 80%;
  }
`
const BtnTd = styled.td`
  vertical-align: middle;
  svg {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 30px;
      height: 30px;
      margin: 0 8px;
    }
  }
`

export default function UserArticlesManage() {
  const [userArticlesData, setUserArticlesData] = useState({
    articles: [
      {
        title: '',
        content: '',
        cover_picture_url: '',
        created_at: '',
      },
    ],
  })
  const [articles, setArticles] = useState(null)
  const { userID } = useParams()
  const [isLoadingArticles, setIsLoadingArticles] = useState(false)

  useEffect(() => {
    let isUnmount = false
    if (!userID) return
    setIsLoadingArticles(true)
    getUserArticles(userID, '?limit=100')
      .then((res) => {
        if (res.data.success && !isUnmount) {
          setUserArticlesData(res.data.data)
          setIsLoadingArticles(false)
        }
      })
      .catch(() => {
        if (!isUnmount) {
          swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
          setIsLoadingArticles(false)
        }
      })
    return () => (isUnmount = true)
  }, [userID, setIsLoadingArticles])

  const handleDelete = (articleID, articleTitle) => {
    if (!userID) return
    swal({
      title: '確定刪除嗎？',
      icon: 'warning',
      buttons: ['取消', '確定'],
      dangerMode: true,
    }).then((willDo) => {
      if (willDo) {
        deleteArticle(articleID)
          .then((res) => {
            if (res.data.success) {
              setArticles(
                articles.filter((article) => article.article_id !== articleID)
              )
              swal(`已刪除文章 ${articleTitle}`, {
                icon: 'success',
                button: '關閉',
              })
            }
          })
          .catch(() => {
            swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
          })
      }
    })
  }

  return (
    <Block>
      {isLoadingArticles && <SmallRegionLoading />}
      <PostLink>
        新增文章
        <Link to={`../post-article`}>
          <PostIcon />
        </Link>
      </PostLink>
      <TrailsTable>
        <tbody>
          {!isLoadingArticles &&
            userArticlesData.articles.map((article) => (
              <TableContent key={`${article.article_id}`}>
                <CoverTd>
                  <Link to={`../articles/${article.article_id}`}>
                    <TrailImg src={article.cover_picture_url} />
                  </Link>
                </CoverTd>
                <TrailsTd>{article.title}</TrailsTd>
                <BtnTd>
                  <Link to={`../update-article/${article.article_id}`}>
                    <EditIcon />
                  </Link>
                </BtnTd>
                <BtnTd>
                  <BinIcon
                    onClick={() => {
                      handleDelete(article.article_id, article.title)
                    }}
                  />
                </BtnTd>
              </TableContent>
            ))}
        </tbody>
      </TrailsTable>
    </Block>
  )
}
