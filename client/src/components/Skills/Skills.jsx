import React from 'react'
import { useInView } from 'react-intersection-observer';


function Skills() {

  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  
  return (
    <div>
      <div className={inView ? "name animate" : "hidden"} ref={ ref }>
        Skills
      </div>
      <div className='skills'>
        
      </div>
    </div>
  )
}

export default Skills
