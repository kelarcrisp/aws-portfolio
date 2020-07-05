import React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MyTab from "../Tabs/Tab";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import HomeIcon from "@material-ui/icons/Home";
const styles = {
  ContainerDiv: {
    position: "fixed",
    width: "10%",
    height: "100vh",
    left: "0",
    boxSizing: "border-box",
    zIndex: "1"
  },
  Root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",
    marginTop: "40%",
    animation: `$root 3s`,
    height: "400px",
    minWidth: "90px",
    maxWidth: "110px",
    bacgkroundColor: "space",
    boxShadow: "0px 0px 4px #ccc",
    borderRadius: "5px",

    // //this is how you can write media queries with material ui!!
    // '@media (max-width: 400px)': {
    //     // width: "60%",
    //     display: "none"
    // },
    "@media (max-width: 1100px)": {
      // width: "60%",
      height: "500px"
    }
  },
  ///side drawer for mobile users
  SideDrawerNav: {
    display: "hidden"
  },
  Tabs: {
    margin: "50px auto"
  },
  Links: {
    marginLeft: "5%",
    width: "auto",
    display: "flex",
    flexWrap: "wrap"
  },
  DarkLink: {
    color: "#ddd"
  },
  Name: {
    marginTop: "40px",
    paddingLeft: "0px",
    fontSize: "35px"
  },
  NameHover: {
    fontSize: "50px",
    cursor: "pointer"
  },

  TextColor: {
    color: "black"
  },
  "@keyframes root": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)"
    }
  }
};

class NavHeader extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleClick = () => {
    const history = useHistory();
    history.push("/home");
  };
  render() {
    const { classes } = this.props;

    return (
      <ThemeContext.Consumer>
        {context => {
          const { themeColor, setThemeColor } = context;
          let colorTheme;
          if (themeColor) {
            colorTheme = {
              background: "#333",
              color: "#ddd",
              border: "1px solid white"
            };
          } else {
            colorTheme = { background: "space", border: "1px solid black" };
          }
          return (
            <div className={classes.ContainerDiv}>
              <Paper
                square
                elevation={0}
                style={colorTheme}
                className={classes.Root}
              >
                <FormControlLabel
                  style={{ marginLeft: "10%", marginTop: "30%" }}
                  onClick={() => setThemeColor(latestColor => !latestColor)}
                  control={<Switch style={{ color: "white", font: "50px" }} />}
                  label="☾"
                />
                {/* <div

                                className={classes.Name}>Kelar Crisp</div> */}
                <div className={classes.Tabs}>
                  <MyTab
                    context={themeColor}
                    onChange={this.handleChange}
                    className={classes.Tabs}
                    value={this.state.value}
                  />
                </div>

                <div className={classes.Links}>
                  <IconButton
                    onClick={() =>
                      window.open("https://github.com/epicoding95", "_blank")
                    }
                    className={themeColor ? classes.DarkLink : null}
                    aria-label="GitHubIcon"
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/kelarcrisp/",
                        "_blank"
                      )
                    }
                    className={themeColor ? classes.DarkLink : null}
                    aria-label="LinkedInIcon"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/theekilla/",
                        "_blank"
                      )
                    }
                    className={themeColor ? classes.DarkLink : null}
                    aria-label="InstagramIcon"
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      window.open("https:twitter.com/theekillaa", "_blank")
                    }
                    className={themeColor ? classes.DarkLink : null}
                    aria-label="TwitterIcon"
                  >
                    <TwitterIcon />
                  </IconButton>
                </div>
              </Paper>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default withStyles(styles)(NavHeader);
