import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
        <div id='About' className={classes.MainContainer}>
            <div className={classes.AboutCardContainer}>
                <h1 className={classes.Name}>Kelar Crisp</h1>
                <h3 className={classes.Title}>Front-End Developer</h3>
                <p className={classes.Bio}>Hello! I'm Kelar, a Seattle based software engineer with a passion for all things front-end. I recently completed an immersive web-development bootcamp at Epicodus as well as a contractor position at a Seattle based exommerce company.</p>
                <p className={classes.Bio}> My goal is to keep learning and expanding my skillset, through work and personal projects, to build robust applications, websites and everything in between. </p>


            </div>
        </div>
    );
};

export default About;