import React, { useEffect, useRef, useState } from 'react'

import classes from './select.module.scss'

interface SelectProps {
  options: string[] | number[]
  name: string
  value: string | number
  onChange: (event: any) => any
}

const Select = ({ options, value, name, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  const dropdownRef = useRef<HTMLDivElement>(null)

  const onOptionClick = (event: React.MouseEvent, value: number | string) => {
    event.stopPropagation()
    setIsOpen(false)
    onChange({ name, value })
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (!dropdownRef.current?.contains(event.target as HTMLDivElement)) {
      setIsOpen(false)
    }
  }

  return (
    <div className={classes.select} onClick={() => setIsOpen(true)} ref={dropdownRef}>
      <span>{value}</span>
      <svg
        id='i-chevron-bottom'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'
        width='32'
        height='32'
        fill='none'
        stroke='currentcolor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'>
        <path d='M30 12 L16 24 2 12' />
      </svg>
      {isOpen && (
        <div className={classes.dropdown}>
          {options.map((option: number | string, i: number) => (
            <p
              key={i}
              onClick={event => onOptionClick(event, option)}
              className={option.toString() === value ? classes.selected : ''}>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
