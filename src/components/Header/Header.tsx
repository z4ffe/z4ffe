import React from 'react'
import {useMediaQuery} from 'react-responsive'
import {Link, useLocation} from 'react-router-dom'
import {CONSTANTS} from '../../constants/constants'
import styles from './Header.module.scss'

export const Header = () => {
	const isDesktop: boolean = useMediaQuery({minWidth: '767px'})
	const location = useLocation()

	const title = () => {
		switch (true) {
			case(location.pathname === '/' && isDesktop):
				return <h1 className={styles.title}><Link to='/'><br />{CONSTANTS.SHORT_NAME}</Link></h1>
			case(location.pathname !== '/' && isDesktop):
				return <h1 className={styles.title}><Link to='/'>{CONSTANTS.FULL_NAME.toUpperCase()}</Link></h1>
			default:
				return <h1 className={styles.title}><Link to='/'>{CONSTANTS.SHORT_NAME}</Link></h1>
		}
	}

	return (
		<div className={styles.header}>
			{title()}
			<div className={styles.border}></div>
		</div>
	)
}