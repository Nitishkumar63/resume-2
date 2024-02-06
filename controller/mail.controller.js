import nodemailer from 'nodemailer';


export const mailSend = async (req) => {
 const body = await req.json()
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
       subject: 'Job Application Details',
       html:`<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
       <h2 style="color: #007BFF; text-align: center;">Job Application Details</h2>
       <hr style="border: 1px solid #007BFF; margin-top: 10px; margin-bottom: 20px;">
       <p style="margin-bottom: 10px;"><strong style="color: #007BFF;">Company Name:</strong> ${body.name}</p>
       <p style="margin-bottom: 10px;"><strong style="color: #007BFF;">Company Email:</strong> ${body.email}</p>
       <h3 style="color: #343a40; margin-top: 20px;">Company Message:</h3>
       <p style="color: #6C757D;">${body.message}</p>
   </div>`
    };

    // Send mail and log response
     await transporter.sendMail(mailOptions);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};



