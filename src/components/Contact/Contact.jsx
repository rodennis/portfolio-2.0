import React from 'react'
import './Contact.css'
import { useInView } from 'react-intersection-observer';

function Contact() {

  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  return (
    <div>
          <form className={inView ? "contactForm zoom" : "contactForm"} ref={ref}>
            <h2>Let's Talk</h2>
            <input id="firstName" type="text" placeholder="First Name" required/>
            <input id="lastName" type="text" placeholder="Last Name" required/>
            <input id="email" type="text" placeholder="example@email.com" required />
            <input id="phone" type="text" placeholder="(000)000-0000" />
            <textarea id="message" placeholder="Message..." cols="30" rows="10"></textarea>
            <input type="submit" id="submit" />
          </form>
    </div>
  )
}

export default Contact