import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './ContactMeForm.module.css';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import { ThemeContext } from '../../Shared/contexts/ThemeContext';



const ContactMeForm = (props) => {

    const { themeColor, setThemeColor } = useContext(ThemeContext)
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'email') {
            setEmail(e.target.value)
        } else if (e.target.id === 'title') {
            setTitle(e.target.value)
        }
        else {
            setMessage(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            email: email,
            title: title,
            message: message
        }
        setIsSent(true);
        setEmail('');
        setTitle('');
        setMessage('');
        axios.post('https://kelar-portfolio.firebaseio.com/formData.json', dataToSubmit).then(response => console.log(response, 'its been sent'))
        // axios.post('/api/form', dataToSubmit).then(() => console.log('sent to server!')
        // ).catch(err => err, 'request couldnt be sent!')
        console.log('data sent', dataToSubmit)
    }

    let showSentMessage = null;
    if (isSent) {
        showSentMessage = 'Your email has successfully been sent!'
    }
    if (isSent) {
        setTimeout(() => {
            setIsSent(null)
        }, 2500)
    }

    const materialTheme = themeColor ? { color: 'green' } : { color: 'yellow' }

    return (
        <div className={themeColor ? classes.DarkContactContainer : classes.ContactContainer} >
            <h3 className={classes.ContactHeader}>Fill out the form to directly contact me by Email!</h3>
            <form
                onSubmit={handleSubmit}
                className={classes.FormInfoContainer} autoComplete="on">
                <TextField className={classes.TextField}
                    InputProps={themeColor ? {
                        style: {
                            color: "#ddd",
                        }
                    } : null}
                    InputLabelProps={themeColor ? {
                        style: {
                            color: "#ddd",
                        }
                    } : null}
                    type='email' id="email" label="Your Email " variant="outlined" value={email} onChange={handleChange} />
                <TextField className={classes.TextField}
                    InputProps={themeColor ? {
                        style: {
                            color: "#ddd",
                        }
                    } : null}
                    InputLabelProps={themeColor ? {
                        style: {
                            color: "#ddd",
                        }
                    } : null}
                    id="title" label="Title" variant="outlined" value={title} onChange={handleChange} />`
                    <TextField
                    className={classes.TextField}
                    InputProps={themeColor ? {
                        style: {
                            color: "#ddd",
                        }
                    } : null}
                    onChange={handleChange}
                    multiline
                    rows='4'

                    InputProps={{
                        style: {
                            color: "#ddd",
                        }
                    }}

                    InputLabelProps={themeColor ? {
                        style: {
                            color: "#ddd",
                        }
                    } : null}
                    id="message" label='Message' variant="outlined" value={message} />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '50px', marginLeft: '-10px' }}
                    startIcon={<SendIcon></SendIcon>}
                >
                    Send!
                    </Button>
                <div className={!themeColor ? classes.ShowSentMessage : classes.ShowDarkSentMessage}>{showSentMessage}</div>
            </form>
        </div >
    );

};

export default ContactMeForm;