import {Box, Drawer} from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import {pages} from '../../assets/data/pages'
import styles from './SideBar.module.scss'

interface Props {
	menu: boolean
	menuHandler: () => void
}

export const SideBar: FC<Props> = ({menuHandler, menu}) => {
	return (
		<Drawer anchor='right' open={menu} onClose={menuHandler} transitionDuration={350}
				  PaperProps={{
					  sx: {
						  borderRadius: '0 0 0 10px',
						  backgroundSize: 'cover',
						  backgroundImage: 'linear-gradient(to top, rgba(16,12,49, 0), rgba(16,12,49,1))',
						  backgroundColor: 'transparent',
					  },
				  }}
		>
			<Box sx={{width: '100%'}}>
				<List>
					{pages.map(page => (
						<ListItem key={page.title}>
							{page.icon}
							<NavLink onClick={menuHandler}
										className={({isActive}) => isActive ? styles.active_drawer : styles.inactive_drawer}
										to={page.link}
										end>
								{page.title}
							</NavLink>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	)
}