import React from 'react'
import './About.css'
import { FaAward } from 'react-icons/fa'
import { IoIosSchool } from 'react-icons/io'
import { AiFillYoutube } from 'react-icons/ai'
import { DiReact } from 'react-icons/di'
import { AiFillGithub } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineFacebook } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2>
      <div className='container about__container'>
      <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Udemy</h5>
              <small> 01/2021 - 06/2021</small>
              <small> Fullstack Web/Dev</small>
            </article>
            <article className='about__card'>
              <IoIosSchool className='about__icon' />
              <h5>Ironhack</h5>
              <small> 08/2021 - 12/2021</small>
              <small> Fullstack Web/Dev</small>
            </article>
            <article className='about__card'>
              <AiFillYoutube className='about__icon' />
              <DiReact className='about__icon' />
              <AiFillGithub className='about__icon' />
              <FiInstagram className='about__icon' />
              <AiOutlineFacebook className='about__icon' />
              <h5>keep Going!</h5>
              <small> my path === Master of React.js</small>
            </article>
          </div>
          <div>
            <p>
              Hello everyone! At the Start of the Year 2021 I started my journey as a Developer.
              Since the beginning I´am pretty much hooked. After hard times and many mistakes I didn´t stopped,
              I stayed focused and right now I´m proud of myself.
              After the Ironhack Bootcamp which was the best decision in my life, my-self created path goes on!
              My love is <span className='about__span'>React.js</span> I´am very exited what comes next!
            </p>
          </div>
        </div>
        <div className='about__skills'>
        <h4>Technical Skills</h4>
          <div className='about__skills-list'>
            <ul className='about__span'>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDb</li>
              <li>Axios</li>
            </ul>
            <ul className='about__span'>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Design</li>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
            </div>
          </div>
      </div>
      
    </section>
  )
}

export default About