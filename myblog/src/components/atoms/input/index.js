import React from 'react';
import './input.scss';

export const Input = ({label, ...rest}) => {
  return (
    <div className='input-wrapper'>
        <label className='label-input'>
            {label}
        </label>
        <input className='input' {...rest}/>
    </div>
  )
}
