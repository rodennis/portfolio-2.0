import React from 'react'
import './ConfMessage.css'


function ConfMessage(props) {
  return (
    <div className={ props.toggle === true ? 'confMessage' : 'hide'}>
      <h2 className='message'>Thanks I'll get back with you ASAP!</h2>
    </div>
  )
}

export default ConfMessage
