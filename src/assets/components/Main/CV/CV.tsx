import React from 'react';
import styles from './CV.module.css'
import AnimatedPage from "../AnimatedPage";

const CV = () => {
   return (
       <AnimatedPage>
          <div className={styles.cv}>
             <div className={styles.cv__header}>
                <h1>PAVEL KULIASOV</h1>
                <ul>
                   <li><a href="tel:+972552876356">+972 55-2876356</a></li>
                   <li><a href="mailto: pavel.kulyasov@gmail.com">pavel.kulyasov@gmail.com</a></li>
                   <li><a href="https://github.com/z4ffe" target='_blank'>GitHub</a></li>
                   <li><a href="https://linkedin.com/in/pavel-kuliasov" target='_blank'>LinkedIn</a></li>
                </ul>
             </div>
             <div className={styles.border}></div>
             <h2>Summary:</h2>
             <p>Junior web-developer with 1 year IT Freelance experience. Willing to learn and grow in a collaborative
                team environment. Skilled in HTML, CSS/SCSS, JavaScript. Moderate knowledge of React/Redux/Node.js and
                PostgreSQL/MongoDB.</p>
             <div className={styles.border}></div>
             <h2>Skill Highlights:</h2>
             <ul>
                <li>Intermediate level of HTML, CSS, SASS/SCSS, BEM and JS ES6+</li>
                <li>Basic knowledge of React/Redux, Node.JS and PostgreSQL/MongoDB.</li>
                <li>Intermediate skills of MS Office suite & Photoshop.</li>
                <li>Time Management, Teamwork, Adaptability, Open mindedness and Self-taught</li>
             </ul>
             <div className={styles.border}></div>
             <h2>Experience:</h2>
             <ul>
                <li>IT Freelance - 2021 to 2022</li>
                <li>MASA Web development - 2022</li>
             </ul>
             <div className={styles.border}></div>
             <h2>Education:</h2>
             <ul>
                <li>qBasic & Visual Basic courses - 2000</li>
                <li>Web-Development courses - 2021</li>
                <li>MASA Web-Development</li>
             </ul>
             <div className={styles.border}></div>
             <h2>Languages:</h2>
             <ul>
                <li>Russian – Native</li>
                <li>English – Professional working proficiency</li>
             </ul>
             <div className={styles.border}></div>
             <h2>Hobby and Activities:</h2>
             <ul>
                <li>IT & Hardware</li>
                <li>Scientific literature</li>
                <li>Financial market</li>
                <li>Electric guitar</li>
                <li>Running/Tennis</li>
                <li>Motorsport</li>
             </ul>
             <div className={styles.border}></div>
          </div>
       </AnimatedPage>
   );
};

export default CV;
