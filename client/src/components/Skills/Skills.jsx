import React from 'react'
import './Skills.css'
import FrontEnd from '../FrontEnd/FrontEnd'
import BackEnd from '../BackEnd/Backend'
import Libraries from '../Libraries/Libraries'

function Skills() {  
  return (
    <div className='skills-div'>
      <div className='skill-name'>
        Skills
      </div>
    <div className='skills'>
      <FrontEnd />
      <BackEnd />
      <Libraries />
    </div>
    </div>
  )
}

export default Skills
