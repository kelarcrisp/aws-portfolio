import React from 'react';
import classes from './SideProjects.module.css';
const SideProjects = () => {
    return (
        <div className={classes.SideProjectsContainer}>
            <div className={classes.SideProjectItem}>Project1</div>
            <div className={classes.SideProjectItem}>Project2</div>
            <div className={classes.SideProjectItem}>Project3</div>
            <div className={classes.SideProjectItem}>Project 4
</div>
        </div>
    );
};

export default SideProjects;