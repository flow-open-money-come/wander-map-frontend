import React, { useState, useEffect } from 'react'
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
  const [params, setParams] = useState(0)
  const [tagValue, setTagValue] = useState([])

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
    let limit = 10
    apiArticlesOptions(limit, tagValue)
      .then((res) => {
        if (res.data.message === 'OK') {
          setPosts(res.data.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    limit += 5
  }

  const [tags, setTags] = useState([
    { tag_id: 1, tag_name: '一日', isChecked: false },
    { tag_id: 2, tag_name: '多日', isChecked: false },
    { tag_id: 3, tag_name: '海景', isChecked: false },
    { tag_id: 4, tag_name: '夜景', isChecked: false },
    { tag_id: 5, tag_name: '山景', isChecked: false },
    { tag_id: 6, tag_name: '城市景色', isChecked: false },
    { tag_id: 7, tag_name: '賞花', isChecked: false },
    { tag_id: 8, tag_name: '稀有動植物', isChecked: false },
    { tag_id: 9, tag_name: '有水源', isChecked: false },
    { tag_id: 10, tag_name: '危險地形', isChecked: false },
    { tag_id: 11, tag_name: '需專業裝備', isChecked: false },
    { tag_id: 12, tag_name: '登山小白體驗', isChecked: false },
    { tag_id: 13, tag_name: '專業老手分享', isChecked: false },
    { tag_id: 14, tag_name: 'GPX', isChecked: false },
  ])

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
      />
      <ArticleListWrapper>
        {posts.slice(params).map((post) => {
          return (
            <ArticleList
              articleImgSrc={post.cover_picture_url}
              title={post.title}
              // user={'水怪貓貓'}
              tags={!post.tag_names ? [] : post.tag_names.split(',')}
              date={new Date(post.created_at).toLocaleString()}
              content={post.content}
              // avatarImgSrc={'https://i.imgur.com/YGh2ZNl.png'}
              articlePage={`/articles/${post.article_id}`}
            />
          )
        })}
        {tagValue && posts.length === 0 ? (
          <NoRelatedArticleNotice>暫無相關文章</NoRelatedArticleNotice>
        ) : (
          <LoadMoreBtn onClick={handleClickLoadMore}>看更多</LoadMoreBtn>
        )}
      </ArticleListWrapper>
    </Wrapper>
  )
}

export default AllArticlesPage
