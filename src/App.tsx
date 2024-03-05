import {useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import {BrowserRouter} from 'react-router-dom'
import {BurgerIcon} from './components/BurgerIcon/BurgerIcon'
import {Footer} from './components/Footer/Footer'
import {Header} from './components/Header/Header'
import {Navigation} from './components/Navigation/Navigation'
import {SideBar} from './components/SideBar/SideBar'
import {Router} from './routes/Router'

export const App = () => {
	const [menu, setMenu] = useState<boolean>(false)
	const isMobile: boolean = useMediaQuery({query: '(max-width: 767px)'})

	const menuHandler = () => setMenu(!menu)

	return (
		<BrowserRouter>
			{isMobile && <BurgerIcon menu={menu} menuHandler={menuHandler} />}
			<div className='wrapper'>
				<div className='menu'>
					<Header />
					<Navigation />
					<Footer />
				</div>
				{isMobile && <Header />}
				<div className='content'>
					<Router />
				</div>
				{isMobile && <Footer />}
			</div>
			<SideBar menu={menu} menuHandler={menuHandler} />
		</BrowserRouter>
	)
}
