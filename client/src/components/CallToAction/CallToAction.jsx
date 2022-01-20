import React from "react";
import "./CallToAction.css";
import { Link } from "react-router-dom";
import Selfie from "../Photos/self.jpg";
import Socials from "../Socials/Socials";

function CallToAction() {
  return (
    <div>
      <p className="top-intro">RODNEY .T</p>
      <p className="bottom-intro">SOFTWARE ENGINEER</p>
      <div className="about">
        <div className="photo">
          <img className="selfie" src={Selfie} alt="" />
        </div>
        <div className="about-me">
          <h1 className="about-title">About</h1>
          <p>
            Hey there, welcome to my Portfolio, my name is Rodney Todd. I am a
            full stack web developer, who enjoys every aspect of coding! One day
            I was sitting on my couch browsing the app store, and thought "hmm
            it would be interesting to build my own app". Ever since that day I
            have pursued web development.
          </p>
          <p>
            I love the easy times of coding, but I also love the times when
            you're so frustrated with some code that you could throw your
            computer. There is just something about it, when you finally find a
            solution to your problem, and can sit back and look at the finished
            work!
          </p>
          <p>Hit that Button and let's talk!</p>
          <Link className="Link" to="/contact">
            <button className="contact-link"> Contact Me!</button>
          </Link>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
