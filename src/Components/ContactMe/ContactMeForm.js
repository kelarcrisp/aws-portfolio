import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import classes from './ContactMeForm.module.css';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';

const ContactMeForm = () => {

    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'email') {
            console.log('email')
            setEmail(e.target.value)
        } else if (e.target.id === 'title') {
            setTitle(e.target.value)
        }
        else {
            console.log('message')
            setMessage(e.target.value)
        }
    }

    let myForm = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = {
            email: email,
            title: title,
            message: message
        }
        setEmail('');
        setTitle('');
        setMessage('');
        axios.post('/api/form', dataToSubmit).then(() => console.log('sent to server!')
        ).catch(err => err, 'request couldnt be sent!')
        console.log('data sent', dataToSubmit)
    }

    return (
        <div className={classes.ContactContainer}>
            <form
                ref={myForm}
                onSubmit={handleSubmit}
                className={classes.FormInfoContainer} autoComplete="on">
                <TextField className={classes.TextField} id="email" label="Your Email " variant="outlined" value={email} onChange={handleChange} />
                <TextField className={classes.TextField} id="title" label="Title" variant="outlined" value={title} onChange={handleChange} />`
                    <TextField
                    className={classes.TextField}
                    onChange={handleChange}
                    multiline
                    rows='4'
                    id="message" label="Message" variant="outlined" value={message} />
                <Button
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '50px' }}
                    startIcon={<SendIcon></SendIcon>}
                >
                    Send!
                    </Button>

            </form>
        </div >
    );

};

export default ContactMeForm;