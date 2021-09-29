import { ResetStyle, GlobalStyle } from './constants/globalStyle'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AllTrailPage from './pages/TrailPages/AllTrailsPage/AllTrailPage'
import AllArticlePage from './pages/ArticlePages/AllArticlesPage/AllArticlesPage'
import UserOverviewPage from './pages/UserPages/UserOverviewPage/UserOverviewPage'
import TrailPostPage from './pages/TrailPages/TrailPostPage'
import ArticlePostPage from './pages/ArticlePages/ArticlePostPage'
import AdminPage from './pages/AdminPage'
import TrailPage from './pages/TrailPages/TrailPage'

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
          <Route path='/articles'>
            <AllArticlePage />
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
          <Route path='/backstage/userId'></Route>
          <Route path='/articles/id'></Route>
          <Route path='/trails/1'>
            <TrailPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
