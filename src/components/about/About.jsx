import React from 'react'
import './about.css'
import ME from '../../assets/alan6.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />

          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Still Learning</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Building Up</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ so far</small>
            </article>
          </div> 

          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Rerum illum quaerat nulla nam architecto totam minima atque. 
          Debitis a magnam vel repellendus. 
          Quos magni ex consectetur officiis temporibus itaque dicta?  
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a> 
        </div>  
      </div>
    </section>
  )
}

export default About