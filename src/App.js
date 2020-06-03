import React, { useState, useEffect } from 'react';
import './App.css';
import NavHeader from './Shared/NavHeader/NavHeader';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SideProjects from './Components/SideProjects/SideProjects'
import About from './Components/About/About';
import ContactForm from './Components/ContactMe/ContactMeForm';
import MiniDrawer from './Shared/SideDrawer/SideDrawer';
import { ThemeContext } from './Shared/contexts/ThemeContext';
import * as THREE from 'three'
const App = () => {

  const [themeColor, setThemeColor] = useState(false)


  useEffect(() => {
    let scene, camera, renderer, starGeo, stars;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      const element = document.getElementById('About')
      element.classList.add('canvas')
      element.append(renderer.domElement);




      starGeo = new THREE.Geometry();
      for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star)
      }
      let image = require('./assets/images/star.png')
      let sprite = new THREE.TextureLoader().load(image);
      console.log(sprite)
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
      })
      stars = new THREE.Points(starGeo, starMaterial)
      scene.add(stars)
      animate();
    }
    function animate() {
      starGeo.vertices.forEach((p) => {
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if (p.y < -200) {
          p.y = 200;
          p.velocity = 0;
        }
      })
      starGeo.verticesNeedUpdate = true;
      stars.rotation.y += 0.002;
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    init();

  }, [])
  return (
    <BrowserRouter>
      <>
        <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
          <NavHeader />
          {/* <MiniDrawer /> */}
          <Route path='/' exact component={HomePage} />
          {/* <Route path='/Projects' component={SideProjects} />
            <Route path='/About' component={About} />
            <Route path='/ContactForm' component={ContactForm} /> */}
          {/* <Route path='/' render={() => <div>page not found!</div>
          } /> */}
        </ThemeContext.Provider>
      </>
    </BrowserRouter>

  );
}

export default App;
