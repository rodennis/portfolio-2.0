import React from 'react'
import './Contact.css'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react'
import emailjs from 'emailjs-com'
import ConfMessage from '../ConfMessage/ConfMessage';

function Contact() {
  
  const userID = process.env.REACT_APP_USER_ID
  const [toggle, setToggle] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tw56ycr', 'template_gw90kol', e.target, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
    setToggle(prevToggle => !prevToggle)
  }

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <div>
      <div className={inView ? "contact-name" : "hidden"} ref={ref}>
        Let's Talk
      </div>
      <form onSubmit={ sendEmail } className={inView ? "contactForm zoom" : "contactForm"} ref={ref}>
            <h2>Let's Talk</h2>
            <input id="firstName" type="text" placeholder="First Name" name='firstName' required/>
            <input id="lastName" type="text" placeholder="Last Name" name='lastName' required/>
            <input id="email" type="text" placeholder="example@email.com" name='email' required />
            <input id="phone" type="text" placeholder="(000)000-0000" name='phone' />
            <textarea id="message" placeholder="Message..." cols="30" rows="10" name='message'></textarea>
            <input type="submit" id="submit" />
      </form>
      <ConfMessage toggle={ toggle }/>
    </div>
  )
}

export default Contact