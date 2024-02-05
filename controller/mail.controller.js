import nodemailer from 'nodemailer';

export const mailSend = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465, 
      secure: true,
      auth: {
        user: process.env.MAIL_FOR_EMAIL,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        ciphers: 'TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256',
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FOR_EMAIL,
      to: 'nitishkumar22553@gmail.com',
       subject: 'My Job',
       html:`<div><p>Company Name :-  ${req.body.name}</p> <p>Company Email :-  ${req.body.email}</p> <h1 className='font-semibold lext-lg '>Company Message :- ${req.body.message}</h1></div>`
    };

   

    // Send mail and log response
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({err:error.message})
  }
};
