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
          <li>
            <a href='https://www.linkedin.com/in/abelfubu/' target='_blank'>
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/abelfubu' target='_blank'>
              <i className='fab fa-twitter-square'></i>
            </a>
          </li>
          <li>
            <a href='https://github.com/abelfubu' target='_blank'>
              <i className='fab fa-github-square'></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
