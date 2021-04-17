import Header from '@UI/header/header.component'
import Social from 'components/social/social.component'
import Flexbox from 'pages/flexbox/flexbox.component'
import Grid from 'pages/grid/grid.component'
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import classes from './App.module.scss'

const App = () => (
  <div className={classes['dark-mode']}>
    <BrowserRouter basename='/flex'>
      <Header />
      <Switch>
        <Route exact path='/' component={Flexbox} />
        <Route path='/grid' component={Grid} />
      </Switch>
      <Social />
    </BrowserRouter>
  </div>
)

export default App
