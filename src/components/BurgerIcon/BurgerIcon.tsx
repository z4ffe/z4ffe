import {FC} from 'react'
import styles from './BurgerIcon.module.scss'

interface Props {
	menu: boolean
	menuHandler: () => void
}

export const BurgerIcon: FC<Props> = ({menu, menuHandler}) => {
	const isBurgerOpen = menu ? `${styles.burger__line} ${styles.open}` : styles.burger__line

	return (
		<div className={styles.burger__icon} onClick={menuHandler}>
			<span className={isBurgerOpen}></span>
			<span className={isBurgerOpen}></span>
			<span className={isBurgerOpen}></span>
		</div>
	)
}
