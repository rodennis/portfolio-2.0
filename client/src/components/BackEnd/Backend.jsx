/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Node from '../Photos/nodejs.png'
import SQL from '../Photos/sql-server.png'
import Lambda from '../Photos/lambda.svg'
import Dynamo from '../Photos/dynamo.svg'


function BackEnd() {
  return (
    <div className='tech-stack-divs'>
    <div className='tech-stack-name'>
      Back End
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Node} alt="" />
      </div>
        <p className='single-skill-name'>NodeJs</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Lambda} alt="" />
      </div>
        <p className='single-skill-name'>Lambda</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Dynamo} alt="" />
      </div>
        <p className='single-skill-name'>DynamoDB</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={SQL} alt="" />
      </div>
        <p className='single-skill-name'>SQL</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
      <img className='skill-image' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      </div>
        <p className='single-skill-name'>MongoDB</p>
    </div>
  </div>
  )
}

export default BackEnd