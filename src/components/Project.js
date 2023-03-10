import React from "react";
import './Project.css';

const Project = () => {
  return (
    <div id="project">
      <h1 className="headd">Projects</h1>
      <div className="line">
        <div className="u-line"></div>
      </div>
      <div className="m-project">
        <div className="project-box">
          <img src="images\20221225_125210_0000.png" alt="" srcset="" />
          <p className="head"> Medistats - Detection Of Behevioural Disorders in Children </p>
          <p className="desc">
            1. Provide accurate and up-to-date information. <br />
            2. Ensure privacy and confidentiality <br />
            3. Provide clear instructions for accessing and interpreting results
            using ML{" "}
          </p>
          <p className="head">Tech-Stack - </p>
          <p className="desc">ReactJS, MongoDB,NodeJS, FormsPree, Machine Learning, Pyhton  </p>

          <div className="p-button">
            <a
              className="github"
              href="https://github.com/Pushpraj45/Medistats---Detection-Of-Behevioural-Disorder.git"
            >
              Github
            </a>
            <a
              className="live"
              href="https://drive.google.com/file/d/1cpBwRZ2O8zl3Wy5QnJ54Qd0HYaKHlmps/view?usp=sharing"
            >
               Demo
            </a>
          </div>
        </div>
        <div className="project-box">
          <img src="images/Posterz.png" alt="" srcset="" />
          <p className="head">Posterz - Connecting Artists to Buyers </p>
          <p className="desc">
            1. User-friendly interface for easy navigation and purchase process{" "}
            <br />
            2. Various payment options with secure payment gateway like Stripe{" "}
            <br />
            3. Clear return and refund policy and accessible customer service
          </p>
          <p className="head">Tech-Stack - </p>
          <p className="desc">ReactJS, Strapi, Stripe, FormsPree, Cloudinary, NodeJs  </p>
          <div className="p-button">
            <a
              className="github"
              href="https://github.com/Pushpraj45/Posterz---Connecting-Artists-to-Buyers.git"
            >
              Github
            </a>
            <a
              className="live"
              href="https://drive.google.com/file/d/1yS7iwOA2Pt7oFN0K1lOlIrBEUdOu6T2m/view"
            >
               Demo
            </a>
          </div>
        </div>
        <div className="project-box">
          <img src="images/Flashframe.png" alt="" />
          <p className="head">FlashFrame - Where every photo tells a story </p>
          <p className="desc">
            1. offers a fast and efficient user interface <br />
            2. ReactJS and MongoDB offer high flexibility and scalability
            <br />
            3. Cloudinary for storing the images of users{" "}
          </p>
          <p className="head">Tech-Stack - </p>
          <p className="desc">ReactJS, MongoDB, FormsPree, NodeJS, Cloudinary, React-Toaster  </p>
          <div className="p-button">
            <a
              className="github"
              href="https://github.com/Pushpraj45/FlashFrame-Where-every-photo-tells-a-story.git"
            >
              Github
            </a>
            <a
              className="live"
              href="https://drive.google.com/file/d/1CGHF1nHUg8WvMJkYTdrAzh5iyRIHPu9g/view"
            >
               Demo
            </a>
          </div>
        </div>
        <div className="project-box">
          <img src="images/Deerghayu .png" alt="" srcset="" />
          <p className="head">Deerghayu - Heal your body, one pose at a time. </p>
          <p className="desc"> 1. User-friendly interface for easy practice. <br />
          2. Non-invasive way to manage symptoms.
<br /> 3. Holistic approach to disease management promotes overall health and well-being.</p>
<p className="head">Tech-Stack - </p>
          <p className="desc"> HTML,CSS,JS, Filteration, Formspree, Bootstrap  </p>
          <div className="p-button">
            <a
              className="github"
              href="https://github.com/Pushpraj45/DeerghayuP1.git"
            >
              Github
            </a>
            <a
              className="live"
              href="https://pushpraj45.github.io/DeerghayuP1/"
            >
               Demo
            </a>
          </div>
        </div>
       
        </div>
      </div>
    // </div>
  );
};

export default Project;
