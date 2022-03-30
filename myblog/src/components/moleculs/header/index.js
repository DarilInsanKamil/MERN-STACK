import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Logo } from '../../../assets';
import './header.scss';


const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header-wrapper'>
        <img className='logo-app' draggable="false" alt="logo" src={Logo}/>
        <nav className='nav-wrapper'>
           <p onClick={() => navigate('/login')}>Logout</p>
        </nav>
    </div>
  )
}

export default Header