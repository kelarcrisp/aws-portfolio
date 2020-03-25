import React, { useEffect, useState, Component } from 'react';
import classes from './HomePage.module.css';
import WorkInfoCard from './WorkInfoCard/WorkInfoCard'
class HomePage extends Component {


    state = {
        showDropDown: false
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ showDropDown: true })
            localStorage.setItem('showDropDown', this.state.showDropDown)
        }, 4000)
    }


    render() {
        let loadDropDown;
        if (!localStorage.getItem('showDropDown'))
            loadDropDown = <div className={classes.HomePageContainer}> <WorkInfoCard /></div>
        else
            loadDropDown = <div className={classes.HomePageContainerTwo}> <WorkInfoCard /> </div>

        return (
            <div>
                {loadDropDown}
            </div>
        );
    }


};

export default HomePage;