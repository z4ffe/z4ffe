import {motion, Variants} from 'framer-motion'
import {ReactNode} from 'react'

type AnimatedPageType = {children: ReactNode;}

const animation: Variants = {
	initial: {opacity: 0, y: -100},
	animate: {opacity: 1, y: 0},
	exit: {opacity: 0, y: 100},
}

export const AnimatedPage = ({children}: AnimatedPageType) => {
	return (
		<motion.div
			variants={animation}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			{children}
		</motion.div>
	)
}
