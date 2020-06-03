import React, { useContext, useEffect, useState } from 'react';
import classes from './About.module.css';
import { ThemeContext } from '../../Shared/contexts/ThemeContext';
import Typewriter from 'typewriter-effect';
const About = () => {

    const [text, setText] = useState('')
    const { themeColor } = useContext(ThemeContext)


    useEffect(() => {
        window.addEventListener('scroll', e => {

            const target = document.querySelector('.circle')

            var posX = window.pageYOffset * 2;
            var posY = window.pageYOffset * 1;
            target.style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0px)'


        })
        setTimeout(() => {
            setText(<div><p className={classes.Bio}>Hello! I'm Kelar, a Seattle based software engineer with a passion for all things front-end. I currently spend most of my time building things with React 🤖</p>
                <p className={classes.Bio}>  </p></div>)
        }, 1500)
    }, [])


    console.log(themeColor)
    return (
        <div id='About' className={themeColor ? classes.DarkContainer : classes.MainContainer}>
            <div className={classes.AboutCardContainer}>
                <h1 className={classes.Name}>Kelar Crisp </h1>
                {/* <h1 className={classes.Title}> Front End developer</h1> */}
                {text}

                <span data-ratey="1" data-ratex="2" data-direction="horizontal" className='circle'></span>
            </div>
        </div>
    );
};

export default About;