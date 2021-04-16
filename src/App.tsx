import './App.scss'

import React, { useState } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Flexbox from './pages/flexbox/Flexbox'

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Header />
        <Route exact path='/' component={Flexbox} />
      </HashRouter>
    </div>
  )
}

export default App
