import * as THREE from 'three';
import OrbitControls from './OrbitControls';
// extrusion tests
export function extrusion(z) {
  // let z = 100;
  let pointA = new THREE.Vector3(10, 10, z);
  let pointB = new THREE.Vector3(10, 10, 10);

  let profile_01 = new THREE.CatmullRomCurve3( [
    pointA, pointB
  ] );
console.log(pointA);
  let extrudeSettings = {
    steps			: 1,
    bevelEnabled	: false,
    extrudePath		: profile_01
  };

  let pts = [], count = 4;
  pts.name = 'pts';
  for ( let i = 0; i < count; i ++ ) {
    let l = 2;
    let a = 2 * i / count * Math.PI;
    pts.push( new THREE.Vector2 ( Math.cos( a ) * l, Math.sin( a ) * l ) );
  }
  let shape = new THREE.Shape( pts );
  //     shape.name = 'shape';
  let geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
  //     geometry.name = 'geometry';
  let material = new THREE.MeshLambertMaterial( { color: 0xb00000, wireframe: false } );
  material.name = 'material';
  let extrusion = new THREE.Mesh( geometry, material );
  return extrusion;
};
