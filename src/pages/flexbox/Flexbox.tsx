import React, { ChangeEvent, useState } from 'react'

import FlexForm from '../../components/flexbox/flex-form/FlexForm'
import classes from './flexbox.module.scss'

type FlexDirection = 'row' | 'column'

interface FlexFormValues {
  display: string
  justifyContent: string
  alignItems: string
  items: number
  flexDirection: FlexDirection | undefined
}

const Flexbox = () => {
  const initialValues: FlexFormValues = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    items: 3,
  }

  const colors = [
    '#beef9e',
    '#b8e493',
    '#b2d987',
    '#a6c36f',
    '#94a860',
    '#828c51',
    '#5b6f4b',
    '#335145',
    '#29433a',
    '#1e352f',
  ]

  const [formValue, setFormValue] = useState<FlexFormValues>(initialValues)

  const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValue(prevValue => ({ ...prevValue, [event.target.name]: event.target.value }))
  }

  return (
    <div className={classes.main}>
      <h1>FlexBox</h1>
      <FlexForm onValueChange={handleFormChange} values={formValue} />
      <div style={formValue}>
        {colors.map(
          (color, i) =>
            i < formValue.items && (
              <div
                key={i}
                className={classes['flex-item']}
                style={{ backgroundColor: color, color: i < 4 ? '#000' : '#fff' }}>
                Child {i + 1}
              </div>
            ),
        )}
      </div>
    </div>
  )
}

export default Flexbox
