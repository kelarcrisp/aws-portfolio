import React, { useContext } from 'react';
import classes from './SideProjects.module.css';
import { ThemeContext } from '../../Shared/contexts/ThemeContext';;
const SideProjects = () => {
    const { themeColor } = useContext(ThemeContext)
    return (
        <div className={themeColor ? classes.DarkSideProjectsContainer : classes.SideProjectsContainer}>


            <div className={themeColor ? classes.DarkProjectItemLeft : classes.SideProjectItemLeft}> <a href='https://github.com/epicoding95/chat-room'>Chat Room</a><img src={require('../../assets/images/newimage.png')} alt='codeimage' /> <p> Application in which you can log in and immediately join the greatest conversation on earth. Built with React/Node.js/Socket.io/Material-UI</p></div>
            <div className={themeColor ? classes.DarkProjectItemLeft : classes.SideProjectItemLeft}> <a href='https://github.com/epicoding95/spotify-KR'>Spotify Clone
               </a>
                <img src={require('../../assets/images/newimage.png')} alt='codeimage' /> <p>
                    -WIP-
                      Spotify Clone came from an idea in using spotify all the time. I wanted to create a spotify website that is exactly how I'd like to have access to my top artists, playlists, etc.</p></div>
            <div className={themeColor ? classes.DarkProjectItemLeft : classes.SideProjectItemLeft}> <a href='https://github.com/epicoding95/burger-builder'>Burger Builder </a><img src={require('../../assets/images/newimage.png')} alt='codeimage' /> <p> Burger Builder has been used as a practice project in which i've used to learn/test different ideas between React/Redux/Firebase.</p></div>


            <div className={themeColor ? classes.DarkProjectItemRight : classes.SideProjectItemRight}> <a href='https://github.com/epicoding95?tab=repositories&q=circles&type=&language='> Circles </a><img src={require('../../assets/images/newimage.png')} alt='codeimage' /> <p>Team project in which was built by me and 3 friends. This website allows you to create a circle, invite people to your circle, or join someone elses circle. The idea of this project was to have a place where like minded people could get together to do said activity. </p></div>

            <div className={themeColor ? classes.DarkProjectItemRight : classes.SideProjectItemRight}> <a href='https://github.com/epicoding95/redasForgetfulList'>Redas Forgetful List</a><img src={require('../../assets/images/newimage.png')} alt='codeimage' /> <p> A web app built so you and I both can stop forgetting things at the store. Built with React/Material-UI</p></div>

            <div className={themeColor ? classes.DarkProjectItemRight : classes.SideProjectItemRight}> <a href='https://github.com/epicoding95/doctor-api'>Doctor Lookup</a><img src={require('../../assets/images/newimage.png')} alt='codeimage' /> <p> Fun little website that allows you to search for Doctors in your area based on the doctors last name or the condition you're facing.</p></div>

        </div>
    );
};

export default SideProjects;