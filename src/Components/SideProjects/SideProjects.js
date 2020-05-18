import React, { useContext } from 'react';
import classes from './SideProjects.module.css';
import { ThemeContext } from '../../Shared/contexts/ThemeContext';
import { useInView } from 'react-intersection-observer'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SideProjects = () => {
    const { themeColor } = useContext(ThemeContext)
    AOS.init({
        delay: 200,
    });

    return (
        <div id='SideProjects' className={themeColor ? classes.DarkSideProjectsContainer : classes.SideProjectsContainer}>
            <div
                data-aos='fade-left'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a href='https://github.com/epicoding95/spotify-KR'>Movie Nerd
               </a>
                <div className={classes.PlaceHolder}></div>
                <p className={classes.ProjectItemInfo}>
                    An application in which shows you the top movies out, the top comedies out, and allows for you to search for any other movie you might be interested in with detailed info about each. Such as the actors within the movie, how long the movie is, ratings for the movie, and a link to watch the trailer for it. Built with React/Material.UI</p></div>
            <div
                data-aos='fade-right'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a data-tool-tip='a cool tool tip' href='https://github.com/epicoding95/chat-room'>Chat Room</a><div className={classes.PlaceHolder}></div> <p className={classes.ProjectItemInfo}> An Application in which you can log in and immediately get put into a real time chat application Built with React/Node.js/Socket.io/Material-UI</p></div>

            <div
                data-aos='fade-left'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a href='https://github.com/epicoding95/burger-builder'>Developer Jobs </a> <div className={classes.PlaceHolder}></div><p className={classes.ProjectItemInfo}> Developer Jobs was created for software developers who are looking for a job, this website allows users to see many different jobs in the indutry and shows all of the information needed to apply for this job. This project was built with GraphQl, Apollo Client, and React.</p></div>


            <div data-aos='fade-left'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a href='https://github.com/epicoding95?tab=repositories&q=circles&type=&language='> Redas forgetful list </a><div className={classes.PlaceHolder}></div><p className={classes.ProjectItemInfo}>A small app that I personally use to help remember things for when I go grocery Shopping. Built with React/Firebase. </p></div>



        </div>
    );
};

export default SideProjects;