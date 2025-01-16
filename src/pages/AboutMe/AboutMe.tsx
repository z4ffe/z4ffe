import React from 'react'
import {AnimatedPage} from '../../components/AnimatedPage/AnimatedPage'
import styles from './AboutMe.module.scss'

export const AboutMe = () => {
	return (
		<AnimatedPage>
			<div className={styles.aboutme}>
				<div className={styles.aboutme__wrapper}>
					<h2 className={styles.aboutme__title}>Full-Stack Developer | Saint Petersburg</h2>
					<div className={styles.border}></div>
					<p className={styles.aboutme__text}>
						I specialize in building modern, high-performance web applications with a focus on user experience and
						scalability. Since 2021, I have been continuously enhancing my skills in web development, mastering
						core
						programming concepts and frontend technologies. My journey includes an in-depth exploration of
						full-stack
						development during an intensive educational program in Israel.</p>
					<div className={styles.border}></div>
					<h3 className={styles.aboutme__subtitle}>Technical Expertise</h3>
					<h4 className={styles.aboutme__list__title}>React</h4>
					<ul className={styles.aboutme__list}>
						<li>Development of functional components and migration to TypeScript.</li>
						<li>Creation of custom hooks and implementation of optimized architectures.</li>
						<li>Configuration of advanced routing solutions.</li>
					</ul>
					<h4 className={styles.aboutme__list__title}>JavaScript & TypeScript</h4>
					<ul className={styles.aboutme__list}>
						<li>Writing maintainable and scalable code using the latest features of the language.</li>
						<li>Refactoring existing codebases for better performance and readability.</li>
					</ul>
					<h4 className={styles.aboutme__list__title}>State Management</h4>
					<ul className={styles.aboutme__list}>
						<li>Expertise in Redux, Redux Toolkit, and RTK Query for efficient application state handling.</li>
					</ul>
					<h4 className={styles.aboutme__list__title}>UI Frameworks</h4>
					<ul className={styles.aboutme__list}>
						<li>Proficient in Chakra UI, Ant Design, and Material UI.</li>
						<li>Development of custom UI components tailored to project requirements.</li>
					</ul>
					<div className={styles.border}></div>
					<h3 className={styles.aboutme__subtitle}>Contact</h3>
					<ul className={styles.aboutme__list}>
						<li><strong>Website: </strong><a href='https://pavelkuliasov.com'
																	target='_blank'>pavelkuliasov.com</a></li>
						<li><strong>Email: </strong><a href='mailto:pavel.kulyasov@gmail.com'
																 target='_blank'>pavel.kulyasov@gmail.com</a>
						</li>
						<li><strong>Telegram: </strong><a href='https://telegram.me/paul_lightman'
																	 target='_blank'>@paul_lightman</a></li>
						<li><strong>LinkedIn: </strong><a href='https://linkedin.com/in/paul-lightman'
																	 target='_blank'>LinkedIn</a></li>
						<li><strong>GitHub: </strong><a href='https://github.com/z4ffe' target='_blank'>GitHub</a></li>
					</ul>
					<div className={styles.border}></div>
					<h3 className={styles.aboutme__subtitle}>Hobbies & Interests</h3>
					<ul className={styles.aboutme__list}>
						<li><strong>Sports:</strong> Running, tennis, motorsports.</li>
						<li><strong>Music:</strong> Playing the electric guitar.</li>
						<li><strong>Tech Enthusiast:</strong> Staying updated on modern technologies and gadgets.</li>
					</ul>
				</div>
				<div className={styles.border}></div>
			</div>
		</AnimatedPage>
	)
}
