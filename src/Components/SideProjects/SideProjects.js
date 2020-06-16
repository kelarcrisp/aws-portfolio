import React, { useContext } from "react";
import classes from "./SideProjects.module.css";
import { ThemeContext } from "../../Shared/contexts/ThemeContext";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
const SideProjects = () => {
  const { themeColor } = useContext(ThemeContext);
  AOS.init({
    delay: 200
  });

  return (
    <div
      id="SideProjects"
      className={
        themeColor
          ? classes.DarkSideProjectsContainer
          : classes.SideProjectsContainer
      }
    >
      <div
        data-aos="fade-left"
        className={
          themeColor ? classes.DarkProjectItem : classes.SideProjectItem
        }
      >
        {" "}
        <p
          className={themeColor ? classes.DarkProjectName : classes.ProjectName}
        >
          {" "}
          Movie Nerd
        </p>
        <img
          style={{ maxHeight: "175x", maxWidth: "175px", marginLeft: "10px" }}
          src={require("../../assets/images/movieNerdImage.png")}
          alt="codeimage"
        />
        <p className={classes.ProjectItemInfo}>
          Movie Nerd was created to allows users to find out anything and
          everything about any particular movie. On this website you can see an
          updated list of the current top movies and current top comedies.
          There's also a feature in which you can search for any particular
          movie and find out more information on it. Built with
          React/Material-UI.
        </p>{" "}
        <a
          className={themeColor ? classes.DarkProjectLink : classes.ProjectLink}
          href="https://movie-nerd-d5f1a.web.app/"
          target="_blank"
        >
          <LanguageIcon />
        </a>
        <a
          className={themeColor ? classes.DarkGitHubLink : classes.GitHubLink}
          href="https://movie-nerd-d5f1a.web.app/"
          target="_blank"
        >
          <GitHubIcon />
        </a>{" "}
      </div>
      <div
        data-aos="fade-right"
        className={
          themeColor ? classes.DarkProjectItem : classes.SideProjectItem
        }
      >
        {" "}
        <p
          className={themeColor ? classes.DarkProjectName : classes.ProjectName}
        >
          Chat Room
        </p>
        <img
          style={{ maxHeight: "175x", maxWidth: "175px", marginLeft: "10px" }}
          src={require("../../assets/images/ChatRoomImage.png")}
          alt="codeimage"
        />{" "}
        <p className={classes.ProjectItemInfo}>
          {" "}
          Chat Room was created to test features that socket.io allows us to
          use. On this website you log in and immediately get put into a real
          time chat application with everyone else that is logged in. Built with
          React/Node.js/Socket.io/Material-UI.
        </p>
        <a
          className={themeColor ? classes.DarkGitHubLink : classes.GitHubLink}
          href="https://github.com/epicoding95/chat-room"
          target="_blank"
        >
          <GitHubIcon />
        </a>{" "}
      </div>

      <div
        data-aos="fade-left"
        className={
          themeColor ? classes.DarkProjectItem : classes.SideProjectItem
        }
      >
        <p
          className={themeColor ? classes.DarkProjectName : classes.ProjectName}
        >
          Developer Jobs
        </p>{" "}
        <img
          style={{ maxHeight: "175px", maxWidth: "175px", marginLeft: "10px" }}
          src={require("../../assets/images/JobsWebsiteImage.png")}
          alt="codeimage"
        />
        <p className={classes.ProjectItemInfo}>
          {" "}
          Developer Jobs was created for software developers who are looking for
          a job, this website allows users to see many different jobs in the
          industry and shows all of the information needed to apply for this
          job. Built with GraphQL, Apollo Client, and React.
        </p>
        <a
          className={themeColor ? classes.DarkProjectLink : classes.ProjectLink}
          href="https://job-search-8385a.firebaseapp.com/"
          target="_blank"
        >
          <LanguageIcon />
        </a>
        <a
          className={themeColor ? classes.DarkGitHubLink : classes.GitHubLink}
          href="https://github.com/epicoding95/Developer-Jobs"
          target="_blank"
        >
          <GitHubIcon />
        </a>{" "}
      </div>

      <div
        data-aos="fade-right"
        className={
          themeColor ? classes.DarkProjectItem : classes.SideProjectItem
        }
      >
        {" "}
        <p
          className={themeColor ? classes.DarkProjectName : classes.ProjectName}
        >
          Reda's Forgetful List v2
        </p>
        <img
          style={{ maxHeight: "175x", maxWidth: "175px", marginLeft: "10px" }}
          src={require("../../assets/images/trellotrans.png")}
          alt="codeimage"
        />
        <p className={classes.ProjectItemInfo}>
          My own Trello replica that can be used to assign yourself tasks to do,
          built with React and React DnD{" "}
        </p>
        <a
          className={themeColor ? classes.DarkProjectLink : classes.ProjectLink}
          href="https://redas-forgetful-list.web.app/"
          target="_blank"
        >
          <LanguageIcon />
        </a>
        <a
          className={themeColor ? classes.DarkGitHubLink : classes.GitHubLink}
          href="https://github.com/epicoding95/redasForgetfulList"
          target="_blank"
        >
          <GitHubIcon />
        </a>{" "}
      </div>
    </div>
  );
};

export default SideProjects;
