import React from 'react'
import frontEnd from '../FrontEnd/FrontEnd'
import react from '../Photos/react.png'
import css from '../Photos/css.png'
import pain from '../Photos/pain.png'
import mui from '../Photos/mui.png'
import html from '../Photos/html-5.png'
import javascript from '../Photos/js-file.png'

function FrontEnd() {
  return (
    <div className='tech-stack-divs'>
    <div className='tech-stack-name'>
      Front End
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={react} alt="" />
      </div>
        <p className='single-skill-name'>React</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={javascript} alt="" />
      </div>
        <p className='single-skill-name'>Javascript</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={html} alt="" />
      </div>
        <p className='single-skill-name'>HTML</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={css} alt="" />
      </div>
        <p className='single-skill-name'>CSS</p>
    </div>
  </div>
  )
}

export default FrontEnd
