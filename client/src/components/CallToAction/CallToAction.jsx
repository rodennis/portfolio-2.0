import React from 'react'
import './CallToAction.css'
import { Link } from 'react-router-dom' 
import Selfie from '../Photos/Selfie.jpeg'
import Socials from '../Socials/Socials'
  
function CallToAction() {
  return (
    <div>
        <p className='top-intro'>RODNEY.T FULL STACK</p>
        <p className='bottom-intro'>WEB DEVELOPER</p> 
      <div className='about'>
        <div className='photo'>
          <img className='selfie' src={ Selfie } alt="" />
        </div>
        <div className='about-me'>
          <h1 className='about-title'>About</h1>
        <p>
          Hey there, welcome to my Portfolio, my name is Rodney Todd. I am a full stack web developer, who enjoys every aspect of coding! One day I was sitting on my couch browsing the app store, and thought "hmm it would be interesting to build my own app". Ever since that day I have pursued web development.  
        </p>
        <p>
          I love the easy times of coding, but I also love the times when you're so frustrated with some code that you could throw your computer. There is just something about it, when you finally find a solution to your problem, and can sit back and look at the finished work!
        </p>
        <p>
          Hit that Button and let's talk!
        </p>
          <button className='contact-link'> <Link className='Link' to='/contact'>Let's Talk</Link></button>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
