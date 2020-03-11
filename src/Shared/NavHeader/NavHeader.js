import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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
const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    Tabs: {
        marginTop: '10px'
    },
    Links: {
        marginLeft: '5%',
        height: '100px',
        width: 'auto',
        border: '1px solid black',
        display: 'flex',
        flexWrap: 'wrap'

    },
    Name: {
        marginTop: '20px',
        fontSize: '25px'
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

    render() {
        const { classes } = this.props;

        return (
            <div>

                <Paper square elevation={0} className={classes.root}>
                    <div className={classes.Links}>
                        <IconButton aria-label="GitHubIcon">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton aria-label="LinkedInIcon">
                            < LinkedInIcon />
                        </IconButton>
                        <IconButton aria-label="InstagramIcon">
                            < InstagramIcon />
                        </IconButton>
                        <IconButton aria-label="TwitterIcon">
                            < TwitterIcon />
                        </IconButton>
                    </div>
                    <div className={classes.Name}>kelars profile!</div>
                    <div className={classes.Tabs}>
                        <Tabs
                            className={classes.Tabs}
                            value={this.state.value}
                            onChange={this.handleChange}
                            classes={{ indicator: classes.Indicator }}
                        >
                            <Tab icon={<ComputerIcon />} label="Projects" />
                            <Tab icon={<InfoIcon />} label="About" />
                        </Tabs>
                    </div>
                </Paper>
                <hr></hr>
            </div>
        );
    }
}
export default withStyles(styles)(NavHeader);
