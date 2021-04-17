import React from 'react'

import classes from './title.module.scss'

interface TitleProps {
  text: string
}
const Title = ({ text }: TitleProps) => <h1 className={classes.title}>{text}</h1>

export default Title
