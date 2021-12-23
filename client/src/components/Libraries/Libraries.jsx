/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import MUI from '../Photos/mui.png'
import Mongoose from '../Photos/mongoose.png'
import Bootstrap from '../Photos/bootstrap.png'



function Libraries() {
  return (
    <div className='tech-stack-divs'>
    <div className='tech-stack-name'>
      Libraries
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
      <img className='skill-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
      </div>
        <p className='single-skill-name'>Express</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
      <img className='skill-image' src={Mongoose} />

      </div>
        <p className='single-skill-name'>Mongoose</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Bootstrap} alt="" />
      </div>
        <p className='single-skill-name'>Bootstrap</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={MUI} alt="" />
      </div>
        <p className='single-skill-name'>MaterialUI</p>
    </div>
  </div>
  )
}

export default Libraries