import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import HouseIcon from '@mui/icons-material/House'
import NextWeekIcon from '@mui/icons-material/NextWeek'
import PsychologyIcon from '@mui/icons-material/Psychology'
import React from 'react'
import styles from '../../components/SideBar/SideBar.module.scss'

export const pages = [
	{
		title: 'Home',
		link: '/',
		icon: <HouseIcon className={styles.icons} />,
	},
	{
		title: 'About me',
		link: 'about',
		icon: <AssignmentIndIcon className={styles.icons} />,
	},
	{
		title: 'CV',
		link: 'cv',
		icon: <ContentPasteIcon className={styles.icons} />,
	},
	{
		title: 'Portfolio',
		link: 'portfolio',
		icon: <NextWeekIcon className={styles.icons} />,
	},
	{
		title: 'Tech stack',
		link: 'stack',
		icon: <PsychologyIcon className={styles.icons} />,
	},
]