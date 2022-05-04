import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6d1d6518351390",
    pass: "d9e97c0c7234d1",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget  <oi@feedget.com>",
      to: "Kleverson Iwatani <kleversonkenji@gmail.com>",
      subject,
      html: body,
    });
  }
}
