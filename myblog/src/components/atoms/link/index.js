import React from 'react';
import './link.scss';

export const Link = ({title, onClick}) => {
  return (
    <p onClick={onClick} className='titleback'>{title}</p>
  )
}
