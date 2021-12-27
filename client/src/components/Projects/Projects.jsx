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
import eventHandler from '../Photos/eventHandler.png'
import node from '../Photos/nodejs.png'
import 'animate.css' 

function Projects() {

  const { ref, inView } = useInView({
    threshold: 0.01,
  });

  return (
    <div className='project-div'>
      <div className='name-div'>
      <div className='name'>
        Projects
      </div>
      </div>
      <div className="projects">
        <div className={inView ? "project-inview zoom" : "project-inview"} ref={ref}>
        <a href="https://pain-workout.netlify.app/">
          <img className='project1' src={ pain } alt="project" />
        </a>
          <div className='tech-stack-div'>
            <p className='project-info project-info-mobile'>PAIN is an effective, to the point workout app. In the age of millions of apps on the web, ranging from overcomplicated, to not useful at all. PAIN is a straight to the point kind of app. You are given the choice to start a session, you will then provide what workouts you did that session. You will include, but not limited to, the exercise name, the weight, the amount of reps, sets and, the RPE. Using Nodejs for the backend along with Express, Mongoose, and MongoDB for the database.</p>
                <img src={react} alt="react" />
                <img src={ css } alt="css" />
                <img src={mui} alt="mui" />
                <img src={node} alt="node" />
          </div>
        </div>
        <div className={inView ? "project-inview zoom" : "project-inview"} ref={ref}>
        <a href="https://rodennis.github.io/etch-a-sketch-1/">
          <img className='project1' src={ etchASketch } alt="project" />
        </a>
          <div className='tech-stack-div'>
            <p className='project-info'>This is a vanilla javascript, html, css project, where i was able to leverage javascript to create a dynamic game of etch-a-sketch. The player is able to choose from a black or random color, choose the size of the board to draw on, and draw whatever their imagination comes up with!</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <img src={ html } alt="html" />
            <img src={ css } alt="css" />
            <img src={ javascript } alt="javascript" />
          </div>
        </div>
        <div className={inView ? "project-inview zoom" : "project-inview"} ref={ref}>
          <a href="https://rodennis.github.io/event-handler/">
          <img className='project1' src={ eventHandler } alt="project" />
        </a>
            <div className='tech-stack-div'>
              <p className='project-info'>
                Event Handler is an event handling website, that leverages the Ticket Master API. A user is able to search for an event, see the name, minimum and maximum prices, date, and able to navigate to the Ticket Master website to purchase tickets to attend the event.
            </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <img src={ html } alt="html" />
            <img src={ css } alt="css" />
            <img src={ javascript } alt="javascript" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
