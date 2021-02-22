
import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
