import React, { useContext } from 'react';
import ComputerIcon from '@material-ui/icons/Computer';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import { ThemeContext } from '../contexts/ThemeContext';
import classes from './Tab.module.css';
const MyTab = (props) => {

    const { themeColor } = useContext(ThemeContext)

    return (
        <div

            className={classes.TabContainer}>
            <div className={classes.IndividualTabContainer}>
                <HomeIcon /> <a
                    style={{ color: themeColor ? 'white' : 'black' }}
                    className={classes.IndividualTab}
                    href='#About'
                >About</a>
            </div>
            <div className={classes.IndividualTabContainer}>
                <HomeIcon /> <a
                    style={{ color: themeColor ? 'white' : 'black' }}
                    className={classes.IndividualTab}
                    href='#Work'
                >Work</a>
            </div>
            <div className={classes.IndividualTabContainer}>
                <ComputerIcon /><a
                    style={{ color: themeColor ? 'white' : 'black' }}
                    className={classes.IndividualTab}
                    href="#SideProjects"
                >Projects</a>
            </div>
            <div className={classes.IndividualTabContainer}>
                <EmailIcon /><a
                    style={{ color: themeColor ? 'white' : 'black' }}
                    className={classes.IndividualTab}
                    href='#ContactMe' >Email</a>
            </div>
        </div >

    );
};

export default MyTab;