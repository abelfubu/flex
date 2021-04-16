import React, { ChangeEvent, useState } from 'react'

import FlexForm from '../../components/flexbox/flex-form/FlexForm'
import FlexPanel from '../../components/flexbox/flex-panel/FlexPanel'
import { FlexFormValues } from '../../models'
import classes from './flexbox.module.scss'

const Flexbox = () => {
  const initialValues: FlexFormValues = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    items: 3,
  }

  const [formValues, setFormValues] = useState<FlexFormValues>(initialValues)

  const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormValues(prevValue => ({ ...prevValue, [event.target.name]: event.target.value }))
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
