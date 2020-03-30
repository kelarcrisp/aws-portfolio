import React, { Component } from 'react';
import classes from './HomePage.module.css';
import WorkInfoCard from './WorkInfoCard/WorkInfoCard'
import MiniDrawer from '../../Shared/SideDrawer/SideDrawer';
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