import React, { useEffect, useState, Component } from 'react';
import classes from './HomePage.module.css';
import WorkInfoCard from './WorkInfoCard/WorkInfoCard'
class HomePage extends Component {

    render() {
        let loadDropDown = <div className={classes.HomePageContainer}> <WorkInfoCard /></div>

        return (
            <div>
                {loadDropDown}
            </div>
        );
    }


};

export default HomePage;