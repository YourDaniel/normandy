import React, { Component } from 'react';
import * as THREE from 'three'
import styles from './InteractiveCard.scss';
const OrbitControls = require('three-orbit-controls')(THREE)

export default class InteractiveCard extends Component {
    constructor(props) {
        super(props)
        
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.animate = this.animate.bind(this)
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if (prevProps.image !== this.props.image || prevProps.nation !== this.props.nation) {
            const newTextureImageURL = `public/${this.props.nation}/${this.props.image}`;
            this.cube.material.map = new THREE.TextureLoader().load(newTextureImageURL);
            this.cube.material.needsUpdate = true;
        }
        console.log('prevProps', prevProps, this.props)
   
    }
    
    componentDidMount() {
        const {image, nation} = this.props;
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            70,
            width / height,
            1,
            1000
        )
        camera.position.z = 550;
        const textureImageURL = `public/${nation}/${image}`;
        const texture = new THREE.TextureLoader().load(textureImageURL);
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.BoxGeometry(350, 510, 5)
        const material = new THREE.MeshBasicMaterial({ color: '#ffffff', map: texture })
        const cube = new THREE.Mesh(geometry, material)
        const orbitControls = new OrbitControls(camera);
  
        scene.add(cube)
        renderer.setClearColor('#000000')
        renderer.setSize(width, height)
        
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.material = material
        this.cube = cube
        
        this.mount.appendChild(this.renderer.domElement)
        this.start()
    }
    
    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }
    
    start() {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    
    stop() {
        cancelAnimationFrame(this.frameId)
    }
    
    animate() {

        this.cube.rotation.y += 0.005
        
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    
    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }
    
    render() {
        return (
            <div
                style={{ width: '80rem', height: '80rem' }}
                ref={(mount) => { this.mount = mount }}
            />
        )
    }
}