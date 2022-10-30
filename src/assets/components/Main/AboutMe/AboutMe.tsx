import React from 'react';
import styles from './AboutMe.module.css'
import AnimatedPage from "../AnimatedPage";

const AboutMe = () => {
   return (
       <AnimatedPage>
          <div className={styles.aboutme}>
             <div className={styles.text}>Junior web-developer with 1 year IT Freelance experience. Willing to learn and
                grow in a collaborative team environment. Skilled in HTML, CSS/SCSS, JavaScript. Moderate knowledge of
                React/Redux/Node.js/REST-API & PostgreSQL/MongoDB.
             </div>
             <div className={styles.border}></div>
          </div>
       </AnimatedPage>
   );
};

export default AboutMe;
