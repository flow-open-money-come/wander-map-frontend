import React, { useState, useEffect, useRef, useContext } from 'react'
import styled from 'styled-components'
import ArticleList from '../../../components/forumSystem/Article'
import Carousel from '../../../components/forumSystem/Carousel'
import ForumFilter from '../../../components/forumSystem/Filter'
import { ReactComponent as Hot } from '../../../icons/hot.svg'
import { FONT, MEDIA_QUERY } from '../../../constants/style'
import { NavBarButton } from '../../../components/common/Button'
import { getArticles } from '../../../WebAPI'
import { COLOR } from '../../../constants/style'
import { useInput } from '../../../hooks/useInput'
import { LoadingContext } from '../../../context'
import SmallRegionLoading from '../../../components/common/SmallRegionLoading'
import swal from 'sweetalert'

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

  ${(props) =>
    props.overLoad &&
    `
      margin: 0 auto 100px auto;

  `}
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
  const { inputValue, setInputValue, handleInputChange } = useInput()
  const [filterData, setFilterData] = useState()
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const params = useRef(5)
  const [totalPosts, setTotalPosts] = useState()
  let overLoad = false

  useEffect(() => {
    setIsLoading(true)
    getArticles('/hot')
      .then((res) => {
        if (res.data.data.length > 0) {
          setSlides(res.data.data)
        } else {
          getArticles('?limit=5')
            .then((res) => {
              if (res.data.data.length > 0) {
                setSlides(res.data.data)
                setIsLoading(false)
              }
            })
            .catch((err) => {
              console.log(err)
              if (err) {
                swal(
                  'Oh 不！',
                  '請求失敗！請稍候再試一次，或者聯繫我們。',
                  'error'
                )
              }
            })
        }
      })
      .catch((err) => {
        console.log(err)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
  }, [setIsLoading])

  useEffect(() => {
    setIsLoading(true)
    params.current = 5
    let url = ''
    if (tagValue.length > 0) {
      tagValue.map((tag) => (url += `&tag=${tag}`))
    }
    if (filterData) {
      url += `&search=${filterData}`
    }
    getArticles(`?limit=5${url}`)
      .then((res) => {
        if (res.data.success) {
          setPosts(res.data.data)
          setTotalPosts(Number(Object.values(res.headers)[2]))
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
  }, [tagValue, filterData, setIsLoading])

  const handleClickLoadMore = () => {
    setIsLoading(true)
    if (overLoad) {
      return
    }
    let url = ''
    if (tagValue.length > 0) {
      tagValue.map((tag) => (url += `&tag=${tag}`))
    }
    if (filterData) {
      url += `&search=${filterData}`
    }
    getArticles(`?limit=5&offset=${params.current}${url}`)
      .then((res) => {
        if (res.data.success) {
          setPosts(posts.concat(res.data.data))
          setTotalPosts(Number(Object.values(res.headers)[2]))
          setIsLoading(false)
        }
      })
      .catch((err) => {
        console.log(err)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
    params.current += 5
  }

  const handleClickSearch = (e) => {
    setFilterData(inputValue)
  }

  const handleClickCross = () => {
    setInputValue('')
    setFilterData('')
  }

  if (posts.length >= totalPosts) {
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
    // { tagId: 14, tagName: 'GPX', isChecked: false },
  ])

  return (
    <>
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
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleClickSearch={handleClickSearch}
          handleClickCross={handleClickCross}
        />
        {isLoading && <SmallRegionLoading isFullScreen />}
        <ArticleListWrapper overLoad={overLoad}>
          {posts.map((post) => {
            return (
              <ArticleList
                articleImgSrc={post.cover_picture_url}
                title={post.title}
                user={post.nickname}
                tags={!post.tag_names ? [] : post.tag_names.split(',')}
                date={new Date(
                  new Date(post.created_at).getTime() + 8 * 3600 * 1000
                ).toLocaleString('ja')}
                content={post.content}
                avatarImgSrc={post.user_icon}
                articlePage={`/articles/${post.article_id}`}
                authorId={post.author_id}
              />
            )
          })}
          {tagValue && posts.length === 0 && (
            <NoRelatedArticleNotice>暫無相關文章</NoRelatedArticleNotice>
          )}
          {posts.length !== 0 && !overLoad && (
            <LoadMoreBtn overLoad={overLoad} onClick={handleClickLoadMore}>
              看更多
            </LoadMoreBtn>
          )}
        </ArticleListWrapper>
      </Wrapper>
    </>
  )
}

export default AllArticlesPage
