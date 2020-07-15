import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import classes from "./ContactMeForm.module.css";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import AOS from "aos";
import emailjs from "emailjs-com";
import "aos/dist/aos.css";
const ContactMeForm = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState();

  AOS.init();

  const handleChange = e => {
    e.preventDefault();
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "title") {
      setTitle(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const emailToSend = {
      from_name: email,
      to_name: "kelcrisp007@icloud.com",
      subject: title,
      message_html: message
    };
    const serviceId = "gmail";
    const templateId = "template_KBdWeh9k";
    const userId = "user_dyzjhIcsAc5ZmpmGA2Kif";
    emailjs
      .send(serviceId, templateId, emailToSend, userId)
      .then(res => "woo")
      .catch(err => console.log(err, "err"));
  };
  let showSentMessage = null;
  if (isSent) {
    showSentMessage = "Your email has successfully been sent!";
  }
  if (isSent) {
    setTimeout(() => {
      setIsSent(null);
    }, 2500);
  }

  return (
    <div
      id="ContactMe"
      data-aos="fade-right"
      className={classes.ContactContainer}
    >
      <div className={classes.ContactHeader}>
        Fill out the form to directly contact me by Email!
      </div>
      <form
        onSubmit={handleSubmit}
        className={classes.FormInfoContainer}
        autoComplete="on"
      >
        <TextField
          className={classes.TextField}
          type="email"
          id="email"
          label="Your Email "
          variant="outlined"
          value={email}
          onChange={handleChange}
        />
        <TextField
          className={classes.TextField}
          id="title"
          label="Title"
          variant="outlined"
          value={title}
          onChange={handleChange}
        />
        `
        <TextField
          className={classes.TextField}
          onChange={handleChange}
          multiline
          rows="4"
          onChange={handleChange}
          multiline
          rows="4"
          id="message"
          label="Message"
          variant="outlined"
          value={message}
        />
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          style={{ marginTop: "50px", marginLeft: "-10px" }}
          startIcon={<SendIcon></SendIcon>}
        >
          Send!
        </Button>
        <div className={classes.ShowSentMessage}>{showSentMessage}</div>
        <div className={classes.ShowSentMessage}>{showSentMessage}</div>
      </form>
    </div>
  );
};

export default ContactMeForm;
