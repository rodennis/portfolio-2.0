import React from 'react'
import './Projects.css'
import video from '../Photos/Untitled.mov'

function Projects() {
  return (
    <div className='projects'>
      <div className="project-one">
        <video class='project-one-video' autoPlay loop muted>
          <source src={video} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="project-two">

      </div>
      <div className="project-three">

      </div>
      <div className="project-four">

      </div>
    </div>
  )
}

export default Projects
