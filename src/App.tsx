import './App.scss'

import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Flexbox from './pages/flexbox/Flexbox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Flexbox} />
      </BrowserRouter>
    </div>
  )
}

export default App
