import React from "react";
import { useEffect } from "react";
import './resume.css';
const Resume = () => {
  useEffect(() => {
    let list = document.querySelectorAll(".left a");
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = function () {
        let j = 0;
        while (j < list.length) {
          list[j++].className = "list";
        }
        list[i].className = "list active-link";
      };
    }
  }, []);

  return (
    <div id="resume" className="resume-section">
      <h1 className="headd">Career Summary</h1>

      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="main-resume">
        <div class="left">
          <a href="#first" className="active-link">
            <b></b>
            <b></b>
            <i className="fa-solid fa-graduation-cap"></i> Qualifications
          </a>
          <a href="#second">
            <b></b>
            <b></b>
            <i className="fa-solid fa-laptop"></i> Technical acumen
          </a>
          <a href="#third">
            <b></b>
            <b></b>
            <i className="fa-solid fa-chart-column"></i> Projects
          </a>
          <a href="#fourth">
            <b></b>
            <b></b>
            <i className="fa-solid fa-clock-rotate-left"></i> Work Experience
          </a>
        </div>
        <div className="right">
          <div id="first">
             
            <div className="edu">
              <div className="edu-name">
                <h1 className="te">
                  <i class="fa-solid fa-circle-dot"></i> BTECH CSE(HI)
                </h1>
                <h2 className="time">2021-present</h2>
              </div>
              {/* <br /> */}
              <h2 className="type">VIT BHOPAL <p>Grade - 8.7</p></h2>
            </div>
            <div className="edu">
              <div className="edu-name">
                <h1 className="te">
                  <i class="fa-solid fa-circle-dot"></i> Excellence HSS Katni
                </h1>
                <p className="time">2017-2021</p>
              </div>
              <h2 className="type">MPBSE <p>Grade - 9.6</p></h2>
            </div>
            <div className="edu">
              <div className="edu-name">
                <h1 className="te">
                  <i class="fa-solid fa-circle-dot"></i> Moral Public School
                </h1>
                <h3 className="time">2006 - 2016</h3>
              </div>
              <h2 className="type">MPBSE <p>Grade - 9.2</p></h2>
            </div>
          </div>
          <div id="second">
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> ReactJS & It's Libraries
              </p>
              <div className="p-bar">
                <div style={{ width: "80%" }} className="react"></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> MongoDB, Mongoose, NodeJS & Express
              </p>
              <div className="p-bar">
                <div style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> Frontend Frameworks 
              </p>
              <div className="p-bar">
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> Java , Python, C++, Solidity
              </p>
              <div className="p-bar">
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skill">
              <p>
                <i class="fa-solid fa-circle-dot"></i> Figma & Adobe Tools
              </p>
              <div className="p-bar">
                <div style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>
          <div id="third">
            <div className="edu">
              <div className="edu-name">
                <h1 className="tee">
                  <i class="fa-solid fa-circle-dot"></i> Medistats - Detection of Behevioural Disorder
                </h1>
                <p className="time">2022-23</p>
              </div>
              <h2 className="type"> ReactJS, Machine Learning, Formspree, MongoDB</h2>
            </div>
            <div className="edu">
              <div className="edu-name">
                <h1 className="tee">
                  <i class="fa-solid fa-circle-dot"></i> Posterz - Connects artists to buyers  
                </h1>
                <p className="time">Feb'23</p>
              </div>
              <h2 className="type">ReactJS, Strapi, Stripe, Cloudinary, Nodejs</h2>
            </div>
            <div className="edu">
              <div className="edu-name">
                <h1  className="tee">
                  <i class="fa-solid fa-circle-dot"></i> FlashFrame - Where every photo tells a story 
                </h1>
                <p className="time">Mar'23</p>
              </div>
              <h2 className="type">ReactJS, NodeJS, MongoDB, Cloudinary</h2>
            </div>
            <div className="edu">
              <div className="edu-name">
                <h1 className="tee">
                  <i class="fa-solid fa-circle-dot"></i> Deerghayu - Heal your body, one pose at a time.
                </h1>
                <p className="time">Mar'23</p>
              </div>
              <h2 className="type">HTML,CSS,JS, Filteration, Formspree, Bootstrap

</h2>
            </div>
            </div>
             
             
          <div id="fourth">
            <div className="edu">
              <div className="edu-name">
                <h1 className="tee">
                  <i class="fa-solid fa-circle-dot"></i> Self Employed - Posterz.
                </h1>
                <p className="time">Mar'23-present</p>
              </div>
              <p className="type"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
