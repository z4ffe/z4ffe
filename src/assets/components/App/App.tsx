import styles from './App.module.css'
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "../Main/AboutMe/AboutMe";
import CV from "../Main/CV/CV";
import TechStack from "../Main/TechStack/TechStack";
import Portfolio from "../Main/Portfolio/Portfolio";
import React from "react";

const App = () => {


   return (
       <BrowserRouter>
          <div className={styles.wrapper}>
             <div className={styles.menu}>
                <Header/>
                <Navigation/>
                <Footer/>
             </div>
             <div className={styles.content}>
                <Routes>
                   <Route path="*" index element={<Main/>}></Route>
                   <Route path="about-me" element={<AboutMe/>}></Route>
                   <Route path="CV" element={<CV/>}></Route>
                   <Route path="portfolio" element={<Portfolio/>}></Route>
                   <Route path="stack" element={<TechStack/>}></Route>
                </Routes>
             </div>
          </div>
       </BrowserRouter>

   );
};

export default App;
