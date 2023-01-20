import {motion} from 'framer-motion';
import React, {ReactNode} from 'react';

interface IAnimation {
   initial: { opacity: number, y: number },
   animate: { opacity: number, y: number },
   exit: { opacity: number, y: number }
}

type AnimatedPageType = { children: ReactNode; }

const animation: IAnimation  = {
   initial: {opacity: 0, y: -100},
   animate: {opacity: 1, y: 0},
   exit: {opacity: 0, y: 100}
}

const AnimatedPage = ({children}: AnimatedPageType): JSX.Element => {
   return (
	   <motion.div
		   variants={animation as any}
		   initial="initial"
		   animate="animate"
		   exit="exit"
	   >
		  {children}
	   </motion.div>
   );
};

export default AnimatedPage;
