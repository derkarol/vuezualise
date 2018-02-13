const THREE = require('./three.js');
class sphere {
  constructor(){

    function getSphere(radius) {
        this.geometry = new THREE.SphereGeometry(radius);
        this.material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
        });
        this.sphere = new THREE.Mesh(geometry, material);
        return sphere;
    }

    let sphere = getSphere(1);
  }
}
