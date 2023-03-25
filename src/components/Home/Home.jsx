import React, { useEffect } from 'react'
import './Home.css'
import * as THREE from 'three'
import moonImage from '../../image/moon.jpg'
import venusImage from '../../image/venus.jpg'
import spaceImage from '../../image/space.png'
import { Typography } from "@mui/material"
import TimeLine from '../TimeLine/TimeLine'

const Home = () => {

  useEffect(() => {

    const textureLoader = new THREE.TextureLoader()
    const moonTexture = textureLoader.load(moonImage)
    const venusTexture = textureLoader.load(venusImage)
    const spaceTexture = textureLoader.load(spaceImage)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 1000);
    const canvas = document.querySelector('.homeCanvas')
    camera.position.set(4, 4, 8)
    const renderer = new THREE.WebGLRenderer({ canvas })

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64)
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture })
    const moon = new THREE.Mesh(moonGeometry, moonMaterial)

    //for venus 

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64)
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture })
    const venus = new THREE.Mesh(venusGeometry, venusMaterial)
    venus.position.set(8, 5, 5)


    const pointLight = new THREE.PointLight(0xffffff, 1)
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1)
    pointLight.position.set(8, 5, 5)
    pointLight2.position.set(-8, -5, -5)

    scene.add(venus)
    scene.add(moon)
    scene.add(pointLight)
    scene.add(pointLight2)
    scene.background = spaceTexture

    window.addEventListener("mousemove", (e) => {
      //for change of x coordinate half part  //left upper side
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x -= 0.01
        moon.rotation.y += 0.01
        venus.rotation.y += 0.03
        venus.rotation.x -= 0.02
      }
      //for changing of x coordinate remaining half part //right upper side
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= 0.01
        moon.rotation.y -= 0.01
        venus.rotation.y -= 0.03
        venus.rotation.x -= 0.02
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= 0.01
        moon.rotation.y += 0.01
        venus.rotation.y -= 0.03
        venus.rotation.x += 0.02
      }

      if (e.clientX <= window.innerHeight / 2) {
        moon.rotation.x -= 0.01
        moon.rotation.y -= 0.01
        venus.rotation.y -= 0.03
        venus.rotation.x -= 0.02
      }

    })

    //for animation to be run again and again we use function as recursion
    const animate = () => {
      requestAnimationFrame(animate)
      moon.rotation.y += 0.01
      venus.rotation.y += 0.02
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)

    }
    animate()
  }, [])


  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1, 2, 3, 4]} />
      </div>
      <div className='homeSkills'>
        <Typography variant="h3">Skills</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces">
            <div className="homeCubeSkillsFaces1">
              <img src="https://images.pexels.com/photos/6017481/pexels-photo-6017481.jpeg" width="200px" alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces2">
              <img src="https://images.pexels.com/photos/6017481/pexels-photo-6017481.jpeg" width="200px" alt="Face2" />
            </div>
            <div className="homeCubeSkillsFaces3">
              <img src="https://images.pexels.com/photos/6017481/pexels-photo-6017481.jpeg" width="200px" alt="Face3" />
            </div>
            <div className="homeCubeSkillsFaces4">
              <img src="https://images.pexels.com/photos/6017481/pexels-photo-6017481.jpeg" width="200px" alt="Face4" />
            </div>
            <div className="homeCubeSkillsFaces5">
              <img src="https://images.pexels.com/photos/6017481/pexels-photo-6017481.jpeg" width="200px" alt="Face5" />
            </div>
            <div className="homeCubeSkillsFaces6">
              <img src="https://images.pexels.com/photos/6017481/pexels-photo-6017481.jpeg" width="200px" alt="Face6" />
            </div>
          </div>

        </div>
      </div>
    </div>)
}

export default Home