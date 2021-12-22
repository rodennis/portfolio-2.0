import React from 'react'
import { useInView } from 'react-intersection-observer';
import 'animate.css'
import './Skills.css'


function Skills() {

  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  
  return (
    <div className='skills'>
      <div className={inView ? 'skill-name' : 'hidden'} ref={ ref }>
        Skills
      </div>
      <div className='skills'>
        
      </div>
    </div>
  )
}

export default Skills
