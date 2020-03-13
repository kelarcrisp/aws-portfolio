import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import AppBar from '@material-ui/core/AppBar'
import ComputerIcon from '@material-ui/icons/Computer';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import { NavLink } from 'react-router-dom'
import MyTab from '../Tabs/Tab';
import Tab from '@material-ui/core/Tab';
import { useHistory } from "react-router-dom";
import classes from './NavHeader.module.css';
const styles = {

    root: {
        display: 'flex',
        justifyContent: 'space-between',

    },
    Tabs: {
        marginRight: '20px',
        marginTop: '10px'
    },
    Links: {
        marginLeft: '5%',
        height: '100px',
        width: 'auto',
        display: 'flex',
        flexWrap: 'wrap'

    },
    Name: {
        marginTop: '40px',
        paddingLeft: '20%',
        fontSize: '25px'
    },
    NameHover: {
        fontSize: '50px',
        cursor: 'pointer'
    },
    Indicator: {
        backgroundColor: 'black'
    },
    TextColor: {
        color: 'black'
    }

};

class NavHeader extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleClick = () => {
        const history = useHistory();
        history.push("/home");
    }
    render() {
        const { classes } = this.props;

        return (
            <div>

                <Paper square elevation={0}
                    style={{ background: 'linear-gradient(90deg, #a1c4fd,  #c2e9fb)' }}
                    className={classes.root}>
                    <div className={classes.Links}>
                        <IconButton
                            onClick={() => window.location.href = 'https://github.com/epicoding95'}

                            aria-label="GitHubIcon">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => window.location.href = 'https://www.linkedin.com/in/kelarcrisp/'}
                            aria-label="LinkedInIcon">
                            < LinkedInIcon />
                        </IconButton>
                        <IconButton

                            onClick={() => window.location.href = 'https://www.instagram.com/theekilla/'}
                            aria-label="InstagramIcon">
                            < InstagramIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => window.location.href = 'https:twitter.com/theekillaa'}
                            aria-label="TwitterIcon">
                            < TwitterIcon />
                        </IconButton>
                    </div>
                    <div
                        className={classes.Name}>Kelar Crisp</div>
                    <div className={classes.Tabs}>
                        <MyTab
                            onChange={this.handleChange}
                            className={classes.Tabs}
                            value={this.state.value}

                        />
                    </div>
                </Paper>
            </div>
        );
    }
}
export default withStyles(styles)(NavHeader);
