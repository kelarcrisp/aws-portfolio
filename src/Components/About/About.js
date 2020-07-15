import React, { useContext, useEffect, useState } from "react";
import classes from "./About.module.css";
import { ThemeContext } from "../../Shared/contexts/ThemeContext";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import * as THREE from "three";
const About = () => {
  useEffect(() => {
    let scene, camera, renderer, starGeo, stars;
    init();
    animate();
    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      const element = document.getElementById("About");
      element.classList.add("canvas");
      element.append(renderer.domElement);

      starGeo = new THREE.Geometry();
      for (let i = 0; i < 6000; i++) {
        let star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star);
      }
      let image = require("../../assets/images/star.png");
      let sprite = new THREE.TextureLoader().load(image);
      console.log(sprite);
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
      });
      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);
      animate();
    }
    function animate() {
      starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration;
        p.y -= p.velocity;
        if (p.y < -200) {
          p.y = 200;
          p.velocity = 0;
        }
      });
      starGeo.verticesNeedUpdate = true;
      stars.rotation.y += 0.002;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init();
  }, []);

  return (
    <div id="About" className={classes.MainContainer}>
      <div className={classes.AboutCardContainer}>
        <h1 className={classes.Name}>Kelar Crisp </h1>

        <p className={classes.Bio}>
          Hello! I'm Kelar, a Seattle based software engineer with a passion for
          all things front-end. I currently spend most of my time building
          things with React 🤖
        </p>
        <div className={classes.Links}>
          <IconButton
            style={{ color: "white" }}
            onClick={() =>
              window.open("https://github.com/epicoding95", "_blank")
            }
            className={classes.Link}
            aria-label="GitHubIcon"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/kelarcrisp/", "_blank")
            }
            className={classes.Link}
            aria-label="LinkedInIcon"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            onClick={() =>
              window.open("https://www.instagram.com/theekilla/", "_blank")
            }
            className={classes.Link}
            aria-label="InstagramIcon"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            onClick={() =>
              window.open("https:twitter.com/theekillaa", "_blank")
            }
            className={classes.Link}
            aria-label="TwitterIcon"
          >
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default About;
