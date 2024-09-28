import * as THREE from './three.js-dev/three.js-dev/build/three.module.js';
import { OrbitControls } from './three.js-dev/three.js-dev/examples/jsm/controls/OrbitControls.js';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Set up OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // for smooth controls
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Create a room (a simple box with walls and floor)
const room = new THREE.Group();

// Floor
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = - Math.PI / 2;
room.add(floor);

// Walls
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xeeeeee });
const wall1 = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMaterial);
wall1.position.set(0, 5, -10);
room.add(wall1);
const wall2 = wall1.clone();
wall2.rotation.y = Math.PI / 2;
wall2.position.set(-10, 5, 0);
room.add(wall2);
const wall3 = wall1.clone();
wall3.position.set(0, 5, 10);
room.add(wall3);
const wall4 = wall2.clone();
wall4.position.set(10, 5, 0);
room.add(wall4);

scene.add(room);

// Function to create a random 3D rectangle inside the room
function createRandomRectangle() {
    const width = Math.random() * 2 + 0.5;
    const height = Math.random() * 2 + 0.5;
    const depth = Math.random() * 2 + 0.5;
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const color = new THREE.Color(Math.random(), Math.random(), Math.random());
    const material = new THREE.MeshStandardMaterial({ color: color });
    const rectangle = new THREE.Mesh(geometry, material);

    // Random position within the room
    rectangle.position.x = Math.random() * 18 - 9;
    rectangle.position.y = Math.random() * 8 - 4;
    rectangle.position.z = Math.random() * 18 - 9;

    // Add label
    const label = createLabel(color.getStyle());
    label.position.copy(rectangle.position);
    label.position.y += height / 2 + 0.5; // Adjust the label position above the rectangle
    scene.add(label);

    return rectangle;
}

// Function to create a label
function createLabel(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'Bold 20px Arial';
    context.fillStyle = 'white';
    context.fillText(text, 0, 20);

    const texture = new THREE.CanvasTexture(canvas);
    const labelMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(labelMaterial);
    sprite.scale.set(2, 1, 1);
    return sprite;
}

// Add a few random rectangles to the scene
for (let i = 0; i < 5; i++) {
    scene.add(createRandomRectangle());
}

// Set the camera position
camera.position.set(0, 10, 30);
camera.lookAt(0, 0, 0);

// Add lights
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 0).normalize();
scene.add(directionalLight);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
    renderer.render(scene, camera);
}

animate();

// Adjust the scene on window resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
