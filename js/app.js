import * as THREE from '../node_modules/three';

const w = window.innerWidth;
const h = window.innerHeight


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, w / h, 0.1, 1000 );
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setSize( w, h );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshStandardMaterial( {
	 color: 0xffffff
	 } );

const light = new THREE.DirectionalLight('blue', 10)
light.position.set(10, 10, 10)

const cube = new THREE.Mesh( geometry, material, light );
scene.add( cube );


const loader = new THREE.TextureLoader();
loader.crossOrigin = ""



function animate() {
	requestAnimationFrame( animate );

	cube.rotation.y += 0.01;	

	renderer.render( scene, camera );
    
}

animate();