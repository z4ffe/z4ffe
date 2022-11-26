import React from 'react';
import styles from './Header.module.css'
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props:any) => {

   return (
       <div className={styles.header}>
          <h1 className={styles.title}><Link to="/">PAVEL KULIASOV</Link></h1>
          <MenuIcon className={styles.menu} onClick={props.menu}/>
          <div className={styles.border}></div>
       </div>
   );
};

export default Header;
