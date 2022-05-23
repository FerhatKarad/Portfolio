import React from 'react'
import './Projects.css'
import {BsGithub} from 'react-icons/bs'
import {FiMonitor} from 'react-icons/fi'
import DBZ from '../../assets/dragonball.png'
import BLOG from '../../assets/blogify.png'
import POKE from '../../assets/pokebuy.png'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const data = [
  {
    img: DBZ,
    name: 'Dragon Ball ',
    review: 'based on pure JavaScript, used p5 Dom Manipulation',
    url: 'https://ferhatkarad.github.io/DragonBallZ/',
    codeUrl: 'https://github.com/FerhatKarad/DragonBallZ',
  },
  {
    img: BLOG,
    name: 'Blogify',
    review: 'Blogify is built with Javascript, Node.js, Express, MongoDB & Handlebars',
    url: 'https://bllogify.herokuapp.com/',
    codeUrl: 'https://github.com/alekvelichkovikj/Blogify',
  },
  {
    img: POKE,
    name: 'Pokebuy',
    review: 'Pokebuy is built with Node.js, Express, MongoDB & React',
    url: 'https://pokebuy.herokuapp.com/',
    codeUrl: 'https://github.com/FerhatKarad/Pokebuy',
  }
]

const Projects = () => {
  return (
    <section id='projects'>
      <h2>Few of my Projects</h2>
      <Swiper className='container projects__container'
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}>
        {data.map(({ name, img, review, url, codeUrl }, index) => {
          return (
            <SwiperSlide key={index} className='project'>
              <h5 className='project__name'>{name}</h5>
              <img src={img} className='project__img' alt='dbz' />
              <small className='project__review'>{review}</small>
              <br />
              <a href={url} className='btn '><FiMonitor /> View Project</a>
              <br />
              <a href={codeUrl} className='btn'><BsGithub/> View Source of Code</a>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Projects