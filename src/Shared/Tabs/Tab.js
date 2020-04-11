import React from 'react';
import { useHistory } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ComputerIcon from '@material-ui/icons/Computer';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
const MyTab = (props) => {

    const history = useHistory();

    function handleProjects() {
        history.push("/Projects");
    }
    // function handleAbout() {

    //     history.push("/About");
    // }
    function handleContact() {

        history.push("/ContactForm");
    }
    function handleHome() {
        history.push('/')
    }
    return (
        <Tabs
            className={props.className}
            value={props.value}
            onChange={props.onChange}
            TabIndicatorProps=
            {props.context ? { style: { background: '#ddd' } }
                : { style: { background: 'black' } }}
        >
            <Tab onClick={() => handleHome()} icon={<HomeIcon />} label="Home" />
            <Tab onClick={() => handleProjects()} icon={<ComputerIcon />} label="Projects" />
            {/* <Tab onClick={() => handleAbout()} icon={<InfoIcon />} label="About" /> */}
            <Tab
                onClick={() => handleContact()} icon={<EmailIcon />} label="Email" />
        </Tabs >

    );
};

export default MyTab;