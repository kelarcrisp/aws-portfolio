import React, { useContext, useState, useEffect } from 'react';
import classes from './WorkInfoCard.module.css';
import { ThemeContext } from '../../../Shared/contexts/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useInView } from 'react-intersection-observer'
const WorkInfoCard = props => {
    AOS.init();
    const { themeColor } = useContext(ThemeContext)

    const [ref, inView, entry] = useInView({
        /* Optional options */
        triggerOnce: true,
        threshold: 0,
    })


    return (
        <div ref={ref} id='Work' style={{ padddingTop: '50px' }} className={classes.MainContainer}  >
            <div id='first' className={themeColor ? classes.DarkContainer : classes.CardContainer} data-aos='fade-left'>
                <p>Replenium</p>
                <p>Full-time Contract position</p>
                <p>November 23rd, 2019 - January 17th, 2020</p>
                <p>At the end of my internship I was offered a contract to continue as a front-end developer and assist with the daily tasks of creating and maintaining production level code. </p>
            </div>
            <div ref={ref} id='second' className={themeColor ? classes.DarkContainer : classes.CardContainer} data-aos='fade-right'>
                <p>Replenium</p>
                <p>Intern</p>
                <p>October 14th, 2019 - November 22nd, 2019</p>
                <p>During my Internship period with Replenium I spent most of my time working as a front-end developer and assisted with debugging issues that would come up.</p>
            </div>
            <div ref={ref} id='third' className={themeColor ? classes.DarkContainer : classes.CardContainer} data-aos='fade-left'>
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