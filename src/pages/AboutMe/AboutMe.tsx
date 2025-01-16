import React from 'react'
import {AnimatedPage} from '../../components/AnimatedPage/AnimatedPage'
import styles from './AboutMe.module.scss'

export const AboutMe = () => {
	return (
		<AnimatedPage>
			<div className={styles.aboutme}>
				<div className={styles.text}>
					<h2>Full-Stack Developer | Saint Petersburg</h2>
					<hr />
					<p>
						I specialize in building modern, high-performance web applications with a focus on user experience and
						scalability. Since 2021, I have been continuously enhancing my skills in web development, mastering
						core
						programming concepts and frontend technologies. My journey includes an in-depth exploration of
						full-stack
						development during an intensive educational program in Israel.</p>
					<hr />
					<h3>Technical Expertise</h3>
					<h4>React</h4>
					<ul>
						<li>Development of functional components and migration to TypeScript.</li>
						<li>Creation of custom hooks and implementation of optimized architectures.</li>
						<li>Configuration of advanced routing solutions.</li>
					</ul>
					<h4>JavaScript & TypeScript</h4>
					<ul>
						<li>Writing maintainable and scalable code using the latest features of the language.</li>
						<li>Refactoring existing codebases for better performance and readability.</li>
					</ul>
					<h4>State Management</h4>
					<ul>
						<li>Expertise in Redux, Redux Toolkit, and RTK Query for efficient application state handling.</li>
					</ul>
					<h4>UI Frameworks</h4>
					<ul>
						<li>Proficient in Chakra UI, Ant Design, and Material UI.</li>
						<li>Development of custom UI components tailored to project requirements.</li>
					</ul>
					<hr />
					<h3>Contact</h3>
					<ul>
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
					<hr />
					<h3>Hobbies & Interests</h3>
					<ul>
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
