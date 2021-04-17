import { FlexFormValues } from 'models'
import React, { useCallback } from 'react'

import { colors } from './colors'
import classes from './flex-panel.module.scss'

interface FlexPanelProps {
  formValues: FlexFormValues
}

const FlexPanel = ({ formValues }: FlexPanelProps) => {
  return (
    <div className={classes.main} style={formValues}>
      {colors.map(
        (bgColor, i) =>
          i < formValues.items! && (
            <div
              key={i}
              className={classes['flex-item']}
              style={{ backgroundColor: bgColor, color: i < 4 ? '#232323' : '#ffffffaa' }}>
              Child {i + 1}
            </div>
          ),
      )}
    </div>
  )
}

export default FlexPanel
