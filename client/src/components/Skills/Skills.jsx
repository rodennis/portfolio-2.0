import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'animate.css'
import './Skills.css'


function Skills() {

  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  
  return (
    <div className='skills-div'>
      <div className='skill-name'>
        Skills
      </div>
    <div className='skills'>
      <div className='skills'>
        <div className='front-end'>
          {/* <img src={} alt="" />
          <img src={} alt="" />
          <img src={} alt="" />
          <img src={} alt="" /> */}
        </div>
        <div className='back-end'>

        </div>
        <div className='libraries'>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Skills
