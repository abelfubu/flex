import React from 'react'
import { Link } from 'react-router-dom'

import classes from './header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <a href=''>LOGO</a>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
