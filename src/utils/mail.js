import nodemailer from 'nodemailer';
import { MAIL_HOST, MAIL_PASSWORD, MAIL_PORT, MAIL_USERNAME } from '../constants';
import Mailgen from 'mailgen';

const sendMail = async (option) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      // Appears in header & footer of e-mails
      name: 'Dcom',
      link: 'https://mailgen.js/',
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });

  var emailBody = mailGenerator.generate(option.mailTemplate);
  var emailText = mailGenerator.generatePlaintext(option.mailTemplate);

  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: MAIL_USERNAME,
      pass: MAIL_PASSWORD,
    },
  });

  async function main() {
    const info = await transporter.sendMail({
      from: 'Dcom 👻" <Dcom@gmail.com>', // sender address
      to: option.client, // list of receivers
      subject: option.subject, // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });
  }

  try {
    await main();
  } catch (error) {
    console.log(error);
  }
};

const verificationMail = (token) => {
  const mailTemplate = {
    body: {
      name: 'Dcom',
      intro:
        'Welcome to Dcom! We very much appreciate you signing up. To get started, please click the button below to verify your email address.',
      action: {
        instructions: 'To get started, please click the button below to verify your email address.',
        button: {
          color: '#22BC66',
          text: 'Verify Email Address',
          link: `http://localhost:3000/verify/${token}`,
        },
      },
      outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

const resetPasswordMail = (OTP) => {
  const mailTemplate = {
    body: {
      name: 'Dcom',
      intro:
        'Welcome to Dcom! We very much appreciate you signing up. To get started, please click the button below to verify your email address.',
      action: {
        instructions: 'To get started, please click the button below to verify your email address.',
        button: {
          color: '#22BC66',
          text: 'Verify Email Address',
          link: `http://localhost:3000/verify/${OTP}`,
        },
      },
      outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
}

sendMail({
  client: 'Dcom',
  subject: 'Welcome to Dcom',
  mailTemplate: verificationMail(),
});

export { sendMail , verificationMail , resetPasswordMail };
