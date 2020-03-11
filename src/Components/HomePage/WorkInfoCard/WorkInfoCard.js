import React from 'react';
import PropTypes from 'prop-types';
import classes from './WorkInfoCard.module.css';

const WorkInfoCard = props => {
    return (
        <div>
            <div className={classes.CardContainer}>
                <p>Company</p>
                <p>Position</p>
                <p>Time there</p>
                <p> Description</p>
            </div>
            <div className={classes.CardContainer}>
                <p>Company</p>
                <p>Position</p>
                <p>Time there</p>
                <p> Description</p>
            </div>


        </div>
    );
};


export default WorkInfoCard;