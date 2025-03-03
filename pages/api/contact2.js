import nodemailer from 'nodemailer';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { packageName, firstName, contactNumber, email, country, inquiry } = req.body;

        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD,
            },
        });

        try {
            await transporter.sendMail({
                from: '"ParadiseTours" <no-reply@yourcompany.com>', // sender address
                to: 'harshaudayanga401@gmail.com', // list of receivers
                subject: `New Booking Inquiry: ${packageName}`, // Subject line
                text: `
                    Package Name: ${packageName}
                    First Name: ${firstName}
                    Contact Number: ${contactNumber}
                    Email: ${email}
                    Country: ${country}
                    Inquiry: ${inquiry}
                `, // plain text body
                html: `
                    <p><strong>Package Name:</strong> ${packageName}</p>
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Contact Number:</strong> ${contactNumber}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Country:</strong> ${country}</p>
                    <p><strong>Inquiry:</strong> ${inquiry}</p>
                `, // html body
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
