interface IShaderMaterialOptions {
   wireframe: boolean
   uniforms: {
	  time: { type: string, value: number },
	  pointscale: { type: string, value: number },
	  decay: { type: string, value: number },
	  complex: { type: string, value: number },
	  waves: { type: string, value: number },
	  eqcolor: { type: string, value: number },
	  fragment: { type: string, value: boolean },
	  redhell: { type: string, value: boolean }
   }
}


interface IAnimationOptions {
   perlin: {
	  vel: number
	  speed: number
	  perlins: number
	  decay: number
	  complex: number
	  waves: number
	  eqcolor: number
	  fragment: boolean
	  redhell: boolean
   },
   spin: {
	  sinVel: number
	  ampVel: number
   }
}

export {
   IShaderMaterialOptions,
   IAnimationOptions
}
