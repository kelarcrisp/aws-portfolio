import React from 'react';
import classes from './HomePage.module.css';
import WorkInfoCard from './WorkInfoCard/WorkInfoCard'
const HomePage = () => {
    return (
        <div className={classes.HomePageContainer}>
            <WorkInfoCard />
        </div>
    );
};

export default HomePage;