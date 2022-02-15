import React from 'react'
import './Projects.css'
import { useInView } from 'react-intersection-observer';
import react from '../Photos/react.png'
import css from '../Photos/css.png'
import pain from '../Photos/pain.png'
import hcfreviews from '../Photos/hcf-reviews.png'
import node from '../Photos/nodejs.png'
import RNLH from '../Photos/RNLH.png'
import mongoose from '../Photos/mongoose.png'
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
        <a href="https://pain-workout.netlify.app/" target="_blank" rel="noreferrer">
          <img className='project1' src={ pain } alt="project" />
        </a>
          <div className='tech-stack-div'>
            <p className='project-info project-info-mobile'>PAIN is an effective, to the point workout app. In the age of millions of apps on the web, ranging from overcomplicated, to not useful at all. PAIN is a straight to the point kind of app. You are given the choice to start a session, you will then provide what workouts you did that session. You will include, but not limited to, the exercise name, the weight, the amount of reps, sets and, the RPE. Using Nodejs for the backend along with Express, Mongoose, and MongoDB for the database.</p>
                <img src={react} alt="react" />
                <img src={ css } alt="css" />
                <img src={node} alt="node" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDB" />
          </div>
        </div>
        <div className={inView ? "project-inview zoom" : "project-inview"} ref={ref}>
        <a href="https://hcf-reviews.netlify.app/" target="_blank" rel="noreferrer">
          <img className='project1' src={ hcfreviews } alt="project" />
        </a>
          <div className='tech-stack-div'>
            <p className='project-info'>HCF-Review is a website for healthcare professionals to go and write truthful reviews about a healthcare facility they have worked at. A user will be able to search for a healthcare facility. Where they can rate the hospital, Share salary information, or answer other reviewer questions. They can be anonymouse or add their personal information if they would like. If a healthcare facility is not present on the website, the user will be able to add it and then write a review.</p>
            <img src={ react } alt="html" />
            <img src={ css } alt="css" />
            <img src={ node } alt="node" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="mongoDB" />
          </div>
        </div>
        <div className={inView ? "project-inview zoom" : "project-inview"} ref={ref}>
          <a href="https://rnlh.netlify.app/" target="_blank" rel="noreferrer">
          <img className='project1' src={ RNLH } alt="project" />
        </a>
            <div className='tech-stack-div'>
              <p className='project-info'>
                RNLH is a luxurious second hand Web store. A user when first landing on the page has a chance to view products in the store, or create an account. If a user creates an account, they are then opened to features such as creating a post to sell an item, editing their item, and deleting their item. A user is able to set a location, condition, name, price, description, and a picture of the image.
            </p>
            <br/>
            <br/>
            <img src={ react } alt="react" />
            <img src={ css } alt="css" />
            <img src={ node } alt="node" />
            <img src={ mongoose } alt="mongoose" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
