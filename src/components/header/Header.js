import React from 'react'
import './Header.css'
import Ct from './Ct';
import Me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
import {AiOutlineArrowDown} from 'react-icons/ai'
import {VscRocket} from 'react-icons/vsc'

const style = {
  transform:  'rotate(-90deg)'
 }
 

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h1> <VscRocket/> Ferhat Karadag <VscRocket style={style}/></h1>
        <h4 className='text-light'>Junior Fullstack Developer</h4>
        <Ct />
        <HeaderSocials />
        <div className='me'>
          <img src={Me} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'><AiOutlineArrowDown/></a>
      </div>
    </header>
  )
}

export default Header;