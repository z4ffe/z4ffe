import React, {useEffect, useRef} from 'react';
import init, {clearCanvas} from '../../../utils/perlin.js'
import './perlin.scss'


const Perlin = () => {
   const canvas: any = useRef()

   useEffect(() => {
      init()
      return () => clearCanvas()
   }, [])

   const handleMouseMove = (e: any) => {
      canvas.current.style.left = `${(e.clientY) / 1700}rem`
      canvas.current.style.top = `${(e.clientX) / 1700}rem`
   }

   useEffect(() => {
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
         window.removeEventListener('mousemove', handleMouseMove)
      }
   }, [])

   return (
       <>
          <div id="container" ref={canvas}>
             <div className="header-container">
                <h2>Full-Stack Developer</h2>
                <h1>Pavel Kuliasov</h1>
             </div>
          </div>
       </>
   );
};

export default Perlin;
