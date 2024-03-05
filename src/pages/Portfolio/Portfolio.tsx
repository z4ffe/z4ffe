import React from 'react'
import portfolioList from '../../assets/data/portfolio.json'
import {AnimatedPage} from '../../components/AnimatedPage/AnimatedPage'
import {PortfolioCard} from '../../components/PortfolioCard/PortfolioCard'
import styles from './Portfolio.module.scss'


export const Portfolio = () => {
	const allCells = portfolioList.map((el, id) => (<PortfolioCard key={id} data={el} />))

	return (
		<AnimatedPage>
			<div className={styles.portfolio}>
				{allCells}
			</div>
		</AnimatedPage>
	)
}
