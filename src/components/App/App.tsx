import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HouseIcon from '@mui/icons-material/House';
import MenuIcon from '@mui/icons-material/Menu';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import PsychologyIcon from '@mui/icons-material/Psychology';
import {Box, Drawer} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import AboutMe from '../Main/AboutMe/AboutMe';
import CV from '../Main/CV/CV';
import Main from '../Main/Main'
import Portfolio from '../Main/Portfolio/Portfolio';
import TechStack from '../Main/TechStack/TechStack';
import BurgerIcon from '../misc/BurgerIcon/BurgerIcon';
import Navigation from '../Navigation/Navigation';
import styles from './App.module.scss'

const App: React.FC = (): JSX.Element => {
   const [menu, setMenu] = useState<boolean>(false)
   const mobile: boolean = useMediaQuery({query: '(max-width: 767px)'})

   const menuHandler = (): void => setMenu(!menu)

   return (
	   <BrowserRouter>
		  {mobile && <BurgerIcon menu={menu} menuHandler={menuHandler}/>}
		  <div className={styles.wrapper}>
			 <div className={styles.menu}>
				<Header/>
				<Navigation/>
				<Footer/>
			 </div>
			 {mobile && <Header/>}
			 <div className={styles.content}>
				<Routes>
				   <Route path="/" index element={<Main/>}></Route>
				   <Route path="*" index element={<Main/>}></Route>
				   <Route path="about-me" element={<AboutMe/>}></Route>
				   <Route path="CV" element={<CV/>}></Route>
				   <Route path="portfolio" element={<Portfolio/>}></Route>
				   <Route path="stack" element={<TechStack/>}></Route>
				</Routes>
			 </div>
			 {mobile && <Footer/>}
		  </div>
		  <Drawer anchor={'right'} open={menu} onClose={(): void => setMenu(!menu)} transitionDuration={350}
				  PaperProps={{
					 sx: {
						borderRadius: '0 0 0 10px',
						backgroundSize: 'cover',
						backgroundImage: 'linear-gradient(to top, rgba(16,12,49, 0), rgba(16,12,49,1))',
						backgroundColor: 'transparent',
					 }
				  }}
		  >
			 <Box sx={{width: '100%'}}>
				<List>
				   <ListItem>
					  <HouseIcon className={styles.icons}/>
					  <NavLink onClick={(): void => setMenu(!menu)} className={({isActive}) => isActive ? styles.active_drawer : styles.inactive_drawer}
							   to="/" end>Home</NavLink>
				   </ListItem>
				   <ListItem>
					  <AssignmentIndIcon className={styles.icons}/>
					  <NavLink onClick={(): void => setMenu(!menu)} className={({isActive}) => isActive ? styles.active_drawer : styles.inactive_drawer}
							   to="/about-me">About
						 me</NavLink>
				   </ListItem>
				   <ListItem>
					  <ContentPasteIcon className={styles.icons}/>
					  <NavLink onClick={(): void => setMenu(!menu)} className={({isActive}) => isActive ? styles.active_drawer : styles.inactive_drawer}
							   to="/cv">CV</NavLink>
				   </ListItem>
				   <ListItem>
					  <NextWeekIcon className={styles.icons}/>
					  <NavLink onClick={(): void => setMenu(!menu)} className={({isActive}) => isActive ? styles.active_drawer : styles.inactive_drawer}
							   to="/portfolio">Portfolio</NavLink>
				   </ListItem>
				   <ListItem>
					  <PsychologyIcon className={styles.icons}/>
					  <NavLink onClick={(): void => setMenu(!menu)} className={({isActive}) => isActive ? styles.active_drawer : styles.inactive_drawer}
							   to="/stack">Tech
						 stack</NavLink>
				   </ListItem>
				</List>
			 </Box>
		  </Drawer>
	   </BrowserRouter>
   );
};

export default App;
