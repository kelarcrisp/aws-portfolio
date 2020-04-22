import React, { Component } from 'react';
import classes from './HomePage.module.css';
import WorkInfoCard from './WorkInfoCard/WorkInfoCard'
import { ThemeContext } from '../../Shared/contexts/ThemeContext';
class HomePage extends Component {
    state = {
        showDropDown: true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ showDropDown: false })
            localStorage.setItem('showDropDown', this.state.showDropDown)
        }, 4000)
    }

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { themeColor } = context
                // if (this.state.showDropDown && themeColor)
                //     loadDropDown = <div className={classes.DarkHomePageContainer}> <WorkInfoCard /></div>

                // if (localStorage.getItem('showDropDown'))
                //     loadDropDown = <div className={classes.HomePageContainer}> <WorkInfoCard /> </div>
                // if (!localStorage.getItem('showDropDown'))
                //     loadDropDown = <div className={classes.HomePageContainerTwo}> <WorkInfoCard /> </div>
                // if (themeColor) {
                //     loadDropDown = <div className={classes.DarkHomePageContainerTwo}> <WorkInfoCard /> </div>
                // }
                let loadDropDown;
                console.log(localStorage.getItem('showDropDown'), 'dropDownFrom storage')
                if (localStorage.getItem('showDropDown') == null)
                    loadDropDown = <div className={classes.HomePageContainer}> <WorkInfoCard /></div>
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
        )
    }


};

export default HomePage;