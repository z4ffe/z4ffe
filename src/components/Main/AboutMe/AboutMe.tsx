import React from 'react';
import styles from './AboutMe.module.css'
import AnimatedPage from "../AnimatedPage";

const AboutMe = () => {
   return (
       <AnimatedPage>
          <div className={styles.aboutme}>
             <div className={styles.text}>
                Hello, I'm Pavel!
                <br/>
                <br/>
                Full-stack developer from Saint-Petersburg, currently living in Israel. With a strong passion for
                technology and a background in coding and programming, I am always
                excited to take on new challenges and grow in my field.
                <br/>
                <br/>
                I have a strong interest in music and enjoy
                playing the guitar in my free time. I am also interested in IT and hardware, and I am always eager to
                learn and grow in my field. In addition to playing music and staying up-to-date with the latest
                technology, I also enjoy staying active through activities such as tennis and running, as well as
                spending quality time with friends and family.
             </div>
             <div className={styles.border}></div>
          </div>
       </AnimatedPage>
   );
};

export default AboutMe;
