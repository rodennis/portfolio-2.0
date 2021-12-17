import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
      <div id="contact-me">
        <div className='contact-form'>
          <form onSubmit={ (e) => e.preventDefault()}method='POST' className='contactForm'>
            <h2>Let's Talk</h2>
            <input type="text" placeholder='First Name' id='firstName' name='firstName' required/>
            <input id="lastName" type="text" name="lastName" placeholder="Last Name" required/>
            <input id="email" type="text" name="email" placeholder="example@email.com" required />
            <input id="phone" type="text" name="phoneNumber" placeholder="(000)000-0000" />
            <textarea id="message" name="message" placeholder="Message..." id="message" cols="30" rows="10"></textarea>
            <input type="submit" id="submit" class="submit" value="Send Message"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact