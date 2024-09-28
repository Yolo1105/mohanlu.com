// Scene, Camera, and Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ground
const groundGeometry = new THREE.PlaneGeometry(20, 20);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = - Math.PI / 2;
scene.add(ground);

// Walls
const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const wallThickness = 1;
const wallHeight = 5;
const wallLength = 20;

// Front Wall
const frontWallGeometry = new THREE.PlaneGeometry(wallLength, wallHeight);
const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
frontWall.position.z = -wallLength / 2;
frontWall.position.y = wallHeight / 2;
scene.add(frontWall);

// Back Wall
const backWallGeometry = new THREE.PlaneGeometry(wallLength, wallHeight);
const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
backWall.position.z = wallLength / 2;
backWall.position.y = wallHeight / 2;
backWall.rotation.y = Math.PI;
scene.add(backWall);

// Left Wall
const leftWallGeometry = new THREE.PlaneGeometry(wallLength, wallHeight);
const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWall.position.x = -wallLength / 2;
leftWall.position.y = wallHeight / 2;
leftWall.rotation.y = Math.PI / 2;
scene.add(leftWall);

// Right Wall
const rightWallGeometry = new THREE.PlaneGeometry(wallLength, wallHeight);
const rightWall = new THREE.Mesh(rightWallGeometry, wallMaterial);
rightWall.position.x = wallLength / 2;
rightWall.position.y = wallHeight / 2;
rightWall.rotation.y = -Math.PI / 2;
scene.add(rightWall);

// Ceiling
const ceilingGeometry = new THREE.PlaneGeometry(wallLength, wallLength);
const ceilingMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
ceiling.position.y = wallHeight;
ceiling.rotation.x = Math.PI / 2;
scene.add(ceiling);

// Camera Position
camera.position.set(0, wallHeight / 2, wallLength);

// Camera Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, wallHeight / 2, 0);
controls.update();

// Render Loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});