import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {AboutMe} from '../pages/AboutMe/AboutMe'
import {CV} from '../pages/CV/CV'
import {Home} from '../pages/Home/Home'
import {Portfolio} from '../pages/Portfolio/Portfolio'
import {TechStack} from '../pages/TechStack/TechStack'

export const Router = () => {
	return (
		<Routes>
			<Route path="/" index element={<Home/>}></Route>
			<Route path="*" index element={<Home/>}></Route>
			<Route path="about" element={<AboutMe/>}></Route>
			<Route path="CV" element={<CV/>}></Route>
			<Route path="portfolio" element={<Portfolio/>}></Route>
			<Route path="stack" element={<TechStack/>}></Route>
		</Routes>
	)
}