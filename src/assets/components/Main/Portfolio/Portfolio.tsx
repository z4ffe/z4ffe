import styles from './Portfolio.module.css'
import AnimatedPage from "../AnimatedPage";
import data from '../../../data/portfolio.json'
import Cell from "./Cell/Cell";
import React from "react";


const Portfolio = () => {
   const allCells: Array<any> = data.map((el, id) => (<Cell key={id} data={el}/>))



   return (
       <AnimatedPage>
          <div className={styles.portfolio}>
             {allCells}
          </div>
       </AnimatedPage>
   );
};

export default Portfolio;
