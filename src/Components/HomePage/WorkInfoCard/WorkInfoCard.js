import React from 'react';
import classes from './WorkInfoCard.module.css';

const WorkInfoCard = props => {
    return (
        <div>
            <h3 className={classes.HeaderText}>Kelar Crisp </h3>
            <div className={classes.CardContainer}>
                <p>Replenium</p>
                <p>Full-time Contract position</p>
                <p>November 23rd, 2019 - January 17th, 2020</p>
                <p>At the end of my internship I was offered a contract to continue as a front-end developer and assist with the daily tasks of creating and maintaining production level code. </p>
            </div>
            <div className={classes.CardContainer}>
                <p>Replenium</p>
                <p>Intern</p>
                <p>October 14th, 2019 - November 22nd, 2019</p>
                <p>During my Internship period with Replenium I spent most of my time working as a front-end developer and assisted with debugging issues that would come up.</p>
            </div>
            <div className={classes.CardContainer}>
                <p>UPS</p>
                <p>Outbound supervisor</p>
                <p>
                    August 14th, 2014 - May 1st, 2019
                </p>
                <p> I started work at UPS as a package handler and quickly became a manager leading 8-10 people on a daily basis.
                    Most of my day would consist of delegating work to each of my employees to get that days tasks done in an safe and efficient manner.</p>
            </div>


        </div>
    );
};


export default WorkInfoCard;