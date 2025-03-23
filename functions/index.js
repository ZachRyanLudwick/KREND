const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendContactEmail = functions.database.ref('/contacts/{contactId}')
  .onCreate(async (snapshot, context) => {
    const formData = snapshot.val();

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: functions.config().email.user,
        pass: functions.config().email.password
      }
    });

    const mailOptions = {
      from: formData.email,
      to: process.env.DESTINATION_EMAIL,
      subject: `New Contact Form Submission from ${formData.name}`,
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      return null;
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error(error.message);
    }
  });