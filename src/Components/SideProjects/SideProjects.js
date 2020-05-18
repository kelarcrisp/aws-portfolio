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
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a className={themeColor ? classes.DarkProjectLink : classes.ProjectLink} href='https://movie-nerd-d5f1a.web.app/' target='_blank'>Movie Nerd
               </a>
                <img style={{ maxHeight: '175x', maxWidth: '175px', marginLeft: '10px' }} src={require('../../assets/images/movieNerdImage.png')} alt='codeimage' />
                <p className={classes.ProjectItemInfo}>
                    Movie Nerd was created to allows users to find out anything and everything about any particular movie. On this website you can see an updated list of the current top movies and current top comedies. There's also a feature in which you can search for any particular movie and find out more information on it. Built with React/Material-UI.</p></div>
            <div
                data-aos='fade-right'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a className={themeColor ? classes.DarkProjectLink : classes.ProjectLink} href='https://github.com/epicoding95/chat-room' target='_blank'>Chat Room</a><img style={{ maxHeight: '175x', maxWidth: '175px', marginLeft: '10px' }} src={require('../../assets/images/ChatRoomImage.png')} alt='codeimage' /> <p className={classes.ProjectItemInfo}> Chat Room was created to test features that socket.io allows us to use. On this website you log in and immediately get put into a real time chat application with everyone else that is logged in. Built with React/Node.js/Socket.io/Material-UI.</p></div>

            <div
                data-aos='fade-left'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a className={themeColor ? classes.DarkProjectLink : classes.ProjectLink} href='https://job-search-8385a.firebaseapp.com/' target='_blank'>Developer Jobs </a> <img style={{ maxHeight: '175px', maxWidth: '175px', marginLeft: '10px' }} src={require('../../assets/images/JobsWebsiteImage.png')} alt='codeimage' /><p className={classes.ProjectItemInfo}> Developer Jobs was created for software developers who are looking for a job, this website allows users to see many different jobs in the industry and shows all of the information needed to apply for this job. This project was built with GraphQL, Apollo Client, and React.</p></div>


            <div data-aos='fade-right'
                className={themeColor ? classes.DarkProjectItem : classes.SideProjectItem}> <a className={themeColor ? classes.DarkProjectLink : classes.ProjectLink} href='https://redas-forgetful-list.web.app/' target='_blank'> Redas forgetful list </a><img style={{ maxHeight: '175x', maxWidth: '175px', marginLeft: '10px' }} src={require('../../assets/images/forgetfulListImage.png')} alt='codeimage' /><p className={classes.ProjectItemInfo}>A small app that I personally use to help remember things for when I go grocery Shopping. Built with React/Firebase. </p></div>



        </div>
    );
};

export default SideProjects;