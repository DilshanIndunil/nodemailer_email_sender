const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.USER, // Sender gmail address
        pass: process.env.APP_PASSWORD, // App password from Gmail account
    },
});

const mailOptions = {
    from: {
        name: "Nodemailer",
        address: process.env.USER,
    }, // Sender address
    to: "shamikanaveen4@gmail.com", // list of receivers
    subject: "Send email using nodemailer and gmail.", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments: [
        {
            filename: 'test.pdf',
            path: path.join(__dirname, 'test.pdf'),
            contentType: 'application/pdf'
        },
        {
            filename: "email.png",
            path: path.join(__dirname, 'email.png'),
            contentType: 'image/png'
        },
    ]
};

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions); // Pass mailOptions here
        console.log("Email sent successfully!");
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

sendMail(transporter, mailOptions);
