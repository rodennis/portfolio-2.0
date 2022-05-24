import React from "react";
import "./Projects.css";
import { useInView } from "react-intersection-observer";
import pain from "../Photos/pain.png";
import hcfreviews from "../Photos/hcf-reviews.png";
import kanban from "../Photos/kanban.png";
import "animate.css";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.01,
  });

  return (
    <div className="project-div">
      <div className="name-div">
        <div className="name">Projects</div>
      </div>
      <div className="projects">
        <div
          className={inView ? "project-inview zoom" : "project-inview"}
          ref={ref}
        >
          <img className="project1" src={pain} alt="project" />
          <div className="tech-stack-div">
            <p className="project-info">
              PAIN is an effective, to the point workout app. In the age of
              millions of apps on the web, ranging from overcomplicated, to not
              useful at all. PAIN is a straight to the point kind of app. You
              are given the choice to start a session, you will then provide
              what workouts you did that session. You will include, but not
              limited to, the exercise name, the weight, the amount of reps,
              sets and, the RPE. Created with React for the front-end, and
              Nodejs for the backend along with Express, Mongoose, and MongoDB
              for the database.
            </p>
            <a
              href="https://pain-workout.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="live-site">Live Site</button>
            </a>
            <a
              href="https://github.com/rodennis/pain"
              target="_blank"
              rel="noreferrer"
            >
              <button className='github-repository'>Github Repository</button>
            </a>
          </div>
        </div>
        <div
          className={inView ? "project-inview zoom" : "project-inview"}
          ref={ref}
        >
          <img className="project1" src={hcfreviews} alt="project" />
          <div className="tech-stack-div">
            <p className="project-info">
              HCF-Review is a website for healthcare professionals to go and
              write truthful reviews about a healthcare facility they have
              worked at. A user will be able to search for a healthcare
              facility. Where they can rate the hospital, Share salary
              information, or answer other reviewer questions. They can be
              anonymouse or add their personal information if they would like.
              Created with React for the front-end, and Nodejs for the backend
              along with Express, Mongoose, and MongoDB for the database.
            </p>
            <a
              href="https://hcf-reviews.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button  className="live-site">Live Site</button>
            </a>
            <a
              href="https://github.com/rodennis/HCF-review"
              target="_blank"
              rel="noreferrer"
            >
              <button className='github-repository'>Github Repository</button>
            </a>
          </div>
        </div>
        <div
          className={inView ? "project-inview zoom" : "project-inview"}
          ref={ref}
        >
          <img className="project1" src={kanban} alt="project" />
          <div className="tech-stack-div">
            <p className="project-info">
              Bankan is a desktop only kanban board created with typescript and sass. 
              A user is able to create a board for different projects. Inside 
              each board a user is able to create lists, which allow you to add tasks, 
              and move them between lists depending on the status of the task. A user 
              is also able to delete boards and lists. It leverages the React-beautiful-DND 
              to allow users to drag and drop tasks between boards. <br /><br /><br />
            </p>
            <a
              href="bankan-board.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="live-site">Live Site</button>
            </a>
            <a
              href="https://github.com/rodennis/Kanban-board"
              target="_blank"
              rel="noreferrer"
            >
              <button className='github-repository'>Github Repository</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
