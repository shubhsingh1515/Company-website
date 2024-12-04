const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

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
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Email route
app.post("/send-email", (req, res) => {
  const { name, email, phone, company, service, comments } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    replyTo: email,
    to: process.env.EMAIL,
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

// AI/ML route
app.post("/api/ai", async (req, res) => {
  const { input } = req.body;
  const systemPrompt = "Your system prompt here";

  try {
    const response = await axios.post(
      "https://api.aimlapi.com/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: input,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.AI_API_KEY}`,
        },
      }
    );

    const aiMessage = response.data.choices[0].message.content;

    
    res.json({ message: aiMessage }); 
  } catch (error) {
    console.error(
      "Error details:",
      error.response ? error.response.data : error.message
    );

    res.status(500).json({
      error: "API request failed",
      details: error.response
        ? error.response.data
        : "No response received from AI API",
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
