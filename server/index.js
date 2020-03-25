const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
dotenv.config();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({ origin: "*" }));

app.post('/api/form', (req, res) => {
    console.log('got into app.post', req)
    const output = `
        <h3>Contact Details</h3>
        <ul>
        <li>Email: ${req.body.email}</li>
         <li>Title: ${req.body.title}</li>
         </ul>
         <h3>Message</h3>
         <p>${req.body.message}</p>
       `

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }, tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: req.body.email,
        to: 'kelcrisp007@icloud.com',
        subject: req.body.title,
        text: output,
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.log(err, 'error in transport sendmail')
        }


    })
})

const PORT = 5000
var server = app.listen(5000, () => {
    console.log('server is running on 5000')
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})