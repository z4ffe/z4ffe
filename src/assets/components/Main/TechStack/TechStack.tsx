import React from 'react';
import styles from './TechStack.module.css'
import AnimatedPage from "../AnimatedPage";

const TechStack = () => {
   return (
       <AnimatedPage>
          <div className={styles.techstack}>
             <h2>Which tech I use</h2>
             <div className={styles.border}></div>
             <div className={styles.techstack__first}>
                <img src="/img/tech/html.webp" alt="html5"/>
                <img src="/img/tech/css.png" alt="css3"/>
                <img src="/img/tech/sass.png" alt="scss"/>
                <img src="/img/tech/bootstrap.png" alt="bootstrap"/>
             </div>
             <div className={styles.techstack__second}>
                <img src="/img/tech/js.svg"
                     alt="js"/>
                <img src="/img/tech/typescript.svg" alt="ts"/>
             </div>
             <div className={styles.techstack__third}>
                <img src="/img/tech/react.png" alt="react"/>
                <img src="/img/tech/redux.png" alt="Redux"/>
                <img src="/img/tech/webpack.png" alt="Webpack"/>
                <img src="/img/tech/vite.png" alt="vite"/>
             </div>
             <div className={styles.techstack__fourth}>
                <img src="/img/tech/node.png" alt="nodejs"/>
                <img src="/img/tech/express.png" alt="express"/>
                <img src="/img/tech/sequelize.png" alt="sequelize"/>
                <img src="/img/tech/jwt.png" alt="jwt"/>
                <img src="/img/tech/mongoose.png" alt="mongoose-odm"/>
             </div>
             <div className={styles.techstack__fifth}>
                <img src="/img/tech/mongo.png" alt="mongodb"/>
                <img src="/img/tech/postrgre.png" alt="postgresql"/>
             </div>
          </div>
       </AnimatedPage>
   );
};

export default TechStack;
