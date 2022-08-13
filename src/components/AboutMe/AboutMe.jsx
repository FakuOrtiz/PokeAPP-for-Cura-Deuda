import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {

  

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.containerText}>
          <div>
            <h1>About me</h1>
            <p>
              Hi! I'm Facundo, an Argentinean Full Stack web developer with
              Front End orientation. I am passionate about technology and
              especially programming. <br />
              You can see all my projects in my{" "}
              <a
                className={styles.social}
                href="https://github.com/FakuOrtiz"
                target="_blank"
              >
                GitHub.
              </a>
              <br />
              And you can contact me on{" "}
              <a
                className={styles.social}
                href="https://www.linkedin.com/in/facundo-agustin-ortiz-gomez/"
                target="_blank"
              >
                Linkedin.
              </a>
            </p>
          </div>
          <div>
            <h1>About this project</h1>
            <p>
              I did this project to try to get a Front End Developer position at
              Cura Deuda. It took me 2 days. I did it with React and these
              libraries: axios, @reduxjs/toolkit, react-card-flip,
              react-router-dom and sweetalert2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
