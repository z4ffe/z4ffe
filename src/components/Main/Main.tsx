import React from 'react';
import Perlin from "./Perlin/Perlin";
import AnimatedPage from "./AnimatedPage";
import styles from './Main.module.scss'

const Main: React.FC = (): JSX.Element => {
   return (
       <AnimatedPage>
          <div className={styles.main}>
             <div className={styles.main_wrapper}>
                <Perlin/>
             </div>
          </div>
       </AnimatedPage>
   );
};

export default Main;
