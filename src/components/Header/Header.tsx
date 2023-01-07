import React from 'react';
import styles from './Header.module.css'
import {Link, useLocation} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {useMediaQuery} from "react-responsive";

const Header = (props: any) => {
   const isDesktop: boolean = useMediaQuery({minWidth: '767px'})
   const location: any = useLocation()

   return (

       <div className={styles.header}>
          {/*<h1 className={location.pathname === '/' && isMobile ? styles.title_hide : styles.title}><Link to="/">{isMobile ? 'PAVEL KULIASOV' : 'PK'}</Link></h1>*/}
          {/*<h1 className={styles.title}><Link to="/">{((isDesktop && location.pathname === '/') || (!isDesktop))  ? 'PK' : 'PAVEL KULIASOV'}</Link></h1>*/}
          {location.pathname === '/' && isDesktop ?
              <h1 className={styles.title}><Link to="/">PK</Link></h1> :
              location.pathname !== '/' && isDesktop ?
               <h1 className={styles.title}><Link to="/">PAVEL KULIASOV</Link></h1> : <h1 className={styles.title}><Link to="/">PK</Link></h1>}
          <MenuIcon className={styles.menu} onClick={props.menu}/>
          <div className={styles.border}></div>
       </div>
   );
};

export default Header;
