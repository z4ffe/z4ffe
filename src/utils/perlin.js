import {vertexShader} from "./vertexShader.js";
import {fragmentShader} from "./fragmentShader.js";

function init() {
   createWorld();
   createPrimitive();
   animation();
}

const Theme = {_darkred: 0x100C31}


let scene, camera, renderer, container;
let start = Date.now();
let _width, _height;

function createWorld() {
   if (window.innerWidth < 767) {
	  _width = window.innerWidth;
	  _height = window.innerHeight / 1.2;
   } else {
	  _width = window.innerWidth / 2.5;
	  _height = window.innerHeight / 1.5;
   }
   scene = new THREE.Scene();
   scene.background = new THREE.Color(Theme._darkred);
   camera = new THREE.PerspectiveCamera(55, _width / _height, 1, 1000);
   camera.position.z = 12;
   renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
   renderer.setSize(_width, _height);
   container = document.getElementById("container");
   container.appendChild(renderer.domElement);
   window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
   if (window.innerWidth < 767) {
	  _width = window.innerWidth;
	  _height = window.innerHeight / 1.2;
   } else {
	  _width = window.innerWidth / 2.5;
	  _height = window.innerHeight / 1.5;
   }
   renderer.setSize(_width, _height);
   camera.aspect = _width / _height;
   camera.updateProjectionMatrix();
}


let mat;
const primitiveElement = function () {
   this.mesh = new THREE.Object3D();
   mat = new THREE.ShaderMaterial({
	  wireframe: false,
	  //fog: true,
	  uniforms: {
		 time: {type: "f", value: 0.0},
		 pointscale: {type: "f", value: 0.0},
		 decay: {type: "f", value: 0.0},
		 complex: {type: "f", value: 0.0},
		 waves: {type: "f", value: 0.0},
		 eqcolor: {type: "f", value: 0.0},
		 fragment: {type: "i", value: true},
		 redhell: {type: "i", value: true}
	  },
	  vertexShader: vertexShader,
	  fragmentShader: fragmentShader
   });
   let geo = new THREE.IcosahedronBufferGeometry(3, 7);
   let mesh = new THREE.Points(geo, mat);

   //---
   this.mesh.add(mesh);
}

let _primitive;

function createPrimitive() {
   _primitive = new primitiveElement();
   scene.add(_primitive.mesh);
}


const options = {
   perlin: {
	  vel: 0.002,
	  speed: 0.0002,
	  perlins: 1.0,
	  decay: 0.10,
	  complex: 0.30,
	  waves: 20.0,
	  eqcolor: 11.0,
	  fragment: true,
	  redhell: true
   },
   spin: {
	  sinVel: 0.0,
	  ampVel: 80.0,
   }
}

function animation() {
   requestAnimationFrame(animation);
   let performance = Date.now() * 0.003;

   _primitive.mesh.rotation.y += options.perlin.vel;
   _primitive.mesh.rotation.x = (Math.sin(performance * options.spin.sinVel) * options.spin.ampVel) * Math.PI / 180;
   mat.uniforms['time'].value = options.perlin.speed * (Date.now() - start);
   mat.uniforms['pointscale'].value = options.perlin.perlins;
   mat.uniforms['decay'].value = options.perlin.decay;
   mat.uniforms['complex'].value = options.perlin.complex;
   mat.uniforms['waves'].value = options.perlin.waves;
   mat.uniforms['eqcolor'].value = options.perlin.eqcolor;
   mat.uniforms['fragment'].value = options.perlin.fragment;
   mat.uniforms['redhell'].value = options.perlin.redhell;
   camera.lookAt(scene.position);
   renderer.render(scene, camera);
}

export function clearCanvas() {
   renderer.dispose()
   renderer.forceContextLoss()
}

export default init
