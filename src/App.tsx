import './App.scss'

import Header from '@UI/header/header.component'
import React, { useState } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Flexbox from './pages/flexbox/flexbox.component'

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
