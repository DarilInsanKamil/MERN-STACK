import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BackgroundImage } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'

export const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/')
  }
  return (
    <div className='main-page'>
      <div className='left'>
        <div>
          <h3>Sign In to</h3>
          <p>write and interact with each other</p>
        </div>
          <img src={BackgroundImage} alt="welcomeimg" draggable="false" className='bgImg' />
      </div>
      <div className='right'>
        <p className='title'>Login</p>
        <Input label="Email" type="email" placeholder="Masukan Email" required/>
        <Gap height={10} />
        <Input label="Password" type="password" placeholder="Masukan Password" />
        <Gap height={20} />
        <Button title="Sign In" onClick={handleSubmit}/>
        <Gap height={100} />
        <Link title="Belum punya akun? Register" onClick={() => navigate('/register')} />
      </div>
    </div>
  )
}
