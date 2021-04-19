import logo from 'favicon.svg'
import React from 'react'
import { Link } from 'react-router-dom'

import classes from './header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to=''>
        <img src={logo} alt='Logo' />
        belfubu
      </Link>
      <nav>
        <ul>
          <li>
            <Link to=''>
              <span className={classes.primary}>01.</span>Flexbox
            </Link>
          </li>
          <li>
            <Link to='/grid'>
              <span className={classes.primary}>02.</span>Grid
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
