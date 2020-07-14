import React, { Component } from 'react';
import classes from './HomePage.module.css';
import WorkInfoCard from './WorkInfoCard/WorkInfoCard'
import { ThemeContext } from '../../Shared/contexts/ThemeContext';
import SideProjects from '../SideProjects/SideProjects';
import ContactMeForm from '../ContactMe/ContactMeForm';
import About from '../About/About';
class HomePage extends Component {


    render() {
        return (
            <div >
                <About />
                <ThemeContext.Consumer>{(context) => {
                    const { themeColor } = context

                    let loadDropDown;

                    if (localStorage.getItem('showDropDown') == null)
                        loadDropDown = <div className={classes.HomePageContainer}>  <WorkInfoCard /></div>
                    else if (localStorage.getItem('showDropDown') !== null)
                        loadDropDown = <div className={classes.HomePageContainerTwo}> <WorkInfoCard /> </div>
                    if (themeColor)
                        loadDropDown = <div className={classes.DarkHomePageContainerTwo}> <WorkInfoCard /> </div>
                    return (
                        <div>
                            {loadDropDown}
                        </div>
                    )
                }}</ThemeContext.Consumer>
                <SideProjects />
                <ContactMeForm />
            </div>
        )
    }


};

export default HomePage;