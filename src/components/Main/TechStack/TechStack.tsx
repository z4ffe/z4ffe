import React from 'react';
import AnimatedPage from '../AnimatedPage';
import styles from './TechStack.module.scss'

const TechStack: React.FC = () => {
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
				<img src="/img/tech/material.png" alt="material ui"/>
				<img src="/img/tech/tailwind.svg" alt="tailwind"/>
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
				<img src="/img/tech/mongoose.png" alt="mongoose-odm"/>
				<img src="/img/tech/jwt.png" alt="jwt"/>
				<img src="/img/tech/sequelize.png" alt="sequelize"/>
			 </div>
			 <div className={styles.techstack__fifth}>
				<img src="/img/tech/mongodb.webp" alt="mongodb"/>
				<img src="/img/tech/mysql.png" alt="mysql"/>
				<img src="/img/tech/postgre.webp" alt="postgresql"/>
			 </div>
		  </div>
	   </AnimatedPage>
   );
};

export default TechStack;
