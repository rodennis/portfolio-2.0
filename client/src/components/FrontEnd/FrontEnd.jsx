import React from '../Photos/react.png'
import Typescript from '../Photos/typescript.png'
import Javascript from '../Photos/js-file.png'
import Sass from '../Photos/sass.png'

function FrontEnd() {
  return (
    <div className='tech-stack-divs'>
    <div className='tech-stack-name'>
      Front End
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Typescript} alt="" />
      </div>
        <p className='single-skill-name'>Typescript</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Javascript} alt="" />
      </div>
        <p className='single-skill-name'>Javascript</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={React} alt="" />
      </div>
        <p className='single-skill-name'>React</p>
    </div>
    <div className='skill-div'>
      <div className='skill-image-div'>
        <img className='skill-image' src={Sass} alt="" />
      </div>
        <p className='single-skill-name'>Sass</p>
    </div>
  </div>
  )
}

export default FrontEnd
