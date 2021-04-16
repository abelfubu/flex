import React from 'react'

import classes from './header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <a href=''>LOGO</a>
      <nav>
        <ul>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
