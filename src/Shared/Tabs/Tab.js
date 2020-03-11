import React from 'react';
import { useHistory } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
const MyTab = (props) => {

    const history = useHistory();

    function handleProjects() {

        history.push("/Projects");
    }
    function handleAbout() {

        history.push("/About");
    }
    function handleContact() {

        history.push("/ContactForm");
    }
    return (

        <Tabs
            className={props.className}
            value={props.value}
            onChange={props.onChange}

        >



            <Tab onClick={() => handleProjects()} icon={<ComputerIcon />} label="Projects" />
            <Tab onClick={() => handleAbout()} icon={<InfoIcon />} label="About" />
            <Tab
                onClick={() => handleContact()} icon={<EmailIcon />} label="Email" />

        </Tabs>

    );
};

export default MyTab;