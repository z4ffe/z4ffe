import React, {useEffect, useRef} from 'react';
import init, {clearCanvas} from '../../../utils/perlin'
import styles from './Perlin.module.scss'


const Perlin: React.FC = () => {
   const canvas = useRef<HTMLDivElement>(null)


   const handleMouseMove = (event: MouseEvent) => {
	  canvas.current!.style.left = `${(event.clientY) / 2000}rem`
	  canvas.current!.style.top = `${(event.clientX) / 2000}rem`
   }

   useEffect(() => {
	  init()
	  return (): void => clearCanvas()
   }, [])


   useEffect(() => {
	  window.addEventListener('mousemove', handleMouseMove)
	  return (): void => {
		 window.removeEventListener('mousemove', handleMouseMove)
	  }
   }, [])

   return (
	   <>
		  <div className={styles.container} id="container" ref={canvas}>
			 <div className={styles.header__container}>
				<h2 className={styles.header__desc}>Full-Stack Developer</h2>
				<h1 className={styles.header}>Pavel Kuliasov</h1>
			 </div>
		  </div>
	   </>
   );
};

export default Perlin;
