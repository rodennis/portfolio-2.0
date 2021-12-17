import React from 'react'
import './Projects.css'
import { useInView } from 'react-intersection-observer';
import react from '../Photos/react.png'
import css from '../Photos/css.png'
import pain from '../Photos/pain.png'
import mui from '../Photos/mui.png'
import html from '../Photos/html-5.png'
import javascript from '../Photos/js-file.png'
import etchASketch from '../Photos/etch-a-sketch.png'
import 'animate.css/animate.css'


function Projects() {

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <div>
      <div className="name project-name">
        Projects
      </div>
      <div className="projects">

        <div className={inView ? "project-inview project-zoom" : "project-inview"} ref={ref}>
          <img className='project1' src={ pain } alt="project" />
          <div className='tech-stack'>
            <p className='project-info'>PAIN is an effective, to the point workout app. In the age of millions of apps on the web, ranging from overcomplicated, to not useful at all. PAIN is a straight to the point kind of app. You are given the choice to start a session, you will then provide what workouts you did that session. You will include, but not limited to, the exercise name, the weight, the amount of reps, sets and, the RPE. Leveraging the airtable api, so that you are able to edit, delete, or reflect on later the workouts you have completed.</p>
            <img src={ react } alt="react" />
            <img src={ css } alt="css" />
            <img src={ mui } alt="mui" />
          </div>
        </div>
        <div className={inView ? "project-inview project-zoom" : "project-inview"} ref={ref}>
          <img className='project1' src={ etchASketch } alt="project" />
          <div className='tech-stack'>
            <p className='project-info'>This is a vanilla javascript, html, css project, where i was able to leverage javascript to create a dynamic game of etch-a-sketch. The player is able to choose from a black or random color, choose the size of the board to draw on, and draw whatever their imagination comes up with!</p>
            <br/>
            <br/>
            <br/>
            <img src={ html } alt="" />
            <img src={ css } alt="" />
            <img src={ javascript } alt="" />
          </div>
        </div>
        <div className={inView ? "project-inview project-zoom" : "project-inview"} ref={ref}>
          <div className='tech-stack'>
            <img src={ react } alt="" />
            <img src={ css } alt="" />
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Projects
