import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <Image
            src="/marlon_side.jpeg"
            alt="Profile picture"
            className="about-pic"
            width="375"
            height="375"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <Image
                src="/experience.png"
                alt="Experience icon"
                className="icon"
                width="32"
                height="32"
              />
              <h3>Experience</h3>
              <p>
                4+ years <br />
                Software Development
              </p>
            </div>
            <div className="details-container">
              <Image
                src="/education.png"
                alt="Education icon"
                className="icon"
                width="32"
                height="32"
              />
              <h3>Education</h3>
              <p>Bachelor's Degree in Information Technology (PUP)</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Software Developer with nearly 5 years of experience in creating
              and implementing resourceful software solutions. Proficient in all
              phases of the software development lifecycle, from concept to
              delivery. Adept at collaborating with cross-functional teams to
              drive project success. Skilled in multiple programming languages
              and technologies, and committed to staying up-to-date with
              industry trends. Demonstrated track record of delivering
              high-quality, scalable, and maintainable software.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        // onClick="location.href='./#experience'"
        width="32"
        height="32"
      />
    </section>
  );
};

export default About;
