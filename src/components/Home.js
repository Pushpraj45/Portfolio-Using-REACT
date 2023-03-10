import React from "react";
import Typical from "react-typical";
import "./Home.css";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-left">
        <div className="social">
          <ul>
            <li>
              <a href="https://github.com/Pushpraj45">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pushpraj-dubey-915aa4226/" >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Pushpra50588222">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="name">
          <p>
            Hello, I'm <span>Pushpraj </span>
          </p>
        </div>
        <div className="text">
          <span>
            {" "}
            <h1 className="tex">
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "MERN Stack Developer ",

                  5000,
                  "Blockchain Developer ",

                  5000,

                  "UI/UX Designer ",
                  5000,

                  "ML Enthusiast ",
                  5000,
                ]}
                wrapper="p"
              />
            </h1>
          </span>
        </div>
        {/* <div className="home-btn"> */}
        <a className="resume" href="images/Resume.pdf" download>
          Resume
        </a>
        {/* </div> */}
      </div>
      <div className="home-right">
        <div className="pic">
          <img
            className="pro-pic"
            src="https://media.licdn.com/dms/image/D5603AQEyIYdIsGkQ9g/profile-displayphoto-shrink_800_800/0/1672747708578?e=1683763200&v=beta&t=FH3ghqdB1NnlVJ4SyaV1XyyQobRRrQmq8uWLWM6ZxaY"
            alt=""
            srcset=""
          />
          <div className="circle">
            <span className="one">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt=""
              />
            </span>
            <span className="two">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"
                alt=""
              />
            </span>
            <span className="three">
              <img
                src="https://cdn.cdnlogo.com/logos/j/69/javascript.svg"
                alt=""
              />
            </span>
            <span className="four">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
