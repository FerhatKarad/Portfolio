import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='footer__socials'>
         <a href='https://www.facebook.com/fero.ferhat.1/'> <FaFacebookF/></a>
         <a href='https://www.instagram.com/fero.ferhat21/'> <FiInstagram/></a>
      </div>
      <div className='footer__copyright'>
       <small> © Ferhat Karadag  || </small>
       <a href='https://github.com/FerhatKarad/Portfolio'><small>Source of Code <FaGithub/></small></a>
      </div>
    </footer>
  )
}

export default Footer