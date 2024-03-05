import React from 'react'
import {socials} from '../../assets/data/socials'
import {CONSTANTS} from '../../constants/constants'
import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<ul>
				{socials.map(social => (
					<li key={social.link}>
						<a href={social.link} target='_blank'><i className={`fa-xl ${social.icon}`}></i></a>
					</li>
				))}
			</ul>
			<a href='https://github.com/z4ffe' target='_blank'>
				<div className={styles.author}>{CONSTANTS.FOOTER_TEXT}</div>
			</a>
		</div>
	)
}
