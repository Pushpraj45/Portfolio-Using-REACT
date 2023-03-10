import React from "react";
import img from "../img/About-me.jpg";
import "./About.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="headd">About me</h1>
      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="about-section">
        <div className="img-section">
          <img src={img} alt="" srcset="" />
        </div>
        <div className="about-text">
          <div className="text-section">
            As a React developer with a passion for machine learning, I have
            developed a strong foundation in both front-end development and data
            science. I am well-versed in building user interfaces with React,
            and have experience working with various libraries and frameworks
            within the React ecosystem.
          </div>
          <div className="highlight">
            <ul>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                Full-Stack Developer
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                Blockchain Developer
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                Graphic Designer
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                Redux for State Management
              </li>
              <li>
                <span>
                  <i className="fa-sharp fa-solid fa-circle-dot"></i>
                </span>
                ML Enthusiast
              </li>
            </ul>
          </div>
          <div className="about-btn">
            <a className="resume" href="images/Resume.pdf" download>
              Resume
            </a>
            <a href="#contact" className="hire-me">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
