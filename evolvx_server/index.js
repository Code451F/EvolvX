// IMPORTS
const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config();


//PORT
const PORT = 6000;
const app = express();
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });

//Receiving text
app.post('/send-text', (req, res) => {
    const text = req.body.text;
    console.log(`Received text: ${text}`);
})

//nodemailer 
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  //SENDING MAIL
  app.post("/send", function (req, res) {
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Nodemailer API",
      text: "Hi from your nodemailer API",
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
        res.json({ status: "Email sent" });
      }
    });
   });
   

   
   

