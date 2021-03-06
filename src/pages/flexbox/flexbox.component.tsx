import FlexForm from '@flexbox/flex-form/flex-form.component'
import FlexPanel from '@flexbox/flex-panel/flex-panel.component'
import Title from '@UI/title/title.component'
import { CustomEvent, FlexFormValues } from 'models'
import React, { useState } from 'react'

import classes from './flexbox.module.scss'

const Flexbox = () => {
  const initialValues: FlexFormValues = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    flexBasis: '0',
    items: 3,
  }

  const [formValues, setFormValues] = useState<FlexFormValues>(initialValues)

  const handleFormChange = (event: CustomEvent) => {
    setFormValues(prevValue => ({ ...prevValue, [event.name]: event.value }))
  }

  return (
    <div className={classes.main}>
      <Title text='Flexbox' />
      <FlexForm onValueChange={handleFormChange} values={formValues} />
      <FlexPanel formValues={formValues} />
    </div>
  )
}

export default Flexbox
