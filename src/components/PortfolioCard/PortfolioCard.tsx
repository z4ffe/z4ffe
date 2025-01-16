import {FC, SyntheticEvent} from 'react'
import {useMediaQuery} from 'react-responsive'
import {IPortfolioWork} from '../../types/component.interfaces'
import styles from './PortfolioCard.module.scss'

export const PortfolioCard: FC<IPortfolioWork> = ({data}) => {
	const isMobile = useMediaQuery({query: '(max-width: 767px)'})

	const wrapperOpacityOn = (event: SyntheticEvent<HTMLDivElement>, img: string) => {
		if (isMobile) return
		event.currentTarget.style.opacity = '1'
		event.currentTarget.style.backgroundImage = `linear-gradient(to bottom, rgba(16, 20, 110, 0.8), rgba(204, 45, 66, 0.2)), url(${img})`
		event.currentTarget.style.backgroundSize = 'cover'
	}

	const wrapperOpacityOff = (event: SyntheticEvent<HTMLDivElement>) => {
		if (isMobile) return
		event.currentTarget.style.opacity = '0'
	}

	return (
		<div className={styles.portfolioCard__link}>
			<div className={styles.portfolioCard}
				  style={{backgroundImage: isMobile ? `linear-gradient(to bottom, rgba(16, 20, 110, 0.8), rgba(204, 45, 66, 0.2)), url(${data.img})` : `url(${data.img})`}}>
				<div className={styles.portfolioCard__wrapper}
					  onMouseOver={(event) => wrapperOpacityOn(event, data.img)}
					  onMouseLeave={(event) => wrapperOpacityOff(event)}>
					<a className={styles.portfolioCard__link} href={data.deploy} target='_blank'></a>
					<h2 className={styles.portfolioCard__title}>{data.title}</h2>
					<p className={styles.portfolioCard__desc}>{data.desc}</p>
					<div className={styles.portfolioCard__links}>
						<div className={styles.stack}>
							{data.html && <i className='fa-brands fa-html5 fa-xl'></i>}
							{data.sass && <i className='fa-brands fa-sass fa-xl'></i>}
							{data.js && <i className='fa-brands fa-js fa-xl'></i>}
							{data.react && <i className='fa-brands fa-react fa-xl'></i>}
							{data.node && <i className='fa-brands fa-node-js fa-xl'></i>}
							{data.db && <i className='fa-solid fa-database fa-xl'></i>}
						</div>
						<div className={styles.links}>
							<a href={data.github} target='_blank'><i
								className='fa-brands fa-github fa-xl'></i></a>
							<a href={data.deploy} target='_blank'><i
								className='fa-solid fa-arrow-up-right-from-square fa-xl'></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
