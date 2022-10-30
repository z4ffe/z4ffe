import React from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
   return (
       <div className={styles.header}>
          <h1 className={styles.title}><Link to="/">PAVEL KULIASOV</Link></h1>
          <div className={styles.border}></div>
       </div>
   );
};

export default Header;
