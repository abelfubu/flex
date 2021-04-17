import './App.scss'

import Header from '@UI/header/header.component'
import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Flexbox from './pages/flexbox/flexbox.component'

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename='/flex'>
        <Header />
        <Route exact path='' component={Flexbox} />
      </BrowserRouter>
    </div>
  )
}

export default App
