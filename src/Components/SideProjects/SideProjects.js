import React from 'react';
import classes from './SideProjects.module.css';
const SideProjects = () => {
    return (
        <div className={classes.SideProjectsContainer}>
            <div className={classes.SideProjectItemLeft}> Spotify Clone
                -WIP-
             <img src={require('../../assets/images/newimage.png')} /> Spotify Clone came from an idea in using spotify all the time. I wanted to create a spotify website that is exactly how I'd like to have access to my top artists, playlists, etc.</div>
            <div className={classes.SideProjectItemLeft}>Circles<img src={require('../../assets/images/newimage.png')} /> Team project in which was built by me and 3 friends. This website allows you to create a circle, invite people to your circle, or join someone elses circle. The idea of this project was to have a place where like minded people could get together to do said activity.</div>
            <div className={classes.SideProjectItemRight}>Burger Builder <img src={require('../../assets/images/newimage.png')} /> Burger Builder has been used as a practice project in which i've used to learn/test different ideas between React/Redux/Firebase.</div>
            <div className={classes.SideProjectItemRight}>Doctor Lookup<img src={require('../../assets/images/newimage.png')} />
                <br></br>
                Fun little website that allows you search for Doctors in your area based on the doctors last name or the condition you're facing.</div>
        </div>
    );
};

export default SideProjects;