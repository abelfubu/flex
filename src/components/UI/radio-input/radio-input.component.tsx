import { CustomEvent } from 'models'
import React from 'react'

import classes from './radio-input.module.scss'

interface RadioInputProps {
  label: string
  name: string
  value: string
  checked: boolean
  onChange: ({ name, value }: CustomEvent) => void
}

const RadioInput = ({ value, name, label, onChange, checked }: RadioInputProps) => (
  <div className={classes.input}>
    <div className={classes.radio} onClick={() => onChange({ name, value })}>
      <div className={`${checked ? classes.in : classes.out} ${classes.checked}`}></div>
    </div>
    <span>{label}</span>
  </div>
)

export default RadioInput
