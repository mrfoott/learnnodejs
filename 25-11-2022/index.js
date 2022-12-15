const express = require('express')
const app = express()

const nodemailer = require('nodemailer')
const option = {
    service: 'gmail',
    auth: {
        user: 'phuvo2105@gmail.com',
        pass: 'iqrbpcmxrapazfdk'
    }
}

const transporter = nodemailer.createTransport(option)

transporter.verify(function(err, succ) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connection succeeded!!!');
        const mail = {
            from: 'phuvo2105@gmail.com',
            to: 'hnmtuan0710@gmail.com, nhatlx159@gmail.com',
            subject: 'Test sending email from NodeJS',
            text: 'Test email'
        }

        transporter.sendMail(mail, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Email sent: ' + info.response);
            }
        })
    }
})

// app.use(express.json())

// app.use('/', (req, res) => {

// })