import React, { useState } from 'react'
import './Navbar.css'
import { FaSpaceShuttle } from 'react-icons/fa'
import { GiSpaceSuit } from 'react-icons/gi'
import { MdWorkspacesFilled } from 'react-icons/md'
import { GiSpaceship } from 'react-icons/gi'
import { AiOutlineMessage } from 'react-icons/ai'


const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaSpaceShuttle /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GiSpaceSuit /></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><GiSpaceship /></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdWorkspacesFilled /></a>
      <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :''}><AiOutlineMessage /></a>

    </nav>
  )
}

export default Navbar