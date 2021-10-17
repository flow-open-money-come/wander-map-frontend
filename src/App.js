import { ResetStyle, GlobalStyle } from './constants/globalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
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
import { AuthContext } from './context'
import { getAuthToken } from './utils'

function App() {
  const [userInfo, setUserInfo] = useState(null)
  // had login before
  useEffect(() => {
    if (getAuthToken()) {
      setUserInfo(jwt_decode(getAuthToken()))
    }
  }, [])
  return (
    <>
      <AuthContext.Provider value={{ userInfo, setUserInfo }}>
        <ResetStyle />
        <GlobalStyle />
        <Router>
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
            <Route path='/patch-trail/:trailID?'>
              <TrailPostPage />
            </Route>
            <Route path='/post-article'>
              <ArticlePostPage />
            </Route>
            <Route path='/patch-article/:articleID?'>
              <ArticlePostPage />
            </Route>
            <Route exact path='/articles'>
              <AllArticlesPage />
            </Route>
            <Route exact path='/trails'>
              <AllTrailPage />
            </Route>
            <Route path='/user/:userID'>
              <UserOverviewPage />
            </Route>
            <Route path='/admin'>
              <AdminPage />
            </Route>
            <Route path='/backstage/:userID'>
              <UserBackstage />
            </Route>
            <Route path='/articles/id'>
              <ArticlePage />
            </Route>
            <Route path='/trails/1'>
              <TrailPage />
            </Route>
          </Switch>
          <BackToTopBtn />
          <Footer />
        </Router>
      </AuthContext.Provider>
    </>
  )
}

export default App
