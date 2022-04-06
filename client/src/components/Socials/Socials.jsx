import React from 'react'
import './Socials.css'
import linked from '../Photos/linkedin.svg'
import github from '../Photos/github.svg'
import resume from '../Photos/resume.svg'

function Socials() {
  return (
    <div>
      <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/rodney-todd-a676b4128/" ><img className='socials' src={linked} alt="linkedin"/></a>
      <a target='_blank' rel="noreferrer" href="https://github.com/rodennis?tab=repositories"><img className='socials' src={ github } alt="github" /></a>
      <a target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1M2RmbdAH8xpC1iuMPJd4tvPr-PQp0HfP/view?usp=sharing"><img className='socials' src={ resume } alt="resume"/></a>
    </div>
  )
}

export default Socials
