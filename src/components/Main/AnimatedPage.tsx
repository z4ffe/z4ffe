import React from 'react';
import {motion} from "framer-motion";

const animation:any = {
   initial: {opacity: 0, y: -100},
   animate: {opacity: 1, y: 0},
   exit: {opacity: 0, y: 100}
}

const AnimatedPage = ({children}:any) => {
   return (
       <motion.div
           variants={animation}
           initial='initial'
           animate='animate'
           exit='exit'
       >
          {children}
       </motion.div>
   );
};

export default AnimatedPage;
