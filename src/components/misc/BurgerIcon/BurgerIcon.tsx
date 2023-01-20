import React from 'react';
import styles from './BurgerIcon.module.scss'

interface IProps {
   menu: boolean
   menuHandler(): void;
}

const BurgerIcon: React.FC<IProps> = (props): JSX.Element => {
   return (
	   <div className={styles.burger__icon} onClick={props.menuHandler}>
			<span className={props.menu ? `${styles.burger__line} ${styles.open}` : styles.burger__line}></span>
			<span className={props.menu ? `${styles.burger__line} ${styles.open}` : styles.burger__line}></span>
			<span className={props.menu ? `${styles.burger__line} ${styles.open}` : styles.burger__line}></span>
	   </div>
   );
};

export default BurgerIcon;
