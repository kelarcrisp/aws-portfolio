const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.post('/api/form', (req, res) => {
    console.log('got into app.post')
    nodeMailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li>Email: ${req.body.email}</li>
         <li>Title: ${req.body.title}</li>
         </ul>
         <h3>Message</h3>
         <p>${req.body.message}</p>
       `
        //change this to google!!! if possible ...
        let transporter = nodeMailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'vergie.prohaska78@ethereal.email',
                pass: 'bHZX8Pt7pXgQfeFR3j'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'kelcrisp007@icloud.com',
            replyTo: 'test@testaccount.com',
            subject: 'new message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err, 'error in transport sendmail')
            }
            console.log('message sent!', info)
            console.log('message url', nodeMailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('server is running on 5000')
})