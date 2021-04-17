import RadioInput from '@UI/radio-input/radio-input.component'
import Select from '@UI/select/select.component'
import { CustomEvent, FlexFormValues } from 'models'
import React, { useCallback } from 'react'

import classes from './flex-form.module.scss'

interface FlexFormProps {
  onValueChange: (event: CustomEvent) => void
  values: FlexFormValues
}

const FlexForm = ({ onValueChange, values }: FlexFormProps) => {
  const selectInputs = [
    { property: 'flexDirection', values: ['row', 'row-reverse', 'column', 'column-reverse'] },
    {
      property: 'justifyContent',
      values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    {
      property: 'alignItems',
      values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    {
      property: 'alignContent',
      values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
  ]

  const radioInputs = [
    { property: 'display', values: ['flex', 'block'] },
    { property: 'flexWrap', values: ['wrap', 'nowrap'] },
  ]

  const items = [...new Array(10)]

  const capitalize = useCallback((value: string) => {
    return value
      .split('-')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ')
  }, [])

  return (
    <form className={classes.form}>
      {selectInputs.map((item, i) => (
        <div key={i}>
          <p className={classes.title}>{capitalize(item.property)}</p>
          <Select
            key={i}
            name={item.property}
            value={values[item.property]}
            onChange={onValueChange}
            options={item.values}
          />
        </div>
      ))}
      {radioInputs.map((item, i) => (
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
        <p className={classes.title}>Flex Basis</p>
        <input
          className={classes.range}
          type='range'
          name='flexBasis'
          value={values.flexBasis}
          min='0'
          max='100'
          onChange={event => onValueChange({ name: event.target.name, value: event.target.value })}
        />
      </div>
      <div>
        <p className={classes.title}>Items</p>
        <Select
          value={values.items.toString()}
          options={items.map((_, i) => i + 1)}
          name='items'
          onChange={onValueChange}
        />
      </div>
    </form>
  )
}

export default FlexForm
