import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import MyTab from '../Tabs/Tab';
import { useHistory } from "react-router-dom";
import { ThemeContext } from '../contexts/ThemeContext';

const styles = {


    // ContainerDiv: {
    //     position: 'fixed',
    //     width: '100%',
    //     left: '0',
    //     boxSizing: 'border-box',
    //     zIndex: '1',
    //     marginBottom: '200px'
    // },
    Root: {
        display: 'flex',
        justifyContent: 'space-between',
        animation: `$root 3s`,
        width: "100%",
        // //this is how you can write media queries with material ui!!
        '@media (max-width: 400px)': {
            // width: "60%",
            display: "none"
        }
    },
    ///side drawer for mobile users
    SideDrawerNav: {
        display: 'hidden',

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
        paddingLeft: '15%',
        fontSize: '35px'
    },
    NameHover: {
        fontSize: '50px',
        cursor: 'pointer'
    },
    TextColor: {
        color: 'black'
    },
    "@keyframes root": {
        "0%": {
            opacity: 0,
            transform: "translateY(-200%)"
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)"
        }
    },


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
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, dark } = context
                let colorTheme;
                if (!isLightTheme) {
                    colorTheme = {
                        background: '#333', color: '#ddd',
                    }
                } else {
                    colorTheme = { background: 'linear-gradient(90deg, #fdfcfb ,  #e2d1c3' }
                }
                return (
                    <div className={classes.ContainerDiv} >
                        <Paper square elevation={0}
                            style={colorTheme}
                            className={classes.Root}>
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
                )
            }}</ThemeContext.Consumer>

        );
    }
}
export default withStyles(styles)(NavHeader);
