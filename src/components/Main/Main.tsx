import React, {useEffect, useRef} from 'react';
import Perlin from "./Perlin/Perlin";
import AnimatedPage from "./AnimatedPage";
import styles from './Main.module.css'

const Main = () => {
   const imageOne: any = useRef();
   const imageTwo: any = useRef();
   const imageThree: any = useRef();

   const handleMouseMove = (e: any) => {
      imageOne.current.style.left = `${(e.clientX - 6000) / 1000}rem`
      imageOne.current.style.top = `${(e.clientY + 10500) / 1000}rem`
      imageTwo.current.style.top = `${(e.clientX + 11200) / 1000}rem`
      imageTwo.current.style.left = `${(e.clientY - 12000) / 1000}rem`
      imageThree.current.style.left = `${(e.clientX + 2000) / 1000}rem`
      imageThree.current.style.top = `${(e.clientX + 11000) / 1000}rem`
   }

   useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
         window.removeEventListener('mousemove', handleMouseMove)
      }
   }, [])

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
