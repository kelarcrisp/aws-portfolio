import React, { useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import * as THREE from "three";
import classes from "./About.module.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
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
      //instead of window.inner width it should be something different..

      const element = document.getElementById("About");
      renderer.setSize(element.clientWidth, element.clientHeight);
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

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div id="About" className={classes.MainContainer}>
      <div className={classes.AboutCardContainer}>
        <h1 className={classes.Name}>Kelar Crisp </h1>

        <p className={classes.Bio}>
          Hello! I'm Kelar, a Seattle based software engineer with a passion for
          all things front-end. I currently spend most of my time building
          things with React{" "}
          <span role="img" aria-label="emoji">
            🤖
          </span>
        </p>
        <div className={classes.Links}>
          <IconButton
            style={{ color: "white" }}
            onClick={() =>
              window.open("https://github.com/epicoding95", "_blank")
            }
            aria-label="GitHubIcon"
            className={classes.Link}
          >
            <div className={classes.LinkHover}>Github</div>
            <GitHubIcon />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            className={classes.Link}
            onClick={() =>
              window.open("https://www.linkedin.com/in/kelarcrisp/", "_blank")
            }
            aria-label="LinkedInIcon"
          >
            <div className={classes.LinkHover}>LinkedIn</div>
            <LinkedInIcon />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            className={classes.Link}
            onClick={() =>
              window.open("https://www.instagram.com/theekilla/", "_blank")
            }
            aria-label="InstagramIcon"
          >
            <div className={classes.LinkHover}>Instagram</div>
            <InstagramIcon />
          </IconButton>
          <IconButton
            style={{ color: "white" }}
            className={classes.Link}
            onClick={() =>
              window.open("https:twitter.com/theekillaa", "_blank")
            }
            aria-label="TwitterIcon"
          >
            <div className={classes.LinkHover}>Twitter</div>
            <TwitterIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.BringUp}>
        Back to top
        <ArrowUpwardIcon onClick={topFunction} />
      </div>
    </div>
  );
};

export default About;
