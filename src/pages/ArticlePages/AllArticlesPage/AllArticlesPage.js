import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ArticleList from '../../../components/forumSystem/Article'
import Carousel from '../../../components/forumSystem/Carousel'
import ForumFilter from '../../../components/forumSystem/Filter'
import { ReactComponent as Hot } from '../../../icons/hot.svg'
import { FONT, MEDIA_QUERY } from '../../../constants/style'
import { NavBarButton } from '../../../components/common/Button'
import { apiArticlesHot, apiArticlesOptions } from '../../../WebAPI'
import { COLOR } from '../../../constants/style'

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY.md} {
    width: 90%;
    font-size: ${FONT.md};
  }
`

const Title = styled.span`
  font-size: ${FONT.lg};

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`

const HotIcon = styled(Hot)`
  width: 29px;
  height: 29px;
  padding-top: 10px;
  transform: translate(4px, 2px);

  ${MEDIA_QUERY.md} {
    width: 40px;
    height: 40px;
    transform: translate(4px, 6px);
  }

  ${MEDIA_QUERY.lg} {
    width: 50px;
    height: 50px;
  }
`

const TitleGroup = styled.div`
  margin: 0 auto;
`

const LoadMoreBtn = styled.button`
  ${NavBarButton}
  font-size: ${FONT.md};
  margin: 50px 0px 100px 50%;
  transform: translate(-50%);

  ${(props) =>
    props.overLoad &&
    `
    visibility: hidden;
    margin-bottom: 20px;
  `}
`
const ArticleListWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`

const NoRelatedArticleNotice = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 100px 0;
  color: ${COLOR.gray};
`

function AllArticlesPage() {
  const [slides, setSlides] = useState([])
  const [posts, setPosts] = useState([])
  const [tagValue, setTagValue] = useState([])
  const [search, setSearch] = useState('')
  const params = useRef(10)
  let overLoad = false

  useEffect(() => {
    apiArticlesHot()
      .then((res) => {
        if (res.data.message === 'OK') {
          setSlides(res.data.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    apiArticlesOptions(5, tagValue)
      .then((res) => {
        if (res.data.message === 'OK') {
          setPosts(res.data.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [tagValue])

  const handleClickLoadMore = () => {
    apiArticlesOptions(0, tagValue)
      .then((res) => {
        if (res.data.message === 'OK') {
          setPosts(res.data.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    while (params.current < posts.length) {
      params.current += 5
    }
  }

  if (params.current >= posts.length && posts.length !== 5) {
    overLoad = true
  }

  const [tags, setTags] = useState([
    { tagId: 1, tagName: '一日', isChecked: false },
    { tagId: 2, tagName: '多日', isChecked: false },
    { tagId: 3, tagName: '海景', isChecked: false },
    { tagId: 4, tagName: '夜景', isChecked: false },
    { tagId: 5, tagName: '山景', isChecked: false },
    { tagId: 6, tagName: '城市景色', isChecked: false },
    { tagId: 7, tagName: '賞花', isChecked: false },
    { tagId: 8, tagName: '稀有動植物', isChecked: false },
    { tagId: 9, tagName: '有水源', isChecked: false },
    { tagId: 10, tagName: '危險地形', isChecked: false },
    { tagId: 11, tagName: '需專業裝備', isChecked: false },
    { tagId: 12, tagName: '登山小白體驗', isChecked: false },
    { tagId: 13, tagName: '專業老手分享', isChecked: false },
    { tagId: 14, tagName: 'GPX', isChecked: false },
  ])
  console.log(tags)
  return (
    <Wrapper>
      <TitleGroup>
        <HotIcon />
        <Title>熱門文章</Title>
      </TitleGroup>
      <Carousel slides={slides} />
      <ForumFilter
        tags={tags}
        setTags={setTags}
        tagValue={tagValue}
        setTagValue={setTagValue}
        search={search}
        setSearch={setSearch}
      />
      <ArticleListWrapper>
        {posts.slice(0, params.current).map((post) => {
          return (
            <ArticleList
              articleImgSrc={post.cover_picture_url}
              title={post.title}
              user={'水怪貓貓'} // 待修正
              tags={!post.tag_names ? [] : post.tag_names.split(',')}
              date={new Date(post.created_at).toLocaleString()}
              content={post.content}
              avatarImgSrc={'https://i.imgur.com/YGh2ZNl.png'} // 待修正
              articlePage={`/articles/${post.article_id}`}
            />
          )
        })}
        {tagValue && posts.length === 0 ? (
          <NoRelatedArticleNotice>暫無相關文章</NoRelatedArticleNotice>
        ) : (
          <LoadMoreBtn overLoad={overLoad} onClick={handleClickLoadMore}>
            看更多
          </LoadMoreBtn>
        )}
      </ArticleListWrapper>
    </Wrapper>
  )
}

export default AllArticlesPage
