import * as THREE from 'three';

			import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
			import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
			import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

			let camera, scene, renderer;

			init();
			render();

			function init() {

				// const container = document.createElement( 'div' );
				// document.body.appendChild( container );
				// container.classList.add("unknown");
                const container = document.querySelector(".my-name");
                let innerWidthF = window.innerWidth/100;
                innerWidthF = innerWidthF * 80;

				camera = new THREE.PerspectiveCamera( 45, innerWidthF / 500, 0.25, 20 );
				camera.position.set( 3, 3, 2 );

				scene = new THREE.Scene();
				const pointLight = new THREE.PointLight(0xffffff);
				pointLight.position.set(1, 1, 1);

				const ambientLight = new THREE.PointLight(0xffffff);
				ambientLight.position.set(-1, -1, -1);
				scene.add(pointLight, ambientLight);

				new RGBELoader()
					.load( 'Untitled-3.hdr', function ( texture ) {

						texture.mapping = THREE.EquirectangularReflectionMapping;

						scene.background = texture;
						scene.environment = texture;

						render();

						

						const loader = new GLTFLoader();
						loader.load( 'Untitled.glb', function ( gltf ) {

							scene.add( gltf.scene );

							render();

						} );

					} );

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( innerWidthF, 500 );
				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				renderer.toneMappingExposure = 1;
				container.appendChild( renderer.domElement );

				const controls = new OrbitControls( camera, renderer.domElement );
				controls.addEventListener( 'change', render ); // use if there is no animation loop
				controls.minDistance = 2;
				controls.maxDistance = 10;
				controls.target.set( 0, 0, - 0.2 );
				controls.update();

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {
                let innerWidthF = window.innerWidth/100;
                innerWidthF = innerWidthF * 80;

				camera.aspect = innerWidthF / 500;
				camera.updateProjectionMatrix();

				renderer.setSize( innerWidthF, 500 );

				render();

			}

			

			function render() {

				renderer.render( scene, camera );

			}
