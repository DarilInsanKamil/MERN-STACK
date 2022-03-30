import React from 'react'
import { ICdiscord, ICfacebook, ICgithub, ICinstagram, IClinkedin } from '../../../assets'
import './footer.scss';
const Icon = ({ img, alt, ...rest }) => {
  return (
    <a {...rest}>
      <img src={img} alt={alt} className="icon-medsos" draggable="false" />
    </a>
  )
}


const Footer = () => {
  return (
    <div >
      <div className='footer'>
        <div className='comp-profile'>
          <p className='name-comp'>Made with ❤️ Daril</p>
        </div>
        <div>
          <div className='icon-wrapper'>
            <Icon href="#" img={ICdiscord} alt="discord" />
            <Icon href="https://www.facebook.com/profile.php?id=100011138040962" img={ICfacebook} alt="faceICfacebook" />
            <Icon href="https://github.com/DarilInsanKamil" img={ICgithub} alt="gitICgithub" />
            <Icon href="https://www.linkedin.com/in/daril-insan-kamil-90827320b/" img={IClinkedin} alt="linIClinkedin" />
            <Icon href="https://www.instagram.com/darilkamil/" img={ICinstagram} alt="linICinstagram" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer