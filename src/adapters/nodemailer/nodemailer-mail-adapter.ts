import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2b9e35002b782c",
    pass: "d10c5456d9f70b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
     await transport.sendMail({
       from : 'Equipe Feedget <oi@devblack.com.br>',
       to: 'Lucas Jesus <support@devblack.com.br>',
       subject,
       html : body
     });
  }
}