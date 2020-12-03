import React from 'react'

import { Switch, Route, Link } from 'react-router-dom'

import HomePage from './pages/homepage/homepage'
import Information from './pages/information/information'

import './App.css'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Link to='/' className='heading'>
        Dex
      </Link>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/1' component={Information} />
      </Switch>
    </div>
  )
}

export default App
