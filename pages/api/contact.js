import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, contactNumber, email, country, inquiry } = req.body;

    // Create a transporter with SMTP configuration
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"${firstName}" <${email}>`, // Sender's name and email address
        to: 'harshaudayanga401@gmail.com', // Recipient's email address
        subject: 'New Message from Contact Form', // Subject line
        html: `
          <p><strong>Contact Person:</strong> ${firstName}</p>
          <p><strong>Contact Number:</strong> ${contactNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Message:</strong> ${inquiry}</p>
        `,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
