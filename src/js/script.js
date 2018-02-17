import * as THREE from 'three';
// import THREE from './three';
// let THREE = require('three');
import {extrusion} from './extrusion';

function init() {
  const scene = new THREE.Scene();
  // let camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 1, 1000);
  let frustumSize = 50
  let aspect = window.innerWidth / window.innerHeight;
  let  camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, -2000, 2000 );

  scene.background = new THREE.Color('rgb(245, 200, 255)' );
  let spotLight_01 = getSpotlight('rgb(145, 200, 255)', 1);
  let spotLight_02 = getSpotlight('rgb(255, 220, 180)', 1);
//ok thi is whrere i stoped again it converts value f input to string in v3 it must be nuber
  let numPoints = 100;
  let pointC = getRandomInt(5);// atamt to move - transform Vector3
  let start = new THREE.Vector3(-20, 0, 0);
  let startTr = start.setZ(pointC);
  let middle = new THREE.Vector3(0, 30, 0);
  let end = new THREE.Vector3(20, 0, 0);

  let curveQuad = new THREE.QuadraticBezierCurve3(start, middle, end);
  let tube = new THREE.TubeGeometry(
    curveQuad, numPoints, 2, 20, false) ;
    let curve = new THREE.Mesh (tube, new THREE.MeshStandardMaterial);
    // scene.add(curve);

  spotLight_01.name = 'spotLight_01';
  spotLight_02.name = 'spotLight_02';

  // create geometric objects
  let plane = getPlane(50, 50);
  let sphere = getSphere(1);
  sphere.name = 'sphere';

  let villa = getVilla(scene);
  let extrusion_01 = new extrusion(0);
  extrusion_01.name = 'extrusion_01';
  console.log(extrusion_01);


  // add objects to the scene
  // RGB arows
  let axesHelper1 = new THREE.AxesHelper( 10 );
  scene.add( axesHelper1 );
  //scene.add(sphere);
  scene.add(sphere);
  scene.add(plane);
  scene.add(extrusion_01);
  scene.add(spotLight_01);
  scene.add(spotLight_02);

  // transform objects
  camera.position.x = 0;
  camera.position.y = 6;
  camera.position.z = 6;
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  spotLight_01.position.x = 6;
  spotLight_01.position.y = 8;
  spotLight_01.position.z = -20;

  spotLight_02.position.x = -12;
  spotLight_02.position.y = 6;
  spotLight_02.position.z = -10;

  plane.rotation.x = Math.PI/2;

  sphere.position.y = sphere.geometry.parameters.radius;

  // material adjustments
  let planeMaterial = plane.material;
  planeMaterial.roughness = 0.65;
  planeMaterial.metalness = 0.75;

  let textureLoader = new THREE.TextureLoader();
  let texture = textureLoader.load(getTexture());
  planeMaterial.map = texture;

  let repetition = 6;
  let textures = ['map']// we will add 'bumpMap' and 'roughnessMap'
  textures.forEach((mapName) => {
    planeMaterial[mapName].wrapS = THREE.RepeatWrapping;
    planeMaterial[mapName].wrapT = THREE.RepeatWrapping;
    planeMaterial[mapName].repeat.set(repetition, repetition);
  });
  let sphereMaterial = sphere.material;
  let metalTexture = textureLoader.load(getBumpMap());

  sphereMaterial.bumpMap = metalTexture;
  sphereMaterial.roughnessMap = metalTexture;
  sphereMaterial.bumpScale = 0.01;
  sphereMaterial.roughness = 0.75;
  sphereMaterial.metalness = 0.25;

//  let villaMaterial = villa.material;
//  villMaterial.roughness = 0.65;
//  villeMaterial.metalness = 0.75;

  let renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  document.getElementById('webgl').appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  let winResize = new THREEx.WindowResize(renderer, camera);
  update(renderer, scene, camera);

  let check = document.getElementById('length');
  check.addEventListener('click', showChange);
  function showChange() {
    console.log(extrusion_01.geometry.parameters.options.extrudePath.points[0]);
    console.log(extrusion_01);
    console.log(extrusion_01.geometry.vertices[0].z);
  }
}
//init end

function getVilla(scene) {
  let loader = new THREE.JSONLoader();
  loader.load('models/VVH01.json', function(geo) {
      mesh = new THREE.Mesh(geo);
//      mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.75;
      //mesh.translation = THREE.GeometryUtils.center(geo);
      let material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
  });
      let mesh = new THREE.Mesh(geo, material);
      scene.add(mesh);
  });
}

function getSphere(radius) {
  let geo = new THREE.SphereGeometry(radius, 24, 24);
  let material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
  });
  let mesh = new THREE.Mesh(geo, material);
  mesh.castShadow = true;

  return mesh;
}

function getPlane(w, h) {
  let geo = new THREE.PlaneGeometry(w, h);
  let material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });
  let mesh = new THREE.Mesh(geo, material);
  mesh.receiveShadow = true;

  return mesh;
}

function getSpotlight(color, intensity) {
  let light = new THREE.SpotLight(color, intensity);
  light.castShadow = true;

  light.shadow.mapSize.x = 4096;
  light.shadow.mapSize.y = 4096;

  return light;
}

 function darken(){
   let control = document.getElementById("light");
   return control.value;
  }
  function setValueOfLength(){
    let control = document.getElementById("length");
    return control.value;
   }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function update(renderer, scene, camera) {
  let spotLight_01 = scene.getObjectByName('spotLight_01');
  spotLight_01.intensity = (darken() - 1.5) * 0.015;
  spotLight_01.intensity = spotLight_01.intensity;

  let spotLight_02 = scene.getObjectByName('spotLight_02');
  spotLight_02.intensity = (darken() - 1.5) * 0.015;
  spotLight_02.intensity = Math.abs(spotLight_02.intensity);

  let extrusion_01 = scene.getObjectByName('extrusion_01');
  let z = setValueOfLength()*1-100;
  // extrusion_01.geometry.parameters.options.extrudePath.points[0] = new THREE.Vector3(z,z,z);
  // extrusion_01.geometry.parameters.options.extrudePath.points[1] = new THREE.Vector3(z,z,z);
  // extrusion_01.geometry.parameters.options.extrudePath.points[0].verticesNeedUpdate = true;
    // extrusion_01.geometry.parameters.options.extrudePath.points[1].verticesNeedUpdate = true;

  extrusion_01.geometry.vertices[0].z = z;
  extrusion_01.geometry.vertices[1].z = z;
  extrusion_01.geometry.vertices[2].z = z;
  extrusion_01.geometry.vertices[3].z = z;
  extrusion_01.geometry.vertices[4].z = -z;
  extrusion_01.geometry.vertices[5].z = -z;
  extrusion_01.geometry.vertices[6].z = -z;
  extrusion_01.geometry.vertices[7].z = -z;
  extrusion_01.geometry.verticesNeedUpdate = true;

  renderer.render(scene, camera);

  requestAnimationFrame(function() {
    update(renderer, scene, camera);
  })
}


init();
