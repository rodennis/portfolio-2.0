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
      <a target='_blank' rel="noreferrer" href="https://docs.google.com/document/d/1b4Jj8uvE5TlvR6NLgrkrlFxvROhyr8YC/edit?usp=sharing&ouid=113518055476624147368&rtpof=true&sd=true"><img className='socials' src={ resume } alt="resume"/></a>
    </div>
  )
}

export default Socials
