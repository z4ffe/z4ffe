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
				<img src="/public/img/tech/html.webp" alt="html5"/>
				<img src="/public/img/tech/css.png" alt="css3"/>
				<img src="/public/img/tech/sass.png" alt="scss"/>
				<img src="/public/img/tech/bootstrap.png" alt="bootstrap"/>
				<img src="/public/img/tech/material.png" alt="material ui"/>
				<img src="/public/img/tech/tailwind.svg" alt="tailwind"/>
			 </div>
			 <div className={styles.techstack__second}>
				<img src="/public/img/tech/js.svg"
					 alt="js"/>
				<img src="/public/img/tech/typescript.svg" alt="ts"/>
			 </div>
			 <div className={styles.techstack__third}>
				<img src="/public/img/tech/react.png" alt="react"/>
				<img src="/public/img/tech/redux.png" alt="Redux"/>
				<img src="/public/img/tech/webpack.png" alt="Webpack"/>
				<img src="/public/img/tech/vite.png" alt="vite"/>
			 </div>
			 <div className={styles.techstack__fourth}>
				<img src="/public/img/tech/node.png" alt="nodejs"/>
				<img src="/public/img/tech/express.png" alt="express"/>
				<img src="/public/img/tech/mongoose.png" alt="mongoose-odm"/>
				<img src="/public/img/tech/jwt.png" alt="jwt"/>
				<img src="/public/img/tech/sequelize.png" alt="sequelize"/>
			 </div>
			 <div className={styles.techstack__fifth}>
				<img src="/public/img/tech/mongodb.webp" alt="mongodb"/>
				<img src="/public/img/tech/mysql.png" alt="mysql"/>
				<img src="/public/img/tech/postgre.webp" alt="postgresql"/>
			 </div>
		  </div>
	   </AnimatedPage>
   );
};

export default TechStack;
