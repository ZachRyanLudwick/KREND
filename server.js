// server.js
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

console.log('Email User:', process.env.EMAIL_USER ? 'Set' : 'Not Set');
console.log('Email Password:', process.env.EMAIL_PASSWORD ? 'Set' : 'Not Set');
console.log('Recipient Email:', process.env.RECIPIENT_EMAIL ? 'Set' : 'Not Set');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    try {
      console.log('Received request:', req.body); // Add this line
  
      const { name, email, phone, service, message } = req.body;
  
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });
  
      // Add verification step
      try {
        await transporter.verify();
        console.log('SMTP connection verified');
      } catch (verifyError) {
        console.error('SMTP Verification failed:', verifyError);
        throw verifyError;
      }
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission - ${service}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      };
  
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Detailed error:', error); // Add this line
      res.status(500).json({ 
        message: 'Failed to send email',
        error: error.message 
      });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
