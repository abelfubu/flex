import { FlexFormValues } from 'models'
import React, { useCallback } from 'react'

import { colors } from './colors'
import classes from './flex-panel.module.scss'

interface FlexPanelProps {
  formValues: FlexFormValues
}

const FlexPanel = ({ formValues: { flexBasis, ...values } }: FlexPanelProps) => (
  <div className={classes.main} style={values}>
    {colors.map(
      (bgColor, i) =>
        i < values.items! && (
          <div
            key={i}
            className={classes['flex-item']}
            style={{
              backgroundColor: bgColor,
              color: i < 4 ? '#232323' : '#ffffffaa',
              flexBasis: `${flexBasis}%`,
            }}>
            <span>{i + 1}</span>
            <p>Flex Basis {`${flexBasis}%`}</p>
          </div>
        ),
    )}
  </div>
)

export default FlexPanel
