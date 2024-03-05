import React from 'react'
import {AnimatedPage} from '../../components/AnimatedPage/AnimatedPage'
import {Perlin} from '../../components/Perlin/Perlin'
import styles from './Home.module.scss'


export const Home = () => {
	return (
		<AnimatedPage>
			<div className={styles.home}>
				<div className={styles.home_wrapper}>
					<Perlin />
				</div>
			</div>
		</AnimatedPage>
	)
}
