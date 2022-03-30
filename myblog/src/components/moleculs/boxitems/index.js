import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Gap } from '../..'
import { BackgroundImage } from '../../../assets'
import './boxitems.scss'
const BoxItems = ({...rest}) => {
    const navigate = useNavigate()
    return (
        <div className='box-item-wrapper' {...rest}>
            <div className='image-thumb'>
                <img src={BackgroundImage} draggable="false" alt="thumb" />
            </div>
            <div>
                <p className='title-box-wrapper'>Lorem</p>
                <p className='auth-date-wrapper'>Author - date</p>
            </div>
            <div className='desc-box-wrapper'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <Gap height={10}/>
            <Button title="View Detail" onClick={() => navigate('/detail-blog')}/>
        </div>
    )
}

export default BoxItems