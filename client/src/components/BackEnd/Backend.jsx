/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Node from '../Photos/nodejs.png'
import Postgre from '../Photos/postgre.png'


function BackEnd() {
  return (
    <div className='tech-stack-divs'>
    <div className='tech-stack-name'>
      Back End
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Node} alt="" />
      </div>
        <p className='single-skill-name'>Node</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
      <img className='skill-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      </div>
        <p className='single-skill-name'>MongoDB</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Postgre} alt="" />
      </div>
        <p className='single-skill-name'>PostgreSQL</p>
    </div>
  </div>
  )
}

export default BackEnd