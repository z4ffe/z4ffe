import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navigation.module.scss'

const Navigation: React.FC = () => {
   return (
          <div className={styles.nav}>
             <ul>
                <li><NavLink className={({isActive}) => isActive ? styles.active : null} to='/about-me'>About me</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : null} to='/cv'>CV</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : null} to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? styles.active : null} to='/stack'>Tech stack</NavLink></li>
             </ul>
          </div>
   );
};

export default Navigation;
