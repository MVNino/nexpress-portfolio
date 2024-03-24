import React from "react";
import Image from "next/image";

const fetchSettings = async () => {
  const response = await fetch("http://localhost:3000/api/settings");

  const { data: setting } = await response.json();

  return setting;
};

const Profile = async () => {
  const setting = (await fetchSettings()) || [];

  return (
    <section id="profile">
      <div className="section__pic-container">
        <Image
          src="/profile-circle.png"
          alt="Marlon Niño profile picture"
          width="400"
          height="400"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1 text-white-f8">Hello, I'm</p>
        <h1 className="title text-white-smoke">Marlon Niño</h1>
        <p className="section__text__p2 text-white-f8">Software Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onclick="window.open('./assets/marlon_nino_cv.pdf')"
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <Image
            src="/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick="location.href='https://www.linkedin.com/in/marlon-nino/'"
            width="32"
            height="32"
          />
          <Image
            src="/github.png"
            alt="My Github profile"
            className="icon"
            onClick="location.href='https://github.com/mvnino'"
            width="32"
            height="32"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
