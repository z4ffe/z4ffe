import styles from './Portfolio.module.scss'
import AnimatedPage from "../AnimatedPage";
import data from '../../../assets/data/portfolio.json'
import Cell from "./Cell/Cell";
import React from "react";

const Portfolio: React.FC = (): JSX.Element => {
   const allCells: Array<JSX.Element> = data.map((el, id) => (<Cell key={id} data={el}/>))

   return (
       <AnimatedPage>
          <div className={styles.portfolio}>
             {allCells}
          </div>
       </AnimatedPage>
   );
};

export default Portfolio;
