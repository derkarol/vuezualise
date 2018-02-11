module.exports = {
	const THREE = require('./three.js');

	function getSphere(radius) {
	    let geometry = new THREE.SphereGeometry(radius);
	    let material = new THREE.MeshBasicMaterial({
	        color: 0x00ff00,
	    });
	    let sphere = new THREE.Mesh(geometry, material);
	    return sphere;
	}

	let sphere = getSphere(1);
};
