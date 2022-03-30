import React from 'react'
import './button.scss'
export const Button = ({title, ...rest}) => {
  return <button {...rest} className="button">{title}</button>
}
