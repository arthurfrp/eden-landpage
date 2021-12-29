import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import gsap from 'gsap';

let camera, scene, renderer;
const loader = new GLTFLoader();

export function init() {

	camera = new THREE.PerspectiveCamera( 5, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.set(1, 1, 2); // position camera
    camera.lookAt(0, 0, 0);       // have camera look at 0,0,0

	scene = new THREE.Scene();

    const light = new THREE.AmbientLight( 0xffffff, 3 );
    scene.add( light );

    
    loader.load("/fantasy_land_with_river_15km/scene.gltf", (gltf) => {
        let model = gltf.scene
        model.scale.set(.65, .65, .65)
        
        gsap.to(model.rotation, {
            delay: 1,
            // x: 1,
            y: 2,
            // z: 1.6,
            duration: 40,
        })

        gsap.to(model.rotation, {
            delay: 41,
            // x: 1,
            y: 3,
            // z: 1.6,
            duration: 60,
        })

        gsap.to(model.scale, {
            delay: 5,
            z: 1,
            x: 1,
            y: 1,
            duration: 5,
        })

        gsap.to(model.scale, {
            delay: 10,
            z: 2,
            x: 2,
            y: 2,
            duration: 5,
        })

        gsap.to(model.scale, {
            delay: 15,
            z: 0.72,
            x: 0.72,
            y: 0.72,
            duration: 10,
        })

        gsap.to(model.scale, {
            delay: 25,
            z: 2,
            x: 2,
            y: 2,
            duration: 10,
        })

        scene.add(model)
    })


	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animation );
    renderer.setClearColor( 0x272727, 1 );
	document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    });
}

function animation() {
	renderer.render( scene, camera );

}