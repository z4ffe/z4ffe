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
						// @ts-ignore
						onClick={() => ym(99553814, 'reachGoal', 'btn-click-me')}
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
