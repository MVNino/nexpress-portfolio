import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <Image
            src="/email.png"
            alt="Email icon"
            className="icon contact-icon email-icon"
            width="40"
            height="40"
          />
          <p>
            <a href="mailto:ninomarlonvilla@gmail.com">
              ninomarlonvilla@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <Image
            src="/linkedin.png"
            alt="LinkedIn icon"
            className="icon contact-icon"
            width="40"
            height="40"
          />
          <p>
            <a href="https://www.linkedin.com/in/marlon-nino">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
