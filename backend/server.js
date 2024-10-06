const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Replace with your Gmail address
    pass: process.env.PASSWORD, // Replace with your App Password
  },
});

// Email route
app.post("/send-email", (req, res) => {
  const { name, email, phone, company, service, comments } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`, // Set the sender as the client's email
    replyTo: email, // Allow replies to the client's email
    to: process.env.EMAIL, // Your receiving email address
    subject: `Service request from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Company: ${company || "Not provided"}
      Service: ${service}
      Comments: ${comments}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
      res.status(500).send("Error sending email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully!");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
