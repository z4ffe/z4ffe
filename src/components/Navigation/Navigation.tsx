import React from 'react'
import {NavLink} from 'react-router-dom'
import {pages} from '../../assets/data/pages'
import styles from './Navigation.module.scss'

export const Navigation = () => {
	const navElements = () => pages.map(page => {
		if (page.title !== 'Home') {
			return (
				<li key={page.title}>
					<NavLink
						className={({isActive}) => isActive ? styles.active : null}
						to={page.link}>
						{page.title}
					</NavLink>
				</li>)
		}
	})


	return (
		<div className={styles.nav}>
			<ul>
				{navElements()}
			</ul>
		</div>
	)
}
