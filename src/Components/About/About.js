import React, { useContext, useEffect, useState } from 'react';
import classes from './About.module.css';
import { ThemeContext } from '../../Shared/contexts/ThemeContext';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const About = () => {
    const { themeColor } = useContext(ThemeContext)
    console.log(themeColor)
    return (
        <div id='About' className={themeColor ? classes.DarkContainer : classes.MainContainer}>
            <div className={classes.AboutCardContainer}>
                <h1 className={classes.Name}>Kelar Crisp </h1>

                <p className={classes.Bio}>Hello! I'm Kelar, a Seattle based software engineer with a passion for all things front-end. I currently spend most of my time building things with React 🤖</p>
                <div className={classes.Links} >
                    <IconButton
                        style={{ color: 'white' }}
                        onClick={() => window.open('https://github.com/epicoding95', '_blank')}
                        className={classes.Link}
                        aria-label="GitHubIcon">
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        style={{ color: 'white' }}
                        onClick={() => window.open('https://www.linkedin.com/in/kelarcrisp/', '_blank')}
                        className={classes.Link}
                        aria-label="LinkedInIcon">
                        < LinkedInIcon />
                    </IconButton>
                    <IconButton
                        style={{ color: 'white' }}
                        onClick={() => window.open('https://www.instagram.com/theekilla/', '_blank')}
                        className={classes.Link}
                        aria-label="InstagramIcon">
                        < InstagramIcon />
                    </IconButton>
                    <IconButton
                        style={{ color: 'white' }}
                        onClick={() => window.open('https:twitter.com/theekillaa', '_blank')}
                        className={classes.Link}
                        aria-label="TwitterIcon">
                        < TwitterIcon />
                    </IconButton>
                </div>
            </div>

        </div>
    );
};

export default About;