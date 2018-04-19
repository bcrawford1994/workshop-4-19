const container = document.querySelector('#container');
const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x000 );

//camera
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const FOV= 45
const ASPECT = WIDTH / HEIGHT
const NEAR = 0.1
const FAR = 10000

//instantiate camera
const camera = new THREE.PerspectiveCamera(FOV, ASPECT, NEAR, FAR)

//set camera location
camera.position.set( 0, 0, 500 )

//attach camera to Scene
scene.add(camera)

//renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(WIDTH, HEIGHT)

container.appendChild(renderer.domElement)

//Globe
const RADIUS = 200 //sphere attributes
const SEGMENTS = 50
const RINGS = 50

const globe = new THREE.Group()
scene.add(globe)

//loader
var loader = new THREE.TextureLoader()

loader.load('https://eoimages.gsfc.nasa.gov/images/imagerecords/57000/57735/land_ocean_ice_cloud_2048.jpg', function ( texture ) {
    //create the sphere
    var sphere = new THREE.SphereGeometry( RADIUS, SEGMENTS, RINGS )

    //map the texture to the material. Read more about materials in three.js docs
    var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } )

    //create a new mesh with sphere geometry.
    var mesh = new THREE.Mesh( sphere, material )

    //add mesh to globe group
    globe.add(mesh)
} )

//position Globe
globe.position.z = -300

//lighting
const pointLight = new THREE.PointLight(0xFFFFFF)

//position lighting
pointLight.position.x = 10
pointLight.position.y = 50
pointLight.position.z = 400

scene.add(pointLight)
