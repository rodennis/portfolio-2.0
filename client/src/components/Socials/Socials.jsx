import React from 'react'
import './Socials.css'
import linked from '../Photos/linkedin.png'
import github from '../Photos/github.png'
import resume from '../Photos/curriculum.png'

function Socials() {
  return (
    <div>
      <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/rodney-todd-a676b4128/" ><img className='socials' src={linked} alt="linkedin"/></a>
      <a target='_blank' rel="noreferrer" href="https://github.com/rodennis?tab=repositories"><img className='socials' src={ github } alt="github" /></a>
      <a target='_blank' rel="noreferrer" href="https://www.canva.com/design/DAE1uVivQGQ/i0wd2_FIe1tD5_ToCuaqFA/view?utm_content=DAE1uVivQGQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><img className='socials' src={ resume } alt="resume"/></a>
    </div>
  )
}

export default Socials
