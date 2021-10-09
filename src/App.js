import { ResetStyle, GlobalStyle } from './constants/globalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

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

function App() {
  return (
    <>
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
          <Route path='/trails/1'>
            <TrailPage />
          </Route>
        </Switch>
        <BackToTopBtn />
        <Footer />
      </Router>
    </>
  )
}

export default App
