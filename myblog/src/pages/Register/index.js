import React from 'react';
import { BackgroundImage } from '../../assets';
import './register.scss';
import { Button, Gap, Input, Link } from '../../components';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate()
  return (
    <div className='main-page'>
      <div className='left'>
        <div>
          <h3>Sign Up to</h3>
          <p>write and interact with each other</p>
        </div>
          <img src={BackgroundImage} alt="welcomeimg" draggable="false" className='bgImg' />
      </div>
      <div className='right'>
        <p className='title'>Register</p>
        <Input label="Full Name" type="name" placeholder="Masukan Nama" />
        <Gap height={10} />
        <Input label="Email" type="email" placeholder="Masukan Email" />
        <Gap height={10} />
        <Input label="Password" type="password" placeholder="Masukan Password" />
        <Gap height={20} />
        <Button title="Sign Up" />
        <Gap height={100} />
        <Link title="Sudah punya akun? Login" onClick={() => navigate('/login')}/>
      </div>
    </div>
  )
}
