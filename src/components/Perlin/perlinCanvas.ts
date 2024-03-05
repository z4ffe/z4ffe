import {RefObject} from 'react'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {material} from './config/material'
import {options} from './config/options'

function init(canvas: RefObject<HTMLDivElement>) {
	createWorld(canvas)
	createPrimitive()
	animation()
}

const background: number = 0x100C31
const mobileWidth = 767

const start: number = Date.now()
let scene: any, camera: any, renderer: any, controls
let _width: number, _height: number

function createWorld(canvas: RefObject<HTMLDivElement>) {
	if (window.innerWidth < mobileWidth) {
		_width = window.innerWidth
		_height = window.innerHeight / 1.2
	} else {
		_width = window.innerWidth / 2.5
		_height = window.innerHeight / 1.5
	}
	scene = new THREE.Scene()
	scene.background = new THREE.Color(background)
	camera = new THREE.PerspectiveCamera(55, _width / _height, 1, 1000)
	camera.position.z = 12
	renderer = new THREE.WebGLRenderer({antialias: true, alpha: false})
	renderer.setPixelRatio(1.4)
	controls = new OrbitControls(camera, renderer.domElement)
	controls.enableZoom = false
	renderer.setSize(_width, _height)
	if (canvas.current) canvas.current.appendChild(renderer.domElement)
	window.addEventListener('resize', onWindowResize, false)
}

function onWindowResize() {
	if (window.innerWidth < mobileWidth) {
		_width = window.innerWidth
		_height = window.innerHeight / 1.2
	} else {
		_width = window.innerWidth / 2.5
		_height = window.innerHeight / 1.5
	}
	renderer.setSize(_width, _height)
	camera.aspect = _width / _height
	camera.updateProjectionMatrix()
}

let mat: any
const primitiveElement = function (this: any) {
	this.mesh = new THREE.Object3D()
	mat = new THREE.ShaderMaterial(material)
	const geo = new THREE.IcosahedronBufferGeometry(3, 7)
	const mesh = new THREE.Points(geo, mat)
	this.mesh.add(mesh)
}

let _primitive: any

function createPrimitive() {
	// @ts-ignore
	_primitive = new primitiveElement()
	scene.add(_primitive.mesh)
}

function animation() {
	requestAnimationFrame(animation)
	const performance = Date.now() * 0.003

	_primitive.mesh.rotation.y += options.perlin.vel
	_primitive.mesh.rotation.x = (Math.sin(performance * options.spin.sinVel) * options.spin.ampVel) * Math.PI / 180
	mat.uniforms['time'].value = options.perlin.speed * (Date.now() - start)
	mat.uniforms['pointscale'].value = options.perlin.perlins
	mat.uniforms['decay'].value = options.perlin.decay
	mat.uniforms['complex'].value = options.perlin.complex
	mat.uniforms['waves'].value = options.perlin.waves
	mat.uniforms['eqcolor'].value = options.perlin.eqcolor
	mat.uniforms['fragment'].value = options.perlin.fragment
	mat.uniforms['redhell'].value = options.perlin.redhell
	camera.lookAt(scene.position)
	renderer.render(scene, camera)
}

export function clearCanvas() {
	renderer.dispose()
	renderer.forceContextLoss()
}

export default init

