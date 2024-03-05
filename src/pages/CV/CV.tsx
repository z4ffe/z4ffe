import React from 'react'
import {AnimatedPage} from '../../components/AnimatedPage/AnimatedPage'
import styles from './CV.module.scss'

export const CV = () => {
	return (
		<AnimatedPage>
			<div className={styles.cv}>
				<div className={styles.cv__header}>
					<h1>PAVEL KULIASOV</h1>
					<ul>
						<li><a href='tel:+972552876356'><span>+972 55-2876356</span></a></li>
						<li><a href='mailto: pavel.kulyasov@gmail.com'>pavel.kulyasov@gmail.com</a></li>
						<li><a href='https://github.com/z4ffe' target='_blank'>GitHub</a></li>
						<li><a href='https://linkedin.com/in/paul-lightman' target='_blank'>LinkedIn</a></li>
					</ul>
				</div>
				<div className={styles.border}></div>
				<h2>Summary:</h2>
				<p>Full-Stack Developer with a strong background in frontend and backend development, specializing in
					TypeScript/JavaScript and React. Committed to delivering high-quality code and exceptional user
					experiences, I am passionate about creating efficient and user-friendly applications.</p>
				<div className={styles.border}></div>
				<h2>Skill Highlights:</h2>
				<ul>
					<li>HTML5, CSS3, JS ES6+, React, Redux, REST API</li>
					<li>Node.JS, Express, Mongoose, Sequelize, MongoDB, MySQL, PostgreSQL</li>
					<li>Git, AWS Route53, Cloudfront, S3, EC2, Lambda, CI/CD</li>
					<li>Self-taught, Teamwork, Time Management, Adaptability, Open mindedness</li>
				</ul>
				<div className={styles.border}></div>
				<h2>Experience:</h2>
				<ul>
					<li>SueApp - Full-Stack Developer - 2022 to Present</li>
					<li>Freelance - 2021 to Present</li>
				</ul>
				<div className={styles.border}></div>
				<h2>Education:</h2>
				<ul>
					<li>MASA Web-Development - 2022</li>
					<li>RS School Web-Development - 2021</li>
					<li>qBasic & Visual Basic courses - 2000</li>
				</ul>
				<div className={styles.border}></div>
				<h2>Languages:</h2>
				<ul>
					<li>Russian – Native</li>
					<li>English – Professional working proficiency</li>
					<li>Hebrew - Elementary proficiency</li>
				</ul>
				<div className={styles.border}></div>
				<h2>Hobby and Activities:</h2>
				<ul>
					<li>IT & Hardware</li>
					<li>Financial markets</li>
					<li>Electric guitar</li>
					<li>Running/Tennis</li>
					<li>Motorsport</li>
				</ul>
				<div className={styles.border}></div>
			</div>
		</AnimatedPage>
	)
}
