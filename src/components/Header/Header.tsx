import React from 'react';
import styles from './Header.module.scss'
import {Link, useLocation} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {useMediaQuery} from "react-responsive";

type Props = {
   menu: (event: React.SyntheticEvent) => void;
}

const Header: React.FC<Props> = (props) => {
   const isDesktop: boolean = useMediaQuery({minWidth: '767px'})
   const location = useLocation()

   return (

       <div className={styles.header}>
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
