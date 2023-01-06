import React, {useEffect, useRef} from 'react';
import AnimatedPage from "./AnimatedPage";
import styles from './Main.module.css'
import image1 from '../../image/face/yellow-lines.png'
import image2 from '../../image/face/red-lines.png'
import image3 from '../../image/face/blue-lines.png'

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
                <img ref={imageOne} className={styles.image1} src={image1} alt="photo"/>
                <img ref={imageTwo} className={styles.image2} src={image2} alt="photo"/>
                <img ref={imageThree} className={styles.image3} src={image3} alt="photo"/>
             </div>
          </div>
       </AnimatedPage>
   );
};

export default Main;
