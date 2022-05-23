import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className='footer__socials'>
         <a href='https://facebook.com'> <FaFacebookF/></a>
         <a href='https://instagram.com'> <FiInstagram/></a>
      </div>
      <div className='footer__copyright'>
       <small> © Ferhat Karadag  || </small>
       <a href=''><small>Source of Code <FaGithub/></small></a>
      </div>
    </footer>
  )
}

export default Footer