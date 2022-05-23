import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What i Can Add to your Team</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Team Player</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Teamwork</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Communication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Time Management </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> Analytical Skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Thinking critically </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Completing tasks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Attaining Goals</p>
            </li>

          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon' />
              <p> React.js Junior</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Visual Thinking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Organization Skills</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Work Ethic</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> Enthusiasm</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Self-Awareness</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Project-Management</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services