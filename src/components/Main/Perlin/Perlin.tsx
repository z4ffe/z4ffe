import React, {RefObject, useEffect, useRef} from 'react';
import {useMediaQuery} from 'react-responsive';
import init, {clearCanvas} from '../../../utils/perlin'
import styles from './Perlin.module.scss'


const Perlin: React.FC = (): JSX.Element => {
   const canvas: RefObject<HTMLDivElement> = useRef(null)
   const mobile: boolean = useMediaQuery({query: '(max-width: 767px)'})

   const handleMouseMove = (event: MouseEvent) => {
	  if (canvas.current && !mobile) {
		 canvas.current.style.left = `${(event.clientY) / 2000}rem`
		 canvas.current.style.top = `${(event.clientX) / 2000}rem`
	  }
   }

   useEffect(() => {
	  init(canvas)
	  return (): void => {
		 clearCanvas()
	  }
   }, [])


   useEffect(() => {
	  window.addEventListener('mousemove', handleMouseMove)
	  return (): void => {
		 window.removeEventListener('mousemove', handleMouseMove)
	  }
   }, [canvas, !mobile])

   return (
	   <div className={styles.container} ref={canvas}>
		  <div className={styles.header__container}>
			 <h2 className={styles.header__desc}>Full-Stack Developer</h2>
			 <h1 className={styles.header}>Pavel Kuliasov</h1>
		  </div>
	   </div>
   );
};

export default Perlin;
