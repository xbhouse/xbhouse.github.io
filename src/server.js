const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const creds = require('./config');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sendEmail", (req, res) => {
    let transportInfo = {
        host: "smtp.gmail.com",
        auth: {
            user: creds.USERNAME,
            pass: creds.PASSWORD
        }
    };

    let transporter = nodemailer.createTransport(transportInfo);

    transporter.verify((error) => {
        if(error) 
            console.log(error);
        else 
            console.log("Server is ready!");
    });

    console.log(req.body);

    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let content = `name: ${name} \n email: ${email} \n message: ${message}`

    let mail = {
        from: name,
        to: creds.USERNAME, 
        subject: 'New message from portfolio contact form',
        text: content
    }

    transporter.sendMail(mail, (error) => {
        if(error) {
            res.json({
                status: "you have failed"
            })
        } else {
            return res.json({
                status: "congrats smarty pants"
            })
        }
    })
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`the server has started on ${PORT}`))