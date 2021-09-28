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
          <Route path='/allArticlePage'>
            <AllArticlePage />
          </Route>
          <Route path='/allTrailPage'>
            <AllTrailPage />
          </Route>
          <Route path='/user'>
            <UserOverviewPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
