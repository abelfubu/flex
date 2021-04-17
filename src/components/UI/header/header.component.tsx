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
            <Link to=''>Flexbox</Link>
          </li>
          <li>
            <Link to='/grid'>Grid</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
