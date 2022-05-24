import React from 'react'
import Ferhat from '../../assets/Ferhat.pdf'

const Ct = () => {
  return (
    <div className='ct'>
        <a href={Ferhat} download className='btn'> Download CV</a>
        <a href='#contact' className='btn btn-primary'>Contact me</a>
    </div>
  )
}

export default Ct