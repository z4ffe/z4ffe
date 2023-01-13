import React from 'react';
import styles from "./Cell.module.scss"

interface IData {
   data: {
      title: string
      desc: string,
      img: string,
      github: string,
      pages: string,
      html: boolean,
      sass: boolean,
      bootstrap: boolean,
      js: boolean,
      react: boolean,
      node: boolean,
      db: boolean
   }
}

const Cell: React.FC<IData> = (props) => {
   const wrapperOpacityOn = (e: React.SyntheticEvent<HTMLDivElement>, img: string) => {
      e.currentTarget.style.opacity = '1'
      e.currentTarget.style.backgroundImage = `linear-gradient(to bottom, rgba(16, 20, 110, 0.8), rgba(204, 45, 66, 0.2)), url(${img})`
      e.currentTarget.style.backgroundSize = 'cover'
   }
   const wrapperOpacityOff = (e: React.SyntheticEvent<HTMLDivElement>) => e.currentTarget.style.opacity = '0'

   return (
       <>
          <a href={props.data.pages} target="_blank">
             <div className={styles.cell}
                  style={{backgroundImage: `url(${props.data.img})`}}>
                <div className={styles.cell__wrapper} onMouseOver={(e: React.SyntheticEvent<HTMLDivElement>) => wrapperOpacityOn(e, props.data.img)}
                     onMouseLeave={(e: React.SyntheticEvent<HTMLDivElement>) => wrapperOpacityOff(e)}>
                   <h2 className={styles.cell__title}>{props.data.title}</h2>
                   <div className={styles.cell__links}>
                      <div className={styles.stack}>
                         {props.data.html && <i className="fa-brands fa-html5 fa-xl"></i>}
                         {props.data.sass && <i className="fa-brands fa-sass fa-xl"></i>}
                         {props.data.bootstrap && <i className="fa-brands fa-bootstrap fa-xl"></i>}
                         {props.data.js && <i className="fa-brands fa-js fa-xl"></i>}
                         {props.data.react && <i className="fa-brands fa-react fa-xl"></i>}
                         {props.data.node && <i className="fa-brands fa-node-js fa-xl"></i>}
                         {props.data.db && <i className="fa-solid fa-database fa-xl"></i>}
                      </div>
                      <div className={styles.links}><a href={props.data.github} target="_blank"><i
                          className="fa-brands fa-github fa-xl"></i></a>
                         <a href={props.data.pages} target="_blank"><i
                             className="fa-solid fa-arrow-up-right-from-square fa-xl"></i></a></div>
                   </div>
                </div>
             </div>
          </a>
       </>
   );
};

export default Cell;
