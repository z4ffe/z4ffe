import React from 'react';
import styles from './AboutMe.module.css'
import AnimatedPage from "../AnimatedPage";

const AboutMe = () => {
   return (
       <AnimatedPage>
          <div className={styles.aboutme}>
             <div className={styles.text}>Junior Full-Stack Developer with 1-year experience creating SPA using MERN
                Stack. I have a strong foundation in front-end and back-end web development. I have experience building
                user-facing web applications using React and Redux, as well as developing server-side logic and
                integrating APIs using Node.JS and Express. I am proficient in using a variety of databases, including
                both SQL and NoSQL, and have experience with ORM/ODM libraries like Sequelize and Mongoose. I am
                dedicated to constantly learning and improving my skills, and am eager to take on new challenges and
                expand my knowledge.
             </div>
             <div className={styles.border}></div>
          </div>
       </AnimatedPage>
   );
};

export default AboutMe;
