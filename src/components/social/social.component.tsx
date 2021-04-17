import React from 'react'

import classes from './social.module.scss'

const Social = () => (
  <>
    <ul className={classes.social}>
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
    <span className={classes.span}>With ♥ for my students | abelfubu@gmail.com</span>
  </>
)

export default Social
