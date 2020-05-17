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
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a href='https://github.com/epicoding95/chat-room'>Chat Room</a><div className={classes.PlaceHolder}></div> <p className={classes.ProjectItemInfo}> Application in which you can log in and immediately join the greatest conversation on earth. Built with React/Node.js/Socket.io/Material-UI</p></div>

            <div
                data-aos='fade-right'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a href='https://github.com/epicoding95/spotify-KR'>Spotify Clone
               </a>
                <div className={classes.PlaceHolder}></div>
                <p className={classes.ProjectItemInfo}>
                    -WIP-
                      Spotify Clone came from an idea in using spotify all the time. I wanted to create a spotify website that is exactly how I'd like to have access to my top artists, playlists, etc.</p></div>

            <div
                data-aos='fade-left'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a href='https://github.com/epicoding95/burger-builder'>Burger Builder </a> <div className={classes.PlaceHolder}></div><p className={classes.ProjectItemInfo}> Burger Builder has been used as a practice project in which i've used to learn/test different ideas between React/Redux/Firebase.</p></div>


            <div data-aos='fade-left'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a href='https://github.com/epicoding95?tab=repositories&q=circles&type=&language='> Circles </a><div className={classes.PlaceHolder}></div><p className={classes.ProjectItemInfo}>Team project in which was built by me and 3 friends. This website allows you to create a circle, invite people to your circle, or join someone elses circle. The idea of this project was to have a place where like minded people could get together to do said activity. </p></div>



        </div>
    );
};

export default SideProjects;