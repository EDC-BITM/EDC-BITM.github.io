
import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/edc-home" component={() => {
            window.location.href = 'https://edcbitmesra.in/';
            return null;
          }} />
          <Route path="/team" component={() => {
            window.location.href = 'https://edcbitmesra.in/team.html';
            return null;
          }} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
