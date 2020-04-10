import React, { Component } from 'react';
import classes from './HomePage.module.css';
import WorkInfoCard from './WorkInfoCard/WorkInfoCard'
import { ThemeContext } from '../../Shared/contexts/ThemeContext';
class HomePage extends Component {


    state = {
        showDropDown: false
    }
    componentDidMount() {
        setTimeout(() => {
            if (!localStorage.getItem('showDropDown')) {
                this.setState({ showDropDown: true })
                localStorage.setItem('showDropDown', this.state.showDropDown)
            }
        }, 4000)
    }


    render() {

        return (
            <ThemeContext.Consumer>{(context) => {
                const { themeColor } = context


                let loadDropDown;
                if (!localStorage.getItem('showDropDown') && themeColor)
                    loadDropDown = <div className={classes.DarkHomePageContainer}> <WorkInfoCard /></div>

                if (!localStorage.getItem('showDropDown') && !themeColor)
                    loadDropDown = <div className={classes.HomePageContainer}> <WorkInfoCard /> </div>

                if (localStorage.getItem('showDropDown') && themeColor) {
                    loadDropDown = <div className={classes.DarkHomePageContainerTwo}> <WorkInfoCard /> </div>
                }
                else
                    loadDropDown = <div className={classes.HomePageContainerTwo}> <WorkInfoCard /> </div>
                return (
                    <div>
                        {loadDropDown}
                    </div>
                )
            }}</ThemeContext.Consumer>
        )
    }


};

export default HomePage;