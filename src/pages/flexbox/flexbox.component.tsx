import FlexForm from '@flexbox/flex-form/flex-form.component'
import FlexPanel from '@flexbox/flex-panel/flex-panel.component'
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
    items: 3,
  }

  const [formValues, setFormValues] = useState<FlexFormValues>(initialValues)

  const handleFormChange = (event: CustomEvent) => {
    setFormValues(prevValue => ({ ...prevValue, [event.name]: event.value }))
  }

  return (
    <div className={classes.main}>
      <h1>FlexBox</h1>
      <FlexForm onValueChange={handleFormChange} values={formValues} />
      <FlexPanel formValues={formValues} />
    </div>
  )
}

export default Flexbox
