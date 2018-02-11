
let THREE = require('./three.js');
let textures = require('./three.js');
function init() {
  var scene = new THREE.Scene();
  //var camera = new THREE.PerspectiveCamera( 65, window.innerWidth/window.innerHeight, 1, 1000);
    var frustumSize = 300
    var aspect = window.innerWidth / window.innerHeight;
      var  camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -2000, 2000 );

    scene.background = new THREE.Color( 0x222222 );
      var spotLight_01 = getSpotlight('rgb(145, 240, 255)', 1);
        spotLight_01.penumbra = 1;
        spotLight_01.angle = Math.PI / 8;
        spotLight_01.distance = 1000;
        //lightHelper = new THREE.SpotLightHelper( spotLight_01 );
        //scene.add( lightHelper );

      var spotLight_02 = getSpotlight('rgb(255, 220, 180)', 1);
        spotLight_02.penumbra = 1;
        spotLight_02.angle = Math.PI / 8;
        spotLight_02.distance = 1000;

        spotLight_01.name = 'spotLight_01';
        spotLight_02.name = 'spotLight_02';





    // RGB arows
    var axesHelper1 = new THREE.AxisHelper( 10 );
    scene.add( axesHelper1 );

    var ambientLight = new THREE.AmbientLight( Math.random() * 0x20 );
    scene.add( ambientLight );

    // Grid
    var gridHelper = new THREE.GridHelper( 1000, 20 );
    scene.add( gridHelper );

      // create geometric objects
      var plane = getPlane(500, 500);
      var sphere = getSphere(1);
      sphere.name = 'sphere';

      var villa = getVilla(scene);

      // add objects to the scene

  //scene.add(sphere);
  scene.add(plane);
  scene.add(spotLight_01);
  scene.add(spotLight_02);




    // // extrusion tests
    // var z = (setWidth() - 1) * 1;
    // pointA = new THREE.Vector3(100, 100, z);
    // pointB = new THREE.Vector3(100, 100, -z);
    //
    // var profile_01 = new THREE.CatmullRomCurve3( [
		// 			pointA, pointB
		// 		] );
    // pointA.name = 'pointA';
    // pointB.name = 'pointB';
    // profile_01.name = 'profile_01';
    //
    //
    // var extrudeSettings = {
		// 			steps			: 100,
		// 			bevelEnabled	: false,
		// 			extrudePath		: profile_01
		// 		};
    //
    // var pts = [], count = 4;
		// 		for ( var i = 0; i < count; i ++ ) {
		// 			var l = 2;
		// 			var a = 2 * i / count * Math.PI;
		// 			pts.push( new THREE.Vector2 ( Math.cos( a ) * l, Math.sin( a ) * l ) );
		// 		}
		// 		var shape = new THREE.Shape( pts );
		// 		var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
		// 		var material = new THREE.MeshLambertMaterial( { color: 0xb00000, wireframe: false } );
    //
    // var extrusion = new THREE.Mesh( geometry, material );
		// 		scene.add( extrusion );
    // console.log( pointA, pointB, profile_01, setWidth() );
  // transform objects
  camera.position.set( 400 , 400, 500);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

    spotLight_01.position.set( -150, -300, 400 );
    spotLight_02.position.set( 150, 300, -300 );

  plane.rotation.x = Math.PI/2;

  sphere.position.y = sphere.geometry.parameters.radius;

  // material adjustments
  var planeMaterial = plane.material;
  planeMaterial.roughness = 0.65;
  planeMaterial.metalness = 0.75;

  var textureLoader = new THREE.TextureLoader();
  var texture = textureLoader.load(getTexture());
  planeMaterial.map = texture;

  var repetition = 6;
  var textures = ['map']// we will add 'bumpMap' and 'roughnessMap'
  textures.forEach((mapName) => {
    planeMaterial[mapName].wrapS = THREE.RepeatWrapping;
    planeMaterial[mapName].wrapT = THREE.RepeatWrapping;
    planeMaterial[mapName].repeat.set(repetition, repetition);
  });
  var sphereMaterial = sphere.material;
  var metalTexture = textureLoader.load(getBumpMap());

  sphereMaterial.bumpMap = metalTexture;
  sphereMaterial.roughnessMap = metalTexture;
  sphereMaterial.bumpScale = 0.01;
  sphereMaterial.roughness = 0.75;
  sphereMaterial.metalness = 0.25;

//  var villaMaterial = villa.material;
//  villMaterial.roughness = 0.65;
//  villeMaterial.metalness = 0.75;

    var renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    document.getElementById('webgl').appendChild(renderer.domElement);
    renderer.setSize(window.innerWidth, window.innerHeight);
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    var winResize = new THREEx.WindowResize(renderer, camera);
    update(renderer, scene, camera);
}

function getVilla(scene) {
  var loader = new THREE.JSONLoader();
  loader.load('models/VVH01.json', function(geo, material) {
      mesh = new THREE.Mesh(geo);
      //mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.75;
      //mesh.translation = THREE.GeometryUtils.center(geo);
      var material = new THREE.MeshStandardMaterial({material});
      var mesh = new THREE.Mesh(geo, material);
      scene.add(mesh);
  });
}

function getSphere(radius) {
  var geo = new THREE.SphereGeometry(radius, 24, 24);
  var material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
  });
  var mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = true;
  return mesh;
}

function getPlane(w, h) {
  var geo = new THREE.PlaneGeometry(w, h);
  var material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });
  var mesh = new THREE.Mesh(geo, material);
  mesh.receiveShadow = true;

  return mesh;
}

function getSpotlight(color, intensity) {
  var light = new THREE.SpotLight(color, intensity);
  light.castShadow = true;
  light.shadow.mapSize.x = 4096;
  light.shadow.mapSize.y = 4096;
  return light;
}
 var controlWidth = document.getElementById("width");
 function setWidth(){
   return controlWidth.value;
    };



 var controlLight = document.getElementById("light");
 function darken(){
   return controlLight.value;
    };
    var controlSpotZ = document.getElementById("spotZ");
function setSpotZ(){
   return controlSpotZ.value;
    };

function update(renderer, scene, camera) {

    // var pointA = scene.getObjectByName('pointA');
    // var pointB = scene.getObjectByName('pointB');
    // var profile_01 = scene.getObjectByName('profile_01');
    // var z = (setWidth() - 1) * 10;
    // pointA = new THREE.Vector3(100, 100, z);
    // pointB = new THREE.Vector3(100, 100, -z);
    //
    // profile_01 = new THREE.CatmullRomCurve3( [
		// 			pointA, pointB
		// 		] );


  var spotLight_01 = scene.getObjectByName('spotLight_01');
    spotLight_01.intensity = (darken() - 1) / 50;
    spotLight_01.position.y = (setSpotZ() - 1) / 1;

  var spotLight_02 = scene.getObjectByName('spotLight_02');
    spotLight_02.intensity = (darken() - 1) / 50;
    spotLight_02.position.y = (setSpotZ() - 1) / 1;
    lightHelper = new THREE.SpotLightHelper( spotLight_02 );
   // scene.add( lightHelper );

    //go
    renderer.render(scene, camera);

    requestAnimationFrame(function() {
       // setWidth();
    //console.log(setWidth());
    update(renderer, scene, camera);
  })
}

init();


getTexture();
getBumpMap();
