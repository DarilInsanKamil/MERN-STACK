import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, BoxItems, Gap } from '../../components'
import './home.scss';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title="Create Article" onClick={() => navigate('/create-blog')}/>
      </div>
      <Gap height={40}/>
      <div className='blog-content-wrapper'>
        <BoxItems />
        <BoxItems />
        <BoxItems />
        <BoxItems />
      </div>
      <div className='pagination-wrapper'>
        <Button title="Previous"/>
        <Gap width={20}/>
        <Button title="Next"/>
      </div>
        <Gap height={20}/>
    </div>
  )
}
