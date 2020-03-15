import React from 'react';
import classes from './SideProjects.module.css';
const SideProjects = () => {
    return (
        <div className={classes.SideProjectsContainer}>
            <div className={classes.SideProjectItemLeft}> Spotify recreate
                -WIP-
             <img src={require('../../assets/images/newimage.png')} /></div>
            <div className={classes.SideProjectItemLeft}>Project2 <img src={require('../../assets/images/newimage.png')} /></div>
            <div className={classes.SideProjectItemRight}>Project3 <img src={require('../../assets/images/newimage.png')} /></div>
            <div className={classes.SideProjectItemRight}>Project 4<img src={require('../../assets/images/newimage.png')} />
            </div>
        </div>
    );
};

export default SideProjects;