import { ResetStyle, GlobalStyle } from './constants/globalStyle'
import {
  HashRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'
import { useState, useEffect } from 'react'

import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AllTrailPage from './pages/TrailPages/AllTrailsPage/AllTrailPage'
import AllArticlesPage from './pages/ArticlePages/AllArticlesPage/AllArticlesPage'
import UserOverviewPage from './pages/UserPages/UserOverviewPage/UserOverviewPage'
import UserBackstage from './pages/UserPages/UserBackstage/UserBackstage'
import TrailPostPage from './pages/TrailPages/TrailPostPage'
import ArticlePostPage from './pages/ArticlePages/ArticlePostPage'
import AdminPage from './pages/AdminPage'
import TrailPage from './pages/TrailPages/TrailPage'
import BackToTopBtn from './components/common/BackToTopBtn'
import ArticlePage from './pages/ArticlePages/ArticlePage'
import jwt_decode from 'jwt-decode'
import { AuthContext, LoadingContext } from './context'
import { getAuthToken, setAuthToken } from './utils'
import { refreshAccessToken } from './WebAPI'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  const [userInfo, setUserInfo] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (getAuthToken()) {
      return setUserInfo(jwt_decode(getAuthToken()))
    }

    refreshAccessToken()
      .then((res) => {
        if (res.data.success) {
          setAuthToken(res.data.data.token)
          setUserInfo(jwt_decode(res.data.data.token))
        }
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ userInfo, setUserInfo }}>
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
          <ResetStyle />
          <GlobalStyle />
          <Router>
            <ScrollToTop />
            <NavBar />
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/login'>
                <LoginPage />
              </Route>
              <Route path='/register'>
                <RegisterPage />
              </Route>
              <Route path='/post-trail'>
                <TrailPostPage />
              </Route>
              <Route path='/post-article'>
                <ArticlePostPage />
              </Route>
              <Route exact path='/articles'>
                <AllArticlesPage />
              </Route>
              <Route exact path='/trails'>
                <AllTrailPage />
              </Route>
              <Route path='/user/userId'>
                <UserOverviewPage />
              </Route>
              <Route path='/admin'>
                <AdminPage />
              </Route>
              <Route path='/backstage/userId'>
                <UserBackstage />
              </Route>
              <Route path='/articles/:id'>
                <ArticlePage />
              </Route>
              <Route path='/trails/:trailID'>
                <TrailPage />
              </Route>
            </Switch>
            <BackToTopBtn />
            <Footer />
          </Router>
        </LoadingContext.Provider>
      </AuthContext.Provider>
    </>
  )
}

export default App
