import React from 'react';
import classes from './About.module.css';
const About = () => {
    return (
        <div >
            <div className={classes.AboutCardContainer}>
                <header>Thanks for taking the time to look at my page!</header>
                <p>In may of 2019 I decided to take the leap into the tech industry by joining a coding bootcamp called Epicodus. Since graduating in October of 2019 I've been working mostly with front end frameworks such as React and Angular. I'm currenly located in Seattle, Wa and would love to hear about any front-end developer opportunity! </p>
            </div>
        </div>
    );
};

export default About;