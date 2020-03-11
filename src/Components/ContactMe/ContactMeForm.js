import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import classes from './ContactMeForm.module.css';
class ContactMeForm extends Component {

    handleFormSubmit = (data) => {

    }
    render() {

        return (
            <div>
                <form
                    onSubmit={this.handleFormSubmit}
                    className={classes.FormContainer} autoComplete="on">
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" />
                    <br></br>
                    <TextField id="outlined-basic" label="Title" variant="outlined" />`
                    <TextField
                        multiline
                        rows='4'
                        id="outlined-basic" label="Message" variant="outlined" />
                </form>
            </div >
        );
    }

};

export default ContactMeForm;