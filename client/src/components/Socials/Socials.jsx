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
      <a target='_blank' rel="noreferrer" href="https://www.overleaf.com/read/xvhmqcpvqxnc"><img className='socials' src={ resume } alt="resume"/></a>
    </div>
  )
}

export default Socials
