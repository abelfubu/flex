import RadioInput from '@UI/radio-input/radio-input.component'
import Select from '@UI/select/select.component'
import React, { ChangeEvent } from 'react'

import { FlexFormValues } from '../../../models'
import classes from './flex-form.module.scss'

const FlexForm = ({
  onValueChange,
  values,
}: {
  onValueChange: (event: any) => any
  values: FlexFormValues
}) => {
  const formValues = [
    { property: 'display', values: ['flex', 'block'] },
    {
      property: 'justifyContent',
      values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    {
      property: 'alignItems',
      values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    { property: 'flexDirection', values: ['row', 'column'] },
    { property: 'flexWrap', values: ['wrap', 'nowrap'] },
  ]

  const items = [...new Array(10)]

  const capitalize = (value: string) => {
    return value
      .split('-')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ')
  }

  return (
    <form className={classes.form}>
      {formValues.map((item, i) => (
        <div key={i}>
          <p className={classes.title}>{capitalize(item.property)}</p>
          {item.values.map((input, i) => (
            <RadioInput
              key={i}
              name={item.property}
              value={input}
              label={capitalize(input)}
              onChange={onValueChange}
              checked={input === values[item.property]}
            />
          ))}
        </div>
      ))}
      <div>
        <p className={classes.title}>Items</p>
        <Select
          value={values.items.toString()}
          options={items}
          name='items'
          onChange={onValueChange}
        />
      </div>
    </form>
  )
}

export default FlexForm
