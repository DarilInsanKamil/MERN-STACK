import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BackgroundImage } from '../../assets'
import { Gap } from '../../components';
import './detail.scss';

export const DetailBlog = () => {
  const navigate = useNavigate()
  return (
    <div className='detail-blog-wrapper'>
      <Gap height={30}/>
      <figure className='img-detail-thumb'>
        <img src={BackgroundImage} alt="thumb" />
      </figure>
      <div>
        <p className='title-detail'>Loremm</p>
        <p className='author-date-detail'>Author - date</p>
      </div>
      <Gap height={20}/>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <Gap height={30}/>
      <p className='back-detail' onClick={() => navigate('/')}>Kembali ke Home</p>
      <Gap height={30}/>
    </div>
  )
}
