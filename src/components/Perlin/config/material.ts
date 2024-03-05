import {fragmentShader} from '../shaders/fragmentShader'
import {vertexShader} from '../shaders/vertexShader'

export const material = {
	wireframe: false,
	uniforms: {
		time: {type: 'f', value: 0.0},
		pointscale: {type: 'f', value: 0.0},
		decay: {type: 'f', value: 0.0},
		complex: {type: 'f', value: 0.0},
		waves: {type: 'f', value: 0.0},
		eqcolor: {type: 'f', value: 0.0},
		fragment: {type: 'i', value: true},
		redhell: {type: 'i', value: true}
	},
	vertexShader: vertexShader,
	fragmentShader: fragmentShader
}