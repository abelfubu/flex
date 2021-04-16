import React, { useMemo } from 'react'

import { FlexFormValues } from '../../../models'
import classes from './flex-panel.module.scss'

interface FlexPanelProps {
  formValues: FlexFormValues
}

const FlexPanel = ({ formValues }: FlexPanelProps) => {
  const colors = useMemo(
    () => [
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
    ],
    [],
  )

  const minHeight = useMemo(
    () => ({
      maxHeight: '800px',
      minHeight:
        formValues['flexDirection'] === 'column'
          ? (formValues.items as number) * 175 + 'px'
          : '200px',
    }),
    [formValues],
  )

  return (
    <div className={classes.main} style={{ ...formValues, ...minHeight }}>
      {colors.map(
        (item, i) =>
          i < formValues.items! && (
            <div
              key={i}
              className={classes['flex-item']}
              style={{ backgroundColor: item, color: i < 4 ? '#232323' : '#ffffffaa' }}>
              Child {i + 1}
            </div>
          ),
      )}
    </div>
  )
}

export default FlexPanel
