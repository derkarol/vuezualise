function getSphere(radius) {
    var geometry = new THREE.SphereGeometry(radius);
    var material = new THREE.MeshBasicMaterial({
        color: 0x00ff00
    });
    var sphere = new THREE.Mesh(geometry, material);
    return sphere;
}

var sphere = getSphere(1);
