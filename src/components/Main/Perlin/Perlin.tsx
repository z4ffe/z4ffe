import React, {useEffect} from 'react';
import init from '../../../utils/perlin.js'
import './perlin.scss'
// @ts-ignore
import {vertexShader} from "../../../utils/vertexShader";
// @ts-ignore
import {fragmentShader} from "../../../utils/fragmentShader";


const Perlin = () => {
   useEffect(() => {
      init()
   }, [])

   return (
       <>
          <div id="container">
             <div className="header-container">
                <h2>Full-Stack Developer</h2>
                <h1>Pavel Kuliasov</h1>
             </div>
          </div>
       </>
   );
};

export default Perlin;
