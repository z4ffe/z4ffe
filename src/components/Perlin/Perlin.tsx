import {RefObject, useEffect, useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import {CONSTANTS} from '../../constants/constants'
import styles from './Perlin.module.scss'
import init, {clearCanvas} from './perlinCanvas'


export const Perlin = () => {
	const canvas: RefObject<HTMLDivElement> = useRef(null)
	const isMobile: boolean = useMediaQuery({query: '(max-width: 767px)'})

	const handleMouseMove = (event: MouseEvent) => {
		if (canvas.current && !isMobile) {
			canvas.current.style.left = `${(event.clientY) / 2000}rem`
			canvas.current.style.top = `${(event.clientX) / 2000}rem`
		}
	}

	useEffect(() => {
		init(canvas)
		return () => {
			clearCanvas()
		}
	}, [])


	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [canvas, !isMobile])

	return (
		<div className={styles.container} ref={canvas}>
			<div className={styles.name__container}>
				<h2 className={styles.name__desc}>{CONSTANTS.POSITION}</h2>
				<h1 className={styles.name}>{CONSTANTS.FULL_NAME}</h1>
			</div>
		</div>
	)
}
