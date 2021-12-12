import React from 'react'
import './Socials.css'
import linked from '../Photos/linkedin.png'
import github from '../Photos/github.png'

function Socials() {
  return (
    <div>
      <a href="https://www.linkedin.com/in/rodney-todd-a676b4128/"><img src={linked} alt="linkedin" target='_blank'/></a>
      <a href="https://github.com/rodennis?tab=repositories"><img src={ github } alt="github" target='_blank'/></a>
    </div>
  )
}

export default Socials
